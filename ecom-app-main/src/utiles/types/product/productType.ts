import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true , unique: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    banner: { type: String },
    quantity: { type: Number, required: true },
    rating: { type: Number, required: true , default: 0},
    numReviews: { type: Number, required: true ,default: 0},
    countInStock: { type: Number, required: true ,default: 0},
    isFeatured: { type: Boolean, default: false },
    // colors: { type: [String], required: true },
    // sizes: { type: [String], required: true },
}, {
    timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product



export type ProductType = {
    _id?: string
    name: string
    slug: string
    description: string
    price: number
    brand: string
    category: string
    image: string
    banner?: string
    quantity: number
    rating: number
    numReviews: number
    countInStock: number
    colors?: string[]
    sizes?: string[]
}