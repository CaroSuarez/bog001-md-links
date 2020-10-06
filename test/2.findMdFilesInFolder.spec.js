const findMdFilesInFolder = require('../src/2.findMdFilesInFolder');

describe('findMdFilesInFolder function', () => {
    
    it('Should be a function', () => {
        expect(typeof(findMdFilesInFolder)).toBe('function');
    });

    it('It receives a file names array and return the array filtered with the md files names if any', () => {
        expect(findMdFilesInFolder(['file1.csv', 'file2.txt', 'file3.md', 'file4.js', 'file5.md']))
        .toEqual(['file3.md', 'file5.md']);
    });

    it('It receives a file names array and if the array does not contain any md file then it returns error', () => {
        expect(findMdFilesInFolder(['file1.csv', 'file2.txt', 'file3.js', 'file4.doc', 'file5.xls']))
        .toEqual('error: no md files found');
    });



} )