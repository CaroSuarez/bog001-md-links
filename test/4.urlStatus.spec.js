const urlStatus = require('../src/4.urlStatus');

describe('urlStatus Function', () => {

    it('should be a function', () => {
        expect(typeof urlStatus).toBe('function');      
    });

    it('should resolve to the status code of a passed url', () => {
        return urlStatus('https://www.google.com/').then(statusCode => {
            expect(statusCode).toBe(200);
          });     
    });

    it('should resolve to NA if passed url is undefined', () => {
        return urlStatus(undefined).then(statusCode => {
            expect(statusCode).toBe('NA');
          });     
    });
    
    it('should resolve to error if the request fails for any reason', () => {
        return urlStatus('ejemplo').then(statusCode => {
            expect(statusCode).toBe('Error in the request');
          });     
    });
})