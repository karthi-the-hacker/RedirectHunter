#!/usr/bin/env node

/**
 * RedirectHunter
 * RedirectHunter is a powerful open redirect vulnerability scanner that helps you quickly identify and mitigate potential security risks in your web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */


//lib and includes section 
const payloads = require('./payload').payloads;
const scanner =  require('./scan');
const lineReader = require('line-reader');
//lib and includes section 


//Constractor class 
class redirect {
    constructor(url,save) {
       
       
            for (const payload of payloads) {
                new scanner.scanner(url,payload,save)
                }
      
        
        
 }
}
//Exporting the modules
module.exports = {
    
    engineu:redirect
}