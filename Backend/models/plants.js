import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    common_name: { type: String, required: true },
    Categories: { type: String, required: true},
    Climat: { type: String, required: true},
    Zone: { type: String, required: true },
}, { timestamp: true })

//MIGHT WANT WANT ADD A USER
//user: { type: String, required: true }
// might be an object id later.


// WILL NEED TO ADD A USER PROPERTY  user: {type: String, require: true}
// for capstone will need mutiple schema or multiple models


// plantSchema.index({ common_name: 1 });
// export default mongoose.model('plant', plantSchema)

// or you can write it like this
const plant = mongoose.model('savedPlants', plantSchema)
export default plant
