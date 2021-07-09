import {Router} from 'express'
import CategoriaProdutoController from '../controllers/CategoriaProdutoController'

const categoriaProdutoRoutes: Router = Router()
const categoriaProdutoController = new CategoriaProdutoController()

categoriaProdutoRoutes.get('/categoriaProduto', categoriaProdutoController.listAll)

export default categoriaProdutoRoutes