// index.js
const chalk = require("chalk");

function introduce() {
  console.log(chalk.cyan(`
  █████╗ ██████╗ ██╗    ██╗██╗███╗   ███╗██╗     
 ██╔══██╗██╔══██╗██║    ██║██║████╗ ████║██║     
 ███████║██████╔╝██║ █╗ ██║██║██╔████╔██║██║     
 ██╔══██║██╔═══╝ ██║███╗██║██║██║╚██╔╝██║██║     
 ██║  ██║██║     ╚███╔███╔╝██║██║ ╚═╝ ██║███████╗
 ╚═╝  ╚═╝╚═╝      ╚══╝╚══╝ ╚═╝╚═╝     ╚═╝╚══════╝
  `));
  
  console.log(chalk.green(`
    Hello! 👋 I'm Abimel S B Kulumala (Abi).
    ----------------------------------------
    🔹 ${chalk.magenta('Forest Researcher')} 🌳
    🔹 ${chalk.magenta('LinkedIn Branding Coach')} 📈
    🔹 ${chalk.magenta('Community Builder')} 🤝
    🔹 ${chalk.magenta('Mentor and Tech Enthusiast')} 💻
    
    I help individuals optimize their LinkedIn profiles, run communities, 
    and teach about tech and career growth.

    Want to connect? Reach me at: ${chalk.blue.bold('abikul@example.com')}
  `));
}

module.exports = introduce;
