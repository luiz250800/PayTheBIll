import mongoose from 'mongoose'

const ProductCategory = new mongoose.Schema({
    nmProductCategory: {
        type: String,
        require: true
    },
    nrPercentDiscountCategory: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    }
})

export default mongoose.model('productCategory', ProductCategory)