import { NextResponse } from "next/server";
import { getCollection } from "@/lib/db";

export async function GET() {
  try {
    const caregivers = await getCollection("caregivers");
    const allCaregivers = await caregivers.find({}).toArray();

    return NextResponse.json({ success: true, data: allCaregivers });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
