import mongoose from 'mongoose'

const CategoriaProduto = new mongoose.Schema({
    nmCategoriaProduto: {
        type: String,
        require: true
    },
    nrPorcentagemDescontoCategoria: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('categoriaProduto', CategoriaProduto)