import { cache } from "react";
import connectDB from "../dbConnections";
import ProductModel from "@/models/productModel";
import { ProductType } from "@/utiles/types/product/productType";


const getLatestProduct = cache(async (query?: string, page: number=1) => {
    const regex = new RegExp(query || "", "i");
    const ITEMS_PER_PAGE = 5;
    await connectDB();
    const products = await ProductModel.find({ name: { $regex: regex }}).sort({_id: -1}).limit(ITEMS_PER_PAGE).skip((page - 1) * ITEMS_PER_PAGE).lean();
    // console.log("products pagination ", products);
    
    return products as ProductType[]
});

const countNumberOfProducts = cache(async () => {
    await connectDB();
    const count = await ProductModel.countDocuments();
    return count
  });
    
const getIsFeatured =cache(async()=>{
    await connectDB();
    const products = await ProductModel.find({isFeatured: true}).limit(3).lean();
    return products as ProductType[]
})
const getBySlug = cache(async(slug: string)=>{
    await connectDB();
    const product = await ProductModel.findOne({slug})
    return product as ProductType
})
const productActions = {
    getLatestProduct,
    getIsFeatured,
    getBySlug,
    countNumberOfProducts
} 

export default productActions