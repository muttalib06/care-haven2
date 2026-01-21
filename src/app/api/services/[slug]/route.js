import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
//     console.log("slug in api", slug);
    const serviceCollection = await getCollection("serviceDetail");
    const service = await serviceCollection.findOne({ slug: slug });

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.log("API error", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
