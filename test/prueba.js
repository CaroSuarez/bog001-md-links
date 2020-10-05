const mdLinks = require('../bin/MDLinks');
//mdLinks('/bog001-md-links/bin/images'); ERORz

//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/myReadme.md').then(links=> console.log(links));
mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/bin', {validate: true}).then(links => links);
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links', {validate: true}).then(links => console.log(links));
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/bin/prueba1.md', {validate: true}).then((links)=>console.log(links));
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/bin/images/MD-Links Flowchart.pdf').then(links=>console.log(links))
//mdLinks('./')
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/bin/images/MD-Links Flowchart.p');
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/README.md', {validate:true});
//mdLinks('C:/Users/HP/OneDrive/Escritorio/bog001-md-links/package.json');

//mdLinks('../')
//mdLinks("/images")



