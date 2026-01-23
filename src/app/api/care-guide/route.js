import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const guideCollection = await getCollection("guideCollection");
    const guidesData = await guideCollection.find({}).toArray();

    return NextResponse.json(guidesData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
