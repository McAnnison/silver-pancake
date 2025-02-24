import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    openingStock: {
        type: Number,
        required: true
    },
    production: {
        type: Number,
        required: true
    },
    totalInStock: {
        type: Number,
        required: true
    },
    dispatch: {
        type: Number,
        required: true
    },
    quantitiesRemaining: {
        type: Number,
        required: true
    },
    closingStock: {
        type: Number,
        required: true
    }
});

const Stock = mongoose.model('Stock', StockSchema);

export default Stock;