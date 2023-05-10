import { NextResponse } from "next/server";
import items from "../../../mockDB/data";

export async function GET() {
  return NextResponse.json(items);
}
