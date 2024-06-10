import { cartType } from "@/utiles/types/order/cartType";
import { OrderItem } from "@/utiles/types/order/orderType";
import { ShippingAddressType } from "@/utiles/types/order/shippingAddressType";
import { round2 } from "@/utiles/util";

import { create } from "zustand";
import { persist } from "zustand/middleware"


const initialState: cartType = {
    items: [],
    itemPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    paymentMethod: "PayPal",
    shippingAddress: {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: ""
    }
}

export const cartStore = create<cartType>()(persist(() => initialState, {
    name: "cartStore",
}))

export default function useCartService() {
    const { items, itemPrice, shippingPrice, taxPrice, totalPrice, paymentMethod, shippingAddress } = cartStore()
    return {
        items,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        paymentMethod,
        shippingAddress,

        increase: (item: OrderItem) => {
            const exist = items.find((x) => x.slug === item.slug)
            const updateItemCart = exist ? items.map((x) => x.slug ===
                item.slug ? { ...x, qty: x.qty + 1 } : x) : [...items, { ...item, qty: 1 }]

            const { itemPrice, shippingPrice, taxPrice, totalPrice } = calcPrice(updateItemCart)
            cartStore.setState({ items: updateItemCart, itemPrice, shippingPrice, taxPrice, totalPrice })
        },
        decrease: (item: OrderItem) => {
            const exist = items.find((x) => x.slug === item.slug)
            if (!exist) return
            const updateItemCart = exist.qty === 1 ? items.filter((x) => x.slug !== item.slug) : items.map((x) => x.slug === item.slug ? { ...x, qty: x.qty - 1 } : x)

            const { itemPrice, shippingPrice, taxPrice, totalPrice } = calcPrice(updateItemCart)
            cartStore.setState({ items: updateItemCart, itemPrice, shippingPrice, taxPrice, totalPrice })
        },
        saveShipppingAddress: (shippingAddress: ShippingAddressType) => {
            cartStore.setState({ shippingAddress })
        },
        savePaymentMethod: (paymentMethod: string) => {
            cartStore.setState({ paymentMethod })
        },
        clearCart: () => {
            cartStore.setState({ items: [], itemPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 })
        },
        init : () => {
            cartStore.setState(initialState)
        }
    }
}

export const calcPrice = (items: OrderItem[]) => {
    const itemPrice = items.reduce((a, c) => a + c.price * c.qty, 0)
    const shippingPrice = round2(itemPrice > 100 ? 0 : 100)
    const taxPrice = round2(Number(0.15 * itemPrice))
    const totalPrice = round2(itemPrice + shippingPrice + taxPrice)
    return {
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    }
}

