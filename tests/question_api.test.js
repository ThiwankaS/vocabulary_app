const mongoose = require('mongoose');
mongoose.set('bufferTimeoutMS', 30000);
const supertest = require('supertest');
const app = require('../app.js');
const api = supertest(app);
const helper = require('../utils/helper.js');

const initialQuestions = [
  {
    word: 'Minä',
    correctAnswer: 'Me',
    options: ['She', 'He', 'Me', 'You', 'They'],
  },
  {
    word: 'Sinä',
    correctAnswer: 'You',
    options: ['She', 'He', 'Me', 'You', 'They'],
  },
  {
    word: 'Hän',
    correctAnswer: 'She/He',
    options: ['She/He', 'We', 'Me', 'You', 'They'],
  },
  {
    word: 'Opettaja',
    correctAnswer: 'Teacher',
    options: ['Officer', 'Friend', 'Husband', 'Teacher', 'Wife'],
  },
];

describe(' Testing api/questions api ', () => {

  beforeAll(() => {
    return helper.initializeDatabase(initialQuestions);
  });

  test('- questions are returned as json', async () => {
    await api
    .get('/api/questions')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  });

  test('- only 04 questions in the DB initially ', async () => {
    const response = await api.get('/api/questions');
    expect(response.body).toHaveLength(initialQuestions.length)
  });

  test('- retun only requested number of questions', async () => {
    const requestingAmount = 2;
    const respone = await api.get(`/api/questions/${requestingAmount}`);
    expect(respone.body).toHaveLength(requestingAmount);
  });

  test('- ID filed added to questions from the backend', async () => {
    const requestingAmount = 1;
    const respone = await api.get(`/api/questions/${requestingAmount}`);
    expect(respone.body[0].id).toBeDefined();
  });

  test('- questions returned are in standard format', async () => {
    const respone = await api.get(`/api/questions`);
    expect(respone.body.includes(initialQuestions[0]));
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});