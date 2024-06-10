import mongoose from 'mongoose'
//Adding connection string here.

const mongoConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connectedto MONGO')
    } catch (err) {
        console.log('connection lost', err)
    }
}

export default mongoConfig