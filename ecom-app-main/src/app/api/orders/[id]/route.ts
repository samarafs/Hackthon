
import connectDB from '@/actions/dbConnections'
import { auth } from '@/lib/auth'
import OrderModel from '@/models/orderModel'

export const GET = auth(async (...request: any) => {
  const [req, { params }] = request
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await connectDB()
  const order = await OrderModel.findById(params.id)
  return Response.json(order)
}) as any