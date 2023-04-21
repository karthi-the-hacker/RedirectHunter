#!/usr/bin/env node
/**
 * RedirectHunter
 * RedirectHunter is a powerful open redirect vulnerability scanner that helps you quickly identify and mitigate potential security risks in your web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 
const lineReader = require('line-reader');
const scan = require('../includes/redirecthunter');

class reader {
    constructor(listfile,savepath) {
         lineReader.eachLine(listfile, (line, last) => {
            new scan.engineu(line,savepath);
        });
    }
}
module.exports = {
    fileread: reader
}