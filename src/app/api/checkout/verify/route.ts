import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = body;

  // Verify signature
  const sign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (sign !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (userId) {
    const total = orderData.items.reduce((s: number, i: any) => s + i.price * i.quantity, 0);
    await prisma.order.create({
      data: {
        userId,
        totalAmount: total,
        paymentId: razorpay_payment_id,
        status: "PAID",
        address: JSON.stringify(orderData.address),
        items: {
          create: orderData.items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            price: item.price,
          })),
        },
      },
    });
  }

  return NextResponse.json({ success: true });
}
