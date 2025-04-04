import { app } from './app'
import https from 'https'
import { AddressInfo } from 'net'
import { typegooseConnection } from './typegoose/bd/typegooseConnection'
import dotenv from 'dotenv'

dotenv.config()

const NUMBER_PORT = process.env.PORT || 3000
let port = 0
if (typeof NUMBER_PORT === 'string') {
    port = parseInt(NUMBER_PORT)
}
if (NUMBER_PORT === 3000) {
    port = NUMBER_PORT
}

typegooseConnection()


const server = app.listen(port, async () => {
    const protocol = server instanceof https.Server ? 'https' : 'http'
    const address = server.address() as AddressInfo
    const host = address.address === '::' ? 'localhost' : address.address
    const port = address.port
    console.log(`Server running in ${protocol}://${host}:${port}`)
})