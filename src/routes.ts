import {Router, Request, Response} from 'express'
import categoriaProdutoRoutes from './routes/CategoriaProdutoRoutes'

const routes = Router()

routes.use('/api/', categoriaProdutoRoutes)
routes.use((request: Request, response: Response) => {
    response.send(404)
})

export default routes;