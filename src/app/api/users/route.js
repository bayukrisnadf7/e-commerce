import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
export async function POST(request){
  try {
    const data = await request.json();
    const { email, password } = data;
    const createDataRegister = await prisma.user.create({
      data: {
        email,
        password,
      }    
    })
    return NextResponse.json({status:200, data:createDataRegister});
  } catch (error) {
    error.message = error.message;
    return NextResponse.json({ status: 500, message: error.message });
  }
}
export async function GET(){
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({status:200, data:users});
  } catch (error) {
    error.message = error.message;
    return NextResponse.json({ status: 500, message: error.message });
  }
}
