const createObjectsArray = require('../bin/3.createObjectsArray');

const mdPathsArrayMock1 = {
    file: 'C:\Users\HP\OneDrive\Escritorio\bog001-md-links\test\notAMdFile.js',
    error: 'Not a markdown file'
}

const mdPathsArrayMock2 = [
    'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\test\\test1.md'
]

const mdPathsArrayMock3 = [
    'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\test\\test2.md'
]

const finalResultMock1 = [
    {
        file: 'C:\Users\HP\OneDrive\Escritorio\bog001-md-links\test\notAMdFile.js',
        error: 'Not a markdown file'
    }
]


const finalResultMock2 = [
    {
        file: 'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\test\\test1.md',
        error: "no links found in this file",
    }
]

const finalResultMock3 = [
    {
        file: 'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\test\\test2.md',
        text: '[Página de Google]',
        link: 'https://www.google.com/',
    },
    {
        file: 'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\test\\test2.md',
        text: '[Página de Facebook]',
        link: 'https://www.facebook.com/',
    }
]

describe('createObjectsArray Function', () => {

    it('Should be a function', () => {
        expect(typeof(createObjectsArray)).toBe('function');
    });

    it('Should know when file or folder reported a previous error', () => {
        expect(createObjectsArray(mdPathsArrayMock1)).toEqual(finalResultMock1);
    });

    it('Should return error when no links are found', () => {
        expect(createObjectsArray(mdPathsArrayMock2)).toEqual(finalResultMock2);
    });

    it('Should return the array of objects with the description of every link found', () => {
        expect(createObjectsArray(mdPathsArrayMock3)).toEqual(finalResultMock3);
    });




})