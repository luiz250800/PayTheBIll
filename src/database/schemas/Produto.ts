import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Produto = new Schema({
    categoriaProduto: [
        { 
            type: ObjectId, 
            ref: "categoriaProduto" 
        }
    ],
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