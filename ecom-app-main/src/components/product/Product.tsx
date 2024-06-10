import { ProductType } from "@/utiles/types/product/productType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import styles from '../../styles/cardProduct.module.css';


function Product({ Product }: { Product: ProductType }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${Product.slug}`} className={styles.productFigured}>
          <Image
            src={`/images/${Product.image}`}

            className={styles.productimage}

            alt={Product.name}
            width={400}
            height={400}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link href={`/product/${Product.slug}`}>{Product.name}</Link>
        </h2>
        <p className="mb-2 text-sm">{Product.category}</p>
        <p>${Product.price}</p>
        <div className="card-actions justify-end items-center">
          <div className="flex">
            {Product.colors?.map((color, index) => (
              <FaCircle
                key={index}
                color={color}
                className="mr-2 rounded-full border border-gray-300"
              />
            ))}
          </div>
          <div className="flex">
            {Product.sizes?.map((size, index) => (
              <p
                className="mr-2 rounded-full bg-orange-300 w-6 h-6 flex justify-center items-center"
                key={index}
              >
                {size === "small" ? "S" : size === "medium" ? "M" : "L"}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
