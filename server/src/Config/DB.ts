import mongoose from 'mongoose';

export const connectDB = async () => {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }).catch(error => {throw error});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
}