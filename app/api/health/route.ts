import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({status:"ok",service:"pt-guyub-tunggal-songo-api",timestamp:new Date().toISOString()});}
