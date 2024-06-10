import productActions from "@/actions/productActions/productAction";
import AddToCart from "@/components/product/AddToCart";
import { convertDocToObj } from "@/utiles/util";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// export async function generateMetadata({
//   params}: { params: { slug: string } }) {
//   const product = await productActions.getBySlug(params.slug);
//   if (!product) {
//     return {
//       title: "Product Not Found",
//     };
//   }
//   return {
//     title: product.name,
//   };
//   }
async function ProductDetails({ params }: { params: { slug: string } }) {
  const product = await productActions.getBySlug(params.slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <div className="">
        <div className="grid md:grid-cols-4 md:gap-4 pt-24">
          <div className="md:col-span-2">
            <Image
              src={`/images/${product.image}`}
              alt={product.name}
              width={440}
              height={340}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="ml-24 mt-20">
            <ul>
              <li className="text-4xl">{product.name}</li>
              <li className="text-2xl">{product.price}€</li>


              <li className="text-xs mt-2 ">{product.description}</li>
              <li className="text-xs mt-2">100% Recycled Materials</li>
            </ul>
            <div className="">
              <div className="">
                <div className="flex justify-between">
                  <div className="justify-start mt-4">
                    <button className="mr-4 btn btn-primary btn-sm bg-white hover:bg-black hover:text-white border-white hover:border-white">
                      Buy now
                    </button>
                    <AddToCart
                      item={{
                        ...convertDocToObj(product),
                        qty: 0,
                        color: "",
                        size: "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-lg mt-12">
              <div className="divide-y divide-gray-100">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    Materials
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    List of Materials that were used
                    {product.description}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </>
  );
}

export default ProductDetails;
