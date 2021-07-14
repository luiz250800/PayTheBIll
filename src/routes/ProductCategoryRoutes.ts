import {Router} from 'express'
import ProductCategoryController from '../controllers/ProductCategoryController'

const productCategoryRoutes: Router = Router()
const productCategoryController = new ProductCategoryController()

productCategoryRoutes.get('/productCategory', productCategoryController.listAll)
productCategoryRoutes.post('/productCategory/create', productCategoryController.store)
productCategoryRoutes.put('/productCategory/update/:id', productCategoryController.update)
productCategoryRoutes.delete('/productCategory/delete/:id', productCategoryController.delete)

export default productCategoryRoutes