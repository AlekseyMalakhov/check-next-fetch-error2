import { NextResponse } from "next/server";
import items from "@/mockDB/data";

export async function GET() {
    console.log(items);
    return NextResponse.json(items);
}
