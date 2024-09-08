import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { id } = params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json({status:200, data:user});
    } catch (error) {
        error.message = error.message;
        return NextResponse.json({ status: 500, message: error.message });
    }
}