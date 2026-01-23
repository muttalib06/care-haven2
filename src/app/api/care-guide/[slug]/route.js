import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const guideCollection = await getCollection("guideCollection");
    const guideData = await guideCollection.findOne({ slug: slug });
    return NextResponse.json(guideData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
