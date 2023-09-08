const request = require('supertest');
const app = require('../app');


describe('GET /api', () => {
    it('should return 200 status code if api is accessible', async () => {
      const response = await request(app).get('/api').query({ slack_name: 'Adeyinka Oresanya', track: 'backend' })
      expect(response.statusCode).toBe(200);
    });
  });


  describe('GET /api', () => {
    it('should return JSON with the defined format', async () => {
      const response = await request(app).get('/api').query({ slack_name: 'Adeyinka Oresanya', track: 'backend' });
      const definedFormat =  {

        slack_name: expect.any(String),
        current_day: expect.any(String),
        utc_time: expect.any(String),
        track: expect.any(String),
        github_file_url: expect.any(String),
        github_repo_url: expect.any(String),
        status_code: expect.any(Number),
       
    };
    expect(response.body).toEqual(definedFormat);
    });
  });


  describe('GET /api', () => {
    it('should return correct data points in the returned JSON', async () => {
      const response = await request(app).get('/api').query({ slack_name: 'Adeyinka Oresanya', track: 'backend' });
      const utc_time = new Date(response.body.utc_time);
      const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
      expect(response.body.slack_name).toBe('Adeyinka Oresanya');
      expect(utc_time instanceof Date).toBe(true);
      expect(weekdaysArray).toContain(response.body.current_day);
      expect(response.body.track).toBe('backend');
      expect(response.body.github_file_url).toBe('bbbb');
      expect(response.body.github_repo_url).toBe('https://github.com/adeyinkaoresanya/hng-stage-one-task');
      expect(response.body.status_code).toBe(200);
    });
  });


 