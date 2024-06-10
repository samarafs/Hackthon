import productActions from "@/actions/productActions/productAction";
import Product from "@/components/product/Product";
import { productsData } from "@/utiles/data/productData";
import { ProductType } from "@/utiles/types/product/productType";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: process.env.APP_NAME || "Bazar App",
  description: process.env.APP_DESCRIPTION || "Bazar App",
};

async function Home() {
  const { getLatestProduct, getIsFeatured } = productActions;
  const products = await getLatestProduct();
  const featured = await getIsFeatured();
  return (
    <>
      <div className="w-full ">
        <Image
          src={`/Banner.jpg`}
          alt="Banner"
          width={1600}
          height={1400}
          className="w-full"
        />

        {/* <div className="w-full carousel rounded-box my-10 mt-20 ">
          {featured.map((product: ProductType, index) => (
            <div
              key={product._id}
              id={`slide-${index}`}
              className="carousel-item relative w-full "
            >
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={`/images/${product.image}`}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded"
                />
              </Link>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide-${
                    index === 0 ? featured.length - 1 : index - 1
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide-${
                    index === featured.length - 1 ? 0 : index + 1
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="flex justify-center w-full py-2 gap-2">
          {featured.map((product: ProductType, index) => (
            <a key={index} href={`#slide-${index}`} className="btn btn-xs">
              {index + 1}
            </a>
          ))}
        </div> */}
        <div className="flex justify-center text-3xl m-8">
          <p className="">My Artwork</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {products.map((product: ProductType) => (
            <Product key={product.slug} Product={product} />
          ))}
        </div>
        <div className="w-full flex justify-center ">
          <button className=" text-black bg-white border-black hover:bg-gray-800 hover:text-white font-medium  text-sm px-5 py-2.5 text-center mt-28 flex align-center mb-24">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
