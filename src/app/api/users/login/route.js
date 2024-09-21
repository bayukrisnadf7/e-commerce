import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data;
        if(!email || !password) return NextResponse.json({status:400, message:"All fields are required"});
        const user = await prisma.user.findFirst({
            where:{
                email,
                password
            }
        });
        if(!user) return NextResponse.json({status:400, message:"User not found"});
        return NextResponse.json({status:200, data:user});
    } catch (error) {
        error.message = error.message;
        return NextResponse.json({ status: 500, message: error.message });
    }
}