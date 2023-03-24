import mongoose from 'mongoose';

const flavorSchema = new mongoose.Schema({
    value: { type: String, required: true },
    label: { type: String, required: true },
});

const flavors = mongoose.model('flavors', flavorSchema);
export default flavors;
