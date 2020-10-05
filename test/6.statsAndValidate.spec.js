const statsAndValidate = require('../bin/6.statsAndValidate');

const mockArrayOfObjects1 = [
    {
        file : 'escritorio/ejemplo1.md',
        error : 'no links found'
    }
]
const mockArrayOfObjects2 = [
    {
        file : 'escritorio/ejemplo.md',
        text : '[ejemplo 1]',
        link : 'www.google.com',
        status : 200
    },
    {
        file : 'escritorio/ejemplo.md',
        text : '[ejemplo 1]',
        link : 'www.wikipedia.com',
        status : 200
    },
    {
        file : 'escritorio/ejemplo.md',
        text : '[ejemplo 2]',
        link : 'www.facebok.com',
        status : 404
    },
    {
        file : 'escritorio/ejemplo.md',
        text : '[ejemplo 2]',
        link : 'www.facebok.com',
        status : 404
    }
]

const resultObjectMock1 = {
    total : 'no links found',
    unique : 'no links found',
    broken : 'no links found'
}
const resultObjectMock2 = {
    total : 4,
    unique : 3,
    broken : 1
}


describe('stats Function', () => {

    it('Should be a function', () => {
        expect(typeof statsAndValidate).toBe('function');
    });

    it('Should recognize if no links were found', () => {
        expect(statsAndValidate(mockArrayOfObjects1)).toEqual(resultObjectMock1);
    });

    it('Should count the broken linsk', () => {
        expect(statsAndValidate(mockArrayOfObjects2)).toEqual(resultObjectMock2);
    });
})