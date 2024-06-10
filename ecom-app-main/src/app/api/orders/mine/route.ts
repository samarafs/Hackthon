
import dbConnection from '@/actions/dbConnections'
import { auth } from '@/lib/auth'
import OrderModel from '@/models/orderModel'

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  const { user } = req.auth
  await dbConnection()
  const orders = await OrderModel.find({ user: user._id })
  return Response.json(orders)
}) as any