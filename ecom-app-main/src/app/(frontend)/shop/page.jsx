import productActions from "@/actions/productActions/productAction";
import Product from "@/components/product/Product";
import { productsData } from "@/utiles/data/productData";
import { ProductType } from "@/utiles/types/product/productType";
import styles from "../../../styles/shop.module.css";
import Image from "next/image";

export default async function Shop() {
  const { getLatestProduct, getIsFeatured } = productActions;
  const products = await getLatestProduct();
  const featured = await getIsFeatured();
  return (
    <div className="flex flex-col py-12 ">
      <div className="w-full flex justify-center align-center">
        <div className={styles.photo}>
          <h1 className="flex justify-center align-center text-6xl italic font-semibold mt-10 ">
            Shop my artwork
          </h1>
        </div>
      </div>
      <div className="w-full pt-44">
        <div className="pt-48">
          <div className={styles.search}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="20px"
              class="ml-3 fill-gray-600 absolute left-5 top-1/2 transform -translate-y-1/2 rotate-90"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg> */}
            <input
              type="email"
              placeholder="Search Something..."
              class="w-3/4 py-3 pl-12 pr-4 border border-gray-300 rounded-full outline-none bg-white text-gray-600 text-base shadow-sm  focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Product key={product.slug} Product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
