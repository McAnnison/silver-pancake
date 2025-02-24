import { Schem } from 'mongoose';

const StockSchema = new Schem({
    productName: String,
    quantity: Number,
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})