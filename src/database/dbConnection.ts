import mongoose from 'mongoose';

class Connection {
    public mongodbConnection() {
        return mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/db_pay_the_bill', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    }
}

export default new Connection