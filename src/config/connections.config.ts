import dotenv from 'dotenv'
dotenv.config()
// const railwayEnv = process.env.RAILWAY_ENV || 'development'
// console.log(`Environment Railway: ${railwayEnv}`)

console.log("process.env.MONGO_DB_URI: ", process.env.MONGO_DB_URI)

export const conectionMongoDB = {
    MongoDB: {
        api: {
            uri: process.env.MONGO_DB_URI ?? ``,
        }
    }
}