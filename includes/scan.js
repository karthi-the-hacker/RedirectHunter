#!/usr/bin/env node

/**
 * RedirectHunter
 * RedirectHunter is a powerful open redirect vulnerability scanner that helps you quickly identify and mitigate potential security risks in your web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const request = require('request');
var fs = require('fs');
const cheerio = require('cheerio');
class scanner {
    constructor(url,payload,path) {
        request.get({url:url+payload,followRedirect :true,rejectUnauthorized: false}, (error, response, body) => {
            
            if (error) { 
               
            } 
            else {
                const $ = cheerio.load(response.body);
               if($('title').text() == "karthithehacker"){
                        console.log("\x1b[31;1m💸[Vulnerable]\x1b[0m ======> \x1b[34;1m"+url+"\x1b[32;1m  🚨[Payload] ======> "+payload+"\x1b[0m\n\x1b[35;1m📸PoC-Url->\x1b[34;1m$\x1b[0m  "+url+payload+"\n\n\n");
                        if(path == null || path == true){
                            return;     
                            }
                        else{
                            fs.appendFileSync(path, url+payload+"\n", function (err) {
                            if (err) throw err;
                                    });                                
                            }  
                    }
                }
                
            
        });
        
    }
}

//Exporting the modules
module.exports = {
    scanner: scanner
}