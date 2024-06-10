import connectDB from "@/actions/dbConnections";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, email, password } = await request.json()
    const hashedPassword = await bcrypt.hash(password, 10)
    await connectDB()
    const userModel = new UserModel({
        name,
        email,
        password: hashedPassword
    })

    try {
        const user = await userModel.save()
        return NextResponse.json({
            message: "User created successfully",
        },
            { status: 201 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
        },
            { status: 500 })
    }
}