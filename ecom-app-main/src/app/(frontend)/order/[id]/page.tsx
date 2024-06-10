import OrderDetails from "@/components/order/OrderDetails";
import React from "react";

function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-24">
      <OrderDetails
        paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
        orderId={params.id}
      />
    </div>
  );
}

export default OrderDetailsPage;
