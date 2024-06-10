import dbConnection from '@/actions/dbConnections'
import { auth } from '@/lib/auth'
import { paypal } from '@/lib/paypal'
import OrderModel from '@/models/orderModel'

export const POST = auth(async (...request: any) => {
  const [req, { params }] = request
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnection()

  const order = await OrderModel.findById(params.id)
  if (order) {
    try {
      const paypalOrder = await paypal.createOrder(order.totalPrice)
      return Response.json(paypalOrder)
    } catch (err: any) {
      return Response.json(
        { message: err.message },
        {
          status: 500,
        }
      )
    }
  } else {
    return Response.json(
      { message: 'Order not found' },
      {
        status: 404,
      }
    )
  }
}) as any