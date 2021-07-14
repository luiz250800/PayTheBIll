import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Product = new Schema({
    productCategory: [
        { 
            type: ObjectId, 
            ref: "productCategory" 
        }
    ],
    nmProduct: {
        type: String,
        require: true
    },
    dsProduct: {
        type: String,
    },
    vlProduct: {
        type: Number,
        require: true
    },
    nrPercentDiscount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    }
})

export default mongoose.model('product', Product)