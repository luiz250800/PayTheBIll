import {Request, Response} from 'express'
import CategoriaProduto from '../database/schemas/CategoriaProduto'

export default class CategoriaProdutoController {
    async listAll(request: Request, response: Response) {
        await CategoriaProduto.find().then((data: any) => {
            return response.status(200).json(data)
        }).catch((error: string) => {
            return response.status(500).json({message: "Erro interno no servidor"})
        })
    }
}