const request = require('supertest');
const app = require('../index.js');
 
describe('Resource Unit test', () => {
    // Assuming you have a function to generate JWT token
    

    it('should create a new véhicule', async () => {
        const newItem = {
            name: "Test",
            description: "Test",
            matricule:"198TN90",
            status:"Pending"
        };

     

        const res = await request(app)
            .post('/api/vehicule/create')
            .send(newItem);

        console.log(res.body);
        expect(res.statusCode).toEqual(201);
        expect(res.body.success).toEqual(true);
       
    });

      
});