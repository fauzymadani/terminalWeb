const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const prompt = 'visitor@portofolio:~$';

const commands = {
  help: `
Available commands:
- help
- project
- github
- about
- contact
- neofetch
`,
  project: `
<i class="fa-solid fa-globe"></i> <a href="https://fauzymadani.infinityfreeapp.com" style="text-decoration: none; color: #00ff00;">Portfolio Website</a><br>
<i class="fa-solid fa-terminal"></i> <a href="https://github.com/fauzymadani" style="text-decoration: none; color: #00ff00;">Cli tools</a><br>
<i class="fa-solid fa-newspaper"></i> <a href="https://fauzymadani.infinityfreeapp.com" style="text-decoration: none; color: #00ff00;">My Blog</a><br><br>

ASCII Art:<br>
  ________<br>
 /        \\<br>
| PROJECT |<br>
 \\________/<br>
`,
  github: `
                                                       
                                         ...*@@@@@@@@@@*...                                         
                                       .@@@@@@@@@@@@@@@@@@@@. .                                     
                                   ..*@@@@@@@@@@@@@@@@@@@@@@@@*.                                    
                                  .*@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.                                  
                                ..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.                                 
                                .@@@@@@.....#@%=....=%@%.....@@@@@@.                                
                              ..@@@@@@@..   ...        .     @@@@@@@.                               
                              .@@@@@@@@..                   .@@@@@@@@..                             
                             .-@@@@@@@.                      .@@@@@@@=.                             
                             .@@@@@@@=.                       =@@@@@@@.                            
                             .@@@@@@@..                        @@@@@@@                              
                             .@@@@@@@:.                       :@@@@@@@                              
                             .@@@@@@@@.                       @@@@@@@@.                             
                             .+@@@@@@@-..                    :@@@@@@@+.                             
                              .@@@@@@@@@..                 .@@@@@@@@@..                             
                              ..@@@:.#@@@@%....       ..:%@@@@@@@@@@.                               
                                :@@@@..@@@@@@#.     ..#@@@@@@@@@@@@:.                               
                                ..@@@@..:@@@+.        .@@@@@@@@@@@..                                
                                   %@@@*......        .@@@@@@@@@@. .                                
                                    .@@@@@@@@.         @@@@@@@@...                                  
                                     . :@@@@@         .@@@@@:..                                     
                                          .--         .--
                                 <i class="fa-brands fa-github"></i> https://github.com/fauzymadani      
  `,
  about: `Hi, I'm a web developer specializing in creating interactive websites! I enjoy working with JavaScript, CSS, and HTML.
i love linux related stuff.`,
  contact: `
You can contact me at: <br>
- Email: keperluansekolahfauzy@gmail.com<br>
- my website: https://fauzymadani.infinityfreeapp.com<br>
`,
  neofetch: `
  <img src="./images/foto.png" align="left" style="height: 200px;">

<i class="fas fa-laptop-code"></i> user@portfolio<br>
-----------------<br>
OS: Custom WebOS<br>
Shell: bash<br>
user: visitor<br>
github: github.com/fauzymadani
`,
clear: 'clear'
};
let commandHistory = [];
let historyIndex = -1;



inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const input = inputElement.value.trim();
    appendOutput(`${prompt}${input}`);
    processCommand(input);
    inputElement.value = '';
  }
});

function processCommand(command) {
  if (command === 'clear') {
    clearOutput();  // call function clear nya bro
  } else if (commands[command]) {
    appendOutput(commands[command]);
  } else {
    appendOutput(`Command not found: ${command}`);
  }
}

function appendOutput(text) {
  const outputLine = document.createElement('div');
  outputLine.classList.add('output-line');
  outputLine.innerHTML = text;  // Change this line to use innerHTML instead of textContent
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

window.onload = function() {
    inputElement.focus();
  };

  function clearOutput() {
    outputElement.innerHTML = ''; // Mengosongkan semua konten di elemen output
  }
  

  