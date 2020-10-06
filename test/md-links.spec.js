const mdLinks = require('../src/index');

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

const mockResponse2 = [
  {
    file : "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
    link : "https://es.wikidia.org/wiki/Markdown", 
    text : "[Markdown]",
    status: 404 
  }, 
  {
    file : "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
    text : "[Node.js]",
    link : "https://nodejs.org/", 
    status : 200 
  }, 
  {
    file : "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
    link : "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", 
    text : "[md-links]",
    status : 200 
  }, 
  {
    file: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md", 
    text : "[md-links]",
    link: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", 
    status : 200 
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
    folder: "C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\src"
  }
]

describe('mdLinks', () => {

  it('should return a promise', () => {
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\bin\\prueba1.md', {validate : true}).then(links=> {
            expect(links).toEqual(mockResponse2);
          });    
  });

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
    return mdLinks('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links\\src').then(links=> {
            expect(links).toEqual(noMdFilesInFolderError);
          });    
  });

});
