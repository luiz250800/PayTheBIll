import mongoose from 'mongoose'

const Produto = new mongoose.Schema({
    nmProduto: {
        type: String,
        require: true
    },
    dsProduto: {
        type: String,
    },
    vlProduto: {
        type: Number,
        require: true
    },
    nrPorcentagemDesconto: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('produto', Produto)