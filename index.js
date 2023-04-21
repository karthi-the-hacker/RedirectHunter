#!/usr/bin/env node
/**
 * RedirectHunter
 * RedirectHunter is a powerful open redirect vulnerability scanner that helps you quickly identify and mitigate potential security risks in your web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 
const help = require('./utils/help');
const fileread = require('./utils/filereader');
const yargs = require('yargs/yargs')
const scan = require('./includes/redirecthunter')
const { hideBin } = require('yargs/helpers')

//variable and object declariation section
const argv = yargs(hideBin(process.argv)).argv 
//variable and object declariation section

// used to check the argument parsed data is empty or not 
if( argv.h == true ){
   help.helpintro();
   help.helpmenu();
    return; 
}
//used to check for valid input data and syntax 
if(argv.l != null || argv.list != null){
    
     if(argv.list == true || argv.l == true){
        console.log("test")
        help.helpintro();
        return;
     }
     else{
       help.helpintro();
        new fileread.fileread(argv.l || argv.list ,argv.o || argv.output)
        return
     }
}
if(argv.u == null || argv.u == true ){
    if(argv.url == null || argv.url == true){
        help.helpintro();      
        return; 
    }
}
if(argv.l == null && argv.l == true ){
    if(argv.list == null || argv.list == true){
        help.helpintro();
        return; 
    }
}
//program execution part and calling the constructor class 
 help.helpintro();
new scan.engineu(argv.u || argv.url,argv.o || argv.output)


//