import productActions from "@/actions/productActions/productAction";
import ProductPagination from "@/components/product/ProductPagination";
import SearchProductForm from "@/components/product/SearchProductForm";
import { ProductType } from "@/utiles/types/product/productType";
import Link from "next/link";
import React from "react";

async function Products({ searchParams}: { searchParams: any }) {

  const { getLatestProduct, countNumberOfProducts } = productActions;
  const count: number = await countNumberOfProducts();
  const products = await getLatestProduct(searchParams.query || "", searchParams.page || 1);

console.log("count of products", count);

  return (
    <div className="flex flex-col my-3 mx-auto">
      <div className="overflow-x-auto">
        {/* Search bar */}
        <SearchProductForm />    
        <button><Link href="/dashboard/products/addProduct">Add Product</Link></button>
        {/* Product table */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>View </th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: ProductType, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <Link href={`/product/${product.slug}`}>View</Link>
                </td>
                <td>
                 <button className="btn btn-error">Delete</button>
                </td>
                <td>
                  <Link className="btn btn-warning" href={`/dashboard/products/updateProduct/${product._id}`}>
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ProductPagination count={count} />
      </div>
    </div>
  );
}

export default Products;
