import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Mongo Db is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true, // Use boolean values, not strings
            useUnifiedTopology: true, // Use boolean values, not strings
        });
        isConnected = true;
        console.log('Mongo Db is connected');
    } catch (error) {
        console.log(error); // Use console.error for logging errors
    }
};
