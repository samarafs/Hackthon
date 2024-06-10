import { OrderItem } from "./orderType";
import { ShippingAddressType } from "./shippingAddressType";


export type cartType= {
    items: OrderItem[],
    itemPrice: number,
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
    paymentMethod: string,
    shippingAddress: ShippingAddressType
}