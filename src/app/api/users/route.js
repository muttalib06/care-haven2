import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const usersCollection = await getCollection("users");
    const data = await req.json();
    const result = await usersCollection.insertOne(data);

    return NextResponse.json({
      success: true,
      message: "Data inserted successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Insertion Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to insert data",
      },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    // console.log(searchParams);
    const email = searchParams.get("email");
    const userCollection = await getCollection("users");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await userCollection.findOne({ email: email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const userCollection = await getCollection("users");
    const updatedData = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required in query" },
        { status: 400 },
      );
    }

    //     update operation ;

    const result = await userCollection.updateOne(
      { email: email },
      { $set: { ...updatedData } },
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Update Success", result },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
