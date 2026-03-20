import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// POST /api/checkout/create-order
export async function POST(req: NextRequest) {
  const { amount } = await req.json();

  const body = JSON.stringify({
    amount: Math.round(amount * 100), // paise
    currency: "INR",
  });

  const auth = Buffer.from(
    `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
  ).toString("base64");

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();
  return NextResponse.json(data);
}
