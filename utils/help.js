#!/usr/bin/env node
/**
 * RedirectHunter
 * RedirectHunter is a powerful open redirect vulnerability scanner that helps you quickly identify and mitigate potential security risks in your web applications.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 
const { boolean } = require("yargs");
//lib and includes section 
require("os").userInfo().username
module.exports = {
    helpmenu: function() {
       var argv = require('yargs/yargs')(process.argv.slice(2))
          .usage('\n\n \x1b[30;1m$\x1b[0m \x1b[32;1mRedirectHunter \x1b[36;1m[option]\n\n \x1b[37;42;1mUsage:\x1b[0m $0 \x1b[33;1m[options]\x1b[30;1m')
          .version('version', '1.0.1').alias('version', 'V')
          .options({
            help: {
              alias: 'h',
              description: "Show help",
              requiresArg: true,
              required: false
            },
            
            url: {
              alias: 'u',
              description: "url to scan for Open Redirect",
              requiresArg: true,
              required: true
            },
            output: {
              alias: 'o',
              description: "Save the results to text file",
              requiresArg: true,
              required: false
            },
            list: {
              alias: 'l',
              description: "File containing a list of URLs for Open Redirect scan.",
              requiresArg: true,
              required: false
            }
          })
          .argv;
        console.log('Inspecting options');
        console.dir(argv);
        console.log("input:", argv.input);
        console.log("output:", argv.output);
    },
     helpintro: function() {
cyan='\e[1;36m%s\e[0m\n'
console.log("  \n\n\x1b[36;1m👋 Hey \x1b[37;1m"+require("os").userInfo().username+" \x1b[36;1m\n");
console.log(" .-----------------------------.           ");
console.log(" |  Tool   : \x1b[31mRedirectHunter\x1b[36;1m ↩️  |           ");
console.log(" |  Author : \x1b[32;1m@karthithehacker🎖️\x1b[36;1m |           ");
console.log(" |        \x1b[30m?url=\x1b[31mevil.com\x1b[30m/\x1b[36;1m       |           ");
console.log(" '-----------------------------'           ");
console.log("                 ^      (\\_/)    ");
console.log("                 '----- (O.o)    ");
console.log("                        (> <)    ");
      console.log("\n\x1b[37;1mRedirectHunter Scanner \x1b[30;1m\nRedirectHunter is a powerful open redirect vulnerability scanner.\n")
     }
};