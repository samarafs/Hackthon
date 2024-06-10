"use client";
import useCartService from "@/hooks/store/useCartStore";
import { OrderItem } from "@/utiles/types/order/orderType";
import React, { useEffect, useState } from "react";

function AddToCart({ item }: { item: OrderItem }) {
  const { items, increase, decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | null>();

  useEffect(() => {
    setExistItem(items.find((i) => i.slug === item.slug));
  }, [items, item]);

  const addToCart = () => {
    increase(item);
  };

  return existItem ? (
    <div className="flex gap-2 mt-4 w-full">
      <button
        className="btn btn-primary btn-sm bg-white text-black hover:bg-black hover:text-white border-white hover:border-white"
        onClick={() => decrease(item)}
      >
        -
      </button>
      <span>{existItem.qty}</span>
      <button
        className="btn btn-primary btn-sm bg-white text-black hover:bg-black hover:text-white border-white hover:border-white"
        onClick={() => increase(item)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary btn-sm border-white bg-black text-white hover:bg-white hover:text-black"
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
