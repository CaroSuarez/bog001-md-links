const stats = require('../src/5.stats');



const mockArrayOfObjects1 = [
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej1]',
        link: 'www.google.com'
    },
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej2]',
        link: 'www.facebook.com'
    },
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej3]',
        link: 'www.facebook.com'
    },
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej4]',
        link: 'www.google.com'
    }
]

const mockArrayOfObjects2 = [
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej1]',
        link: 'www.google.com'
    },
    {
        file: '/escritorio/ejemplo.md',
        text: '[ej2]',
        link: 'www.facebook.com'
    }
]

const mockArrayOfObjects3 = [
    {
        file: '/escritorio/ejemplo.md',
        error: 'No links found',
    }
]


retunedObjectMock1 = {
    total: 4,
    unique: 2
}

retunedObjectMock2 = {
    total: 2,
    unique: 2
}

retunedObjectMock3 = {
    file: "/escritorio/ejemplo.md",
    error: 'No links found'    
}

describe('stats Function', () => {

    it('Should be a function', () => {
        expect(typeof stats).toBe('function');
    });

    it('Should return the total links count and the unique links count', () => {
        expect(stats(mockArrayOfObjects1)).toEqual(retunedObjectMock1);
    });

    it('Should return total equal to unique if no repeated links were found', () => {
        expect(stats(mockArrayOfObjects2)).toEqual(retunedObjectMock2);
    });

    it('Should say when no links were found at all', () => {
        expect(stats(mockArrayOfObjects3)).toEqual(retunedObjectMock3);
    });




})