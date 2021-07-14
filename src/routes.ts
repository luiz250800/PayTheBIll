import {Router, Request, Response} from 'express'
import ProductCategoryRoutes from './routes/ProductCategoryRoutes'

const routes = Router()

routes.use('/api/', ProductCategoryRoutes)
routes.use((request: Request, response: Response) => {
    response.send(404)
})

export default routes;