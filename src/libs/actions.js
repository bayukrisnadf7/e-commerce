"use server";

import prisma from "./prisma";

export default async function POST(request){
    const { email, username, address, gender, password } = await request.json();
    const data = { email, username, address, gender, password };
    const createDataRegister = await prisma.User.create({ data: data });
    if(createDataRegister){
        return Response.json({ status: 200, isCreated: true });
    } else {
        return Response.json({ status: 500, isCreated: false });
    }
}