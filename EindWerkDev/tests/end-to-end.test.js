const request = require('supertest')
const router = require('../src2/server.js')


describe('test end-to-end logs', () => {
    test('Check if the GET request finds this session', async () =>{
        const response = await request(router).get(`/api/sportagenda`).send()
        expect(response.status).toBe(200) 
    })

    test('Check if the GET request finds this session', async () =>{
        const response = await request(router).post(`/api/sportagenda`).send({
            date: new Date(),
            stappen: 0,
            calorieen: 0,
            sporturen: 0
        })
        expect(response.status).toBe(201) 
        
    })

})