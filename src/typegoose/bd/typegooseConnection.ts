import mongoose from "mongoose"
import { conectionMongoDB } from "../../config/connections.config"

export const typegooseConnection = async () => {
    try {
    
        const db = await mongoose.connect(conectionMongoDB.MongoDB.api.uri, {
            dbName: `backend`
        })        
        console.log(`backend - MongoDB Typegoose Database is connected to`, db.connection.db.databaseName)
        
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}