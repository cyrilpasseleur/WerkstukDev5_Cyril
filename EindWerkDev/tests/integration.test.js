const request = require('supertest')
const router = require('../src2/server.js')

let uuid;
describe('check GET /storyblock ', () => {

test('check that GET/storyblock return all results & that all columns are defined ', async () => {
    try {
      const response = await request(router).get('/api/sportagenda');
      expect(response.body).not.toBeNull();
      expect(response.body[0]['uuid_']).toBeDefined();
      expect(response.body[0]['stappen']).toBeDefined();
      expect(response.body[0]['calorieen']).toBeDefined();
      expect(response.body[0]['sporturen']).toBeDefined();
     uuid = response.body[0]['uuid_']
      console.log(response.body[0]['uuid_'])
    } catch (error) {
      console.log(error);
    }
  })

  test('if user adds record with body', async () => {
    try {
      await request(router).post('/api/sportagenda')
        .send({ 
            date: new Date(),
            stappen: 0,
            calorieen: 0,
            sporturen: 0
        })
        .expect(200);
      
    } catch (error) {}
  });

  test('should return status code 200 and Json Type', () => {
    request(router).delete(`/api/sportagenda/${uuid}`)
        .expect(200)
        
});

})