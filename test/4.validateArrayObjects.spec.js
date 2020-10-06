const validateArrayObjects = require('../src/4.validateArrayObjects');

let objectArrayMock1= [
    {
        file: 'Escritorio/ejemplo1.md',
        text: '[google con error]',
        link: 'https://www.gogle.com/'
    }
]

let objectArrayMock2 = [
    {
        file: 'Escritorio/ejemplo2.md',
        text: '[manual mocks]',
        link: 'https://jestjs.io/docs/en/manual-mocks'
    }
]

let objectArrayMock3 = [    
    {
        file: 'Escritorio/ejemplo2.md',
        text: '[manual mocks]',
        link: undefined
    }
]

let promiseResolved1= [
    {
        file: 'Escritorio/ejemplo1.md',
        text: '[google con error]',
        link: 'https://www.gogle.com/',
        status: 'Error in the request'
    }
]

let promiseResolved2 = [
    {
        file: 'Escritorio/ejemplo2.md',
        text: '[manual mocks]',
        link: 'https://jestjs.io/docs/en/manual-mocks',
        status: 200
    }
]

let promiseResolved3 = [    
    {
        file: 'Escritorio/ejemplo2.md',
        text: '[manual mocks]',
        link: undefined,
        status: 'NA'
    }
]




describe('validateArrayObjects functions', () => {

    it('should be a function', () => {
        expect(typeof validateArrayObjects).toBe('function');      
    });

    it('resolves in the array of objects with the status code of the link', () => {
        
        let promises = validateArrayObjects(objectArrayMock1);
        return Promise.all(promises).then(promiseResolved => {
            expect(promiseResolved).toEqual(promiseResolved1);        
          });
    });

    it('resolves in the array of objects with the status code of the link', () => {
        
        let promises = validateArrayObjects(objectArrayMock2);
        return Promise.all(promises).then(promiseResolved => {
            expect(promiseResolved).toEqual(promiseResolved2);        
          });
    });

    it('resolves in the array of objects with the status code of the link', () => {
        
        let promises = validateArrayObjects(objectArrayMock3);
        return Promise.all(promises).then(promiseResolved => {
            expect(promiseResolved).toEqual(promiseResolved3);        
          });
    });


})