const mdLinks = require('../bin/MDLinks');

const mockResponse1 = [
  {file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
  link: "https://es.wikidia.org/wiki/Markdown", 
  text: "[Markdown]"
  }, 
  {
  file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md",
  link: "https://nodejs.org/", 
  text: "[Node.js]"
  }, 
  {
  file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
  link: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", 
  text: "[md-links]"
  }, 
  {
  file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
  link: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", 
  text: "[md-links]"
  }
]



const noSuchDirectoryError = [
  {
    error : "no such directory", 
    path : "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba3.md", 
    tip : "remember to write a absolute path or a path relative to the current working directory"
  }
]


const noLinksFoundError = [
  {
    error : "no links found in this file", 
    file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba2.md"
  }
]

const notAMdFile = [
  {
    error : "Not a markdown file", 
    file : "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba3.pdf"
  }
]

const noMdFilesInFolderError = [
  {
    error: "No markdown files inside this folder", 
    folder: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\images"
  }
]

describe('mdLinks', () => {

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md').then(links=> {
            expect(links).toEqual(mockResponse1);
          });    
  });

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba3.md').then(links=> {
            expect(links).toEqual(noSuchDirectoryError);
          });    
  });

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba2.md').then(links=> {
            expect(links).toEqual(noLinksFoundError);
          });    
  });

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba3.pdf').then(links=> {
            expect(links).toEqual(notAMdFile);
          });    
  });

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\images').then(links=> {
            expect(links).toEqual(noMdFilesInFolderError);
          });    
  });

});
