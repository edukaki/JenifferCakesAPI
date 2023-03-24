import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        preco: { type: Number, required: true },
        serves: { type: Number, required: true },
        acrescimos: { type: Number, required: true },
        topper: { type: Number, required: true },
    },
    {
        versionKey: false,
    },
);

const cakes = mongoose.model('cakes', cakeSchema);
export default cakes;
