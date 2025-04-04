
import moment from 'moment-timezone'

describe('Fechas pruebas aisladas', () => {
    test('Probar formato de fecha anio 3000', () => {
        const futureTime = moment.tz('3000-12-01 00:00:00', 'America/Mexico_City')
        const formatted = futureTime.format('YYYY-MM-DD HH:mm:ss.SSS')
        const DateFinal = moment.utc(formatted).toDate()
        console.log('Formato con 00Z: ', DateFinal)
        console.log('Formatted: ', formatted)
        expect(formatted).toBe('3000-12-01 00:00:00.000')
    })

    test('Probar fecha actual', () => {
        const futureTime = moment.tz(new Date(), 'America/Mexico_City')
        const formatted = futureTime.format('YYYY-MM-DD HH:mm:ss.SSS')
        const DateFinal = moment.utc(formatted).toDate()
        console.log('Formato con 00Z: ', DateFinal)
        console.log('Formatted: ', formatted)
    })
})