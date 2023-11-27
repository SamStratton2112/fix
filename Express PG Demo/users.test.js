process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('./app')
const db = require('./db')

let testUser;

beforeEach(async()=>{
    const results = await db.query('INSERT INTO users (name, type) VALUES ("Milo", "cat") RETURNING *')
    testUser = results.rows[0]
})

describe("Test", ()=>{
    test('test', ()=>{
        console.log(testUser)
        expect(1).toBe(1)
    })
})