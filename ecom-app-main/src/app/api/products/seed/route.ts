import connectDB from "@/actions/dbConnections";
import ProductModel from "@/models/productModel";
import UserModel from "@/models/userModel";
import { productsData } from "@/utiles/data/productData";
import { NextResponse } from "next/server";

export async function GET() {
    // const { products , users} = productsData
    // await connectDB()
    // await ProductModel.deleteMany()
    // await ProductModel.insertMany(products)

    // await UserModel.deleteMany()
    // await UserModel.insertMany(users)

    // return  NextResponse.json({ 
    //     success: true,
    //     message: "Seeded successfully",
    //     users,
    //     products
    //  })
}

export async function POST( req: any) {
    const data = await req.json()

    await connectDB()
    const newProduct = new ProductModel(data)

    await newProduct.save()
    return NextResponse.json({ 
        success: true,
        message: "Seeded successfully",
        data
     })

}