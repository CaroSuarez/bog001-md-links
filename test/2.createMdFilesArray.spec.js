const createMdFilesArray = require('../bin/2.createMdFilesArray')

describe('createMdFilesArray function', ()=> {

    it('Should be a function', () => {
        expect(typeof(createMdFilesArray)).toBe('function');
    });

    it('If the path is a folder then it should return the absolute paths array of the md files inside that folder', () => {
        expect(createMdFilesArray('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links')).toEqual([
            'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\myReadme.md',
            'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\README.md'
          ]);
    });

    it('If there is not md files inside the folder then it should return an object with error', () => {
        expect(createMdFilesArray('C:\\Users\\HP\\OneDrive\\Escritorio')).toEqual({
            folder: 'C:\\Users\\HP\\OneDrive\\Escritorio',
            error: 'No markdown files inside this folder'
          });
    });

    it('If the path leads to a md file then it should return the absolute path array', () => {
        expect(createMdFilesArray('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\README.md'))
        .toEqual(['C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\README.md']);
    });

    it('If the path leads to a file but is not a md file then it should return error', () => {
        expect(createMdFilesArray('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\package.json'))
        .toEqual({
            file: 'C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\package.json',
            error: 'Not a markdown file'
        });
    });

    it('If the path does not exist the it should return error', () => {
        expect(createMdFilesArray('C:\\User')).toEqual({
            path: 'C:\\User',
            error: 'no such directory',
            tip: 'remember to write a absolute path or a path relative to the current working directory'
          });
    });




})