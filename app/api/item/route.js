import items from "../../../mockDB/data";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  data.id = Date.now();
  items.push(data);
  console.log(items);
  return NextResponse.json({ message: "Item has been added successfully" });
}
