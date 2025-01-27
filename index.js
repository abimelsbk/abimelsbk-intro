#!/usr/bin/env node

import chalk from "chalk";

function introduce() {
  console.log(chalk.cyan(`
  
██   ██ ███████ ██    ██     ██ ████████ ███████      █████  ██████  ██ ███    ███ ███████ ██      
██   ██ ██       ██  ██      ██    ██    ██          ██   ██ ██   ██ ██ ████  ████ ██      ██      
███████ █████     ████       ██    ██    ███████     ███████ ██████  ██ ██ ████ ██ █████   ██      
██   ██ ██         ██        ██    ██         ██     ██   ██ ██   ██ ██ ██  ██  ██ ██      ██      
██   ██ ███████    ██        ██    ██    ███████     ██   ██ ██████  ██ ██      ██ ███████ ███████ 
                                                                                                   
                                                                                                   

  `));
  
  console.log(chalk.green(`
    Hello! 👋 I'm Abimel S B Kulumala.
    ----------------------------------------
    🔹 ${chalk.magenta('Founder-Silicon Society')} 🌐
    🔹 ${chalk.magenta('Cyber Security Researcher')} 🌳
    🔹 ${chalk.magenta('LinkedIn Branding Strategist')} 📈
    🔹 ${chalk.magenta('Community Builder')} 🤝
    🔹 ${chalk.magenta('DevOps and Cloud Mentor and Tech Enthusiast')} 💻
    
    I help individuals Founders and entrepreuners to build and their LinkedIn profiles\n    to a cash making machine, and I help studnets ans proffessionals to learn\n    cybersecurity, DevOps and cloud.

    Want to connect? Reach me at: ${chalk.blue.bold('abimel@gatherem.in')}
  
  `));


  console.log(chalk.blueBright(`
   ┌──────────────────────────────────────────────────────────┐
   │   🌐 ${chalk.green.bold("Find me online:")}                                     │
   │                                                          │
   │   ${chalk.yellow.bold("LinkedIn:")} ${chalk.blue("https://www.linkedin.com/in/abimelsbk")}        │
   │   ${chalk.yellow.bold("Twitter:")}  ${chalk.cyan("https://twitter.com/abimelsbk")}                │
   │   ${chalk.yellow.bold("Email:")}    ${chalk.red("abimelsbkulumala@gmail.com")}                   │
   └──────────────────────────────────────────────────────────┘
 `));


}

introduce();
