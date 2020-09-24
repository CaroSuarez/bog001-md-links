const fs = require('fs');
const urlStatus = require('./urlStatus');

const createObjectsArray = (pathsArray)=>{

    let finalResult =[];

    for (let j=0; j<pathsArray.length; j++){
        
        let fileName = pathsArray[j];
        let completeContent = fs.readFileSync(pathsArray[j], "utf-8");
        let regex = /\[.+?\]\(https*.+?\)/g;
        let textsAndLinks = completeContent.match(regex);
        
        

        if(textsAndLinks==null){
            finalResult.push({
                file:fileName,
                text: 'NA',
                link: 'No links found',                
            })

        } else {
            for(i=0; i<textsAndLinks.length; i++){

               
                
                let text = textsAndLinks[i].match(/\[.+\]/g)[0];
                let linkWithParenthesis = textsAndLinks[i].match(/\(https*.+?\)/g)[0];
                let link = linkWithParenthesis.replace(/[\(\)]/g, "" )
                //console.log(link)
                //let status = urlStatus(link);
                let status;

                

                if(validate){
                    finalResult.push({
                        file: fileName,
                        text: text,
                        link:link
                    })

                } else {
                    finalResult.push({file: fileName,
                        text: text,
                        link:link,
                        status: status
    
                    })

                }

                
            }
        }

        
    
    }
    console.log(finalResult)
    return finalResult;


}

module.exports = createObjectsArray;
        