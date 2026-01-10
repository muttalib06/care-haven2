import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    // console.log("selected caregiver", id);

    // id validation
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid caregiver ID" },
        { status: 400 }
      );
    }

    const caregiversCollection = await getCollection("caregivers");
    const caregiver = await caregiversCollection.findOne({
      _id: new ObjectId(id),
    });

    //     if data is not found;
    if (!caregiver) {
      return NextResponse.json(
        { message: "Caregiver not found" },
        { status: 404 }
      );
    }

    // success response;
    return NextResponse.json(caregiver, { status: 200 });
  } catch (error) {
    console.log("API error", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
