import {Request, Response} from 'express'
import ProductCategory from '../database/schemas/ProductCategory'
import {IProductCategory} from '../interfaces/IProductCategory'

export default class ProductCategoryController {
    async listAll(request: Request, response: Response): Promise<Response> {
        try {
            const listProductCategorys: IProductCategory = await ProductCategory.find()
            return response.status(200).json(listProductCategorys)
        } catch (error) {
            return response.status(500).json({message: "Erro interno no servidor."})
        }
    }

    async store(request: Request, response: Response): Promise<Response> {
        try {
            const productCategory = request.body as IProductCategory

            const insertProductCategory = await new ProductCategory(productCategory).save()

            return response.status(201).json(insertProductCategory)
        } catch (error) {
            return response.status(500).json({message: "Erro interno no servidor."})
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try {
            const idProductCategory = request.params.id as string
            const productCategory = request.body as IProductCategory

            const updateProductCategory = await ProductCategory.findByIdAndUpdate({_id: idProductCategory}, productCategory, {new: true})

            return response.status(200).json(updateProductCategory)
        } catch (error) {
            return response.status(500).json({message: "Erro interno no servidor."})
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try {
            const idProductCategory = request.params.id as string

            await ProductCategory.findByIdAndDelete(idProductCategory)
            
            return response.status(200).json({message: "Categoria deletada com sucesso."})
        } catch (error) {
            return response.status(500).json({message: "Erro interno no servidor."})
        }
    }
}