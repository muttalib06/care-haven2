import { NextResponse } from "next/server";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const caregiversCollection = await getCollection("caregivers");
    const allCaregivers = await caregiversCollection.find({}).toArray();

    return NextResponse.json({ success: true, data: allCaregivers });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}


