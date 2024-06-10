"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ProductForm() {
  const [image , setImage] = React.useState<any>(null)
  const [banner , setBanner] = React.useState<any>(null)
  type Inputs = {
    name: string;
    slug: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    image: string;
    banner: string;
    quantity: number;
    countInStock: number;
    isFeatured: boolean;
    available: boolean;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      price: 0,
      brand: "",
      category: "",
      image: "",
      banner: "",
      quantity: 0,
      countInStock: 0,
      isFeatured: false,
      available: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
   
    const { name, slug, description, price, brand, category, quantity, countInStock, isFeatured, available} = data
    // Add your logic here
    try {
      const response = await fetch("/api/products/seed", {
        method: "POST",
        body: JSON.stringify({
          name,
          slug,
          description,
          price,
          brand,
          category,
          image,
          banner,
          quantity,
          countInStock,
          isFeatured,
          available
        }),
      });

      if (response.ok) {
        toast.success("Product added successfully");
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="card max-w-lg p-4 mx-auto my-4 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="my-3">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>

          {/* Slug  */}
          <div className="my-3">
            <label htmlFor="slug" className="label">
              Slug
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-full"
              {...register("slug", { required: true })}
            />
            {errors.slug && <p className="text-red-500">Slug is required</p>}
          </div>

          {/* Price */}
          <div className="my-3">
            <label htmlFor="price" className="label">
              Price
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-full"
              {...register("price", { required: true })}
            />
            {errors.price && <p className="text-red-500">Price is required</p>}
          </div>

          {/* Description */}
          <div className="my-3">
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full max-w-full"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500">Description is required</p>
            )}
          </div>

          {/* Images */}
          <div className="my-3">
            <label htmlFor="image" className="label">
              Images
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-full"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={(event) => {
                const files = event.target?.files;
                if (files) {
                  setImage(files[0]?.name);
                }
              }}
            />
            {errors.image && (
              <p className="text-red-500">Images are required</p>
            )}
          </div>

          {/* Banner Images */}
          <div className="my-3">
            <label htmlFor="banner" className="label">
              Images
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-full"
              accept="image/*"
              {...register("banner", { required: true })}
              onChange={(event) => {
                const files = event.target?.files;
                if (files) {
                  setBanner(files[0]?.name);
                 
                }
              }}
            />
            {errors.image && (
              <p className="text-red-500">banner Images are required</p>
            )}
          </div>

          {/* Category */}
          <div className="my-3">
            <label htmlFor="category" className="label">
              Category
            </label>
            <select
              className="select select-bordered w-full max-w-full"
              {...register("category", { required: true })}
            
            >
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              {/* Add more options as needed */}
            </select>
            {errors.category && (
              <p className="text-red-500">Category is required</p>
            )}
          </div>

          {/* Brand */}
          <div className="my-3">
            <label htmlFor="brand" className="label">
              Brand
            </label>
            <select
              className="select select-bordered w-full max-w-full"
              {...register("brand", { required: true })}
            >
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
              {/* Add more options as needed */}
            </select>
            {errors.brand && <p className="text-red-500">Brand is required</p>}
          </div>

          {/* Count in Stock */}
          <div className="my-3">
            <label htmlFor="countInStock" className="label">
              Count In Stock
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-full"
              {...register("countInStock", { required: true })}
            />
            {errors.countInStock && (
              <p className="text-red-500">Count In Stock is required</p>
            )}
          </div>
          {/* Colors
          <div className="my-3">
            <label htmlFor="colors" className="label">
              Colors
            </label>
            <select
              className="select select-bordered w-full max-w-full"
              {...register("colors", { required: true })}
              multiple
            >
              <option value="color1">Color 1</option>
              <option value="color2">Color 2</option>
              <option value="color3">Color 3</option>
              {/* Add more options as needed */}
            {/* </select>
            {errors.colors && (
              <p className="text-red-500">Colors are required</p>
            )}
        //   </div> */}

       


          {/* Quantity */}
          <div className="my-3">
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-full"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <p className="text-red-500">Quantity is required</p>
            )}
          </div>

          {/* Is Featured */}
          <div className="my-3">
            <label htmlFor="isFeatured" className="label">
              Is Featured
            </label>
            <select
              className="select select-bordered w-full max-w-full"
              {...register("isFeatured", { required: true })}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            {errors.isFeatured && (
              <p className="text-red-500">Is Featured is required</p>
            )}
          </div>

          {/* Available */}
          <div className="my-3">
            <label htmlFor="available" className="label">
              Available
            </label>
            <input
              type="checkbox"
              className="checkbox"
              {...register("available")}
            />
          </div>

          <div className="my-3">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
