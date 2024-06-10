"use client";
import useCartService from "@/hooks/store/useCartStore";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
//click on Cart
function CartDetails() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { items, itemPrice, increase, decrease } = useCartService();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <h1 className="pt-20 texfont-roboto t-3xl">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="flex justify-center mt-20 h-screen">
          <div className="text-center">
            Cart is empty{" "}
            <Link href={"/payment"} className="text-blue-500">
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 mt-20">
          <div className="md:col-span-3 overflow-x-auto ">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={`/images/${item.image}`}
                              alt={item.name}
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-2">
                        <button
                          className="btn btn-xs btn-secondary"
                          onClick={() =>
                            decrease({ ...item, qty: item.qty - 1 })
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="input input-bordered w-16 text-center"
                          value={item.qty}
                          onChange={(e) => {
                            const newQty = parseInt(e.target.value);
                            if (newQty > 0) {
                              increase({ ...item, qty: newQty });
                            }
                          }}
                        />
                        <button
                          className="btn btn-xs btn-primary"
                          onClick={() =>
                            increase({ ...item, qty: item.qty + 1 })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>${item.price}</td>
                    <td>${itemPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <ul className="flex flex-col gap-3">
                <li>
                  <div>
                    subtotal ({items.reduce((a, c) => a + c.qty, 0)} items): $
                    {itemPrice}
                  </div>
                  <div>estimated shipping:</div>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/shipping")}
                    className="btn btn-primary w-full"
                  >
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartDetails;