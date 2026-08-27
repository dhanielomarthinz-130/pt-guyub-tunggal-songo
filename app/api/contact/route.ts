import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir=path.join(process.cwd(),"data");
const filePath=path.join(dataDir,"inquiries.json");

type Inquiry={id:string;name:string;email:string;phone?:string;company?:string;service?:string;message:string;createdAt:string};

async function load():Promise<Inquiry[]>{
  try{return JSON.parse(await readFile(filePath,"utf8"));}
  catch{return []}
}

export async function POST(req:Request){
  try{
    const body=await req.json();
    const name=String(body.name??"").trim(); const email=String(body.email??"").trim(); const message=String(body.message??"").trim();
    if(!name||!email||!message) return NextResponse.json({message:"Nama, email, dan pesan wajib diisi."},{status:400});
    const inquiry:Inquiry={id:crypto.randomUUID(),name,email,phone:body.phone,company:body.company,service:body.service,message,createdAt:new Date().toISOString()};
    await mkdir(dataDir,{recursive:true}); const items=await load(); items.push(inquiry); await writeFile(filePath,JSON.stringify(items,null,2),"utf8");
    return NextResponse.json({ok:true,id:inquiry.id});
  }catch(err:any){
    console.error("POST /api/contact error:", err);
    return NextResponse.json({message:"Gagal memproses permintaan.",error:String(err?.message||err)},{status:500});
  }
}

export async function GET(){
  const items=await load();
  return NextResponse.json({count:items.length,inquiries:items});
}
