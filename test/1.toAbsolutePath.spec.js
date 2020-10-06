const toAbsolutePath = require('../src/1.toAbsolutePath');

describe('toAbsolutePath', () => {

    it('should be a function', () => {
        expect(typeof toAbsolutePath).toBe('function');      
    });
    
    it('converge a relative path into a absolute path in the current working directory', () => {
        expect(toAbsolutePath('./')).toBe('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links');
      });

    it('absolute path stays the same', () => {
    expect(toAbsolutePath('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links')).toBe('C:\\Users\\HP\\OneDrive\\Escritorio\\bog001-md-links');
    });
  
  });