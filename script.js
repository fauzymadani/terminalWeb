const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

const prompt = "visitor@portofolio:~$";

const commands = {
  help: `
Available commands:
- help
- project
- github
- about
- contact
- neofetch
- pgp key
- <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="text-decoration: none; color: yellow;">onlyfans</a>
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

<i class="fas fa-laptop-code"></i> fauzy@portfolio<br>
-----------------<br>
OS: Debian 12<br>
Shell: bash<br>
name: fauzy<br>
github: github.com/fauzymadani
`,
  clear: "clear",
  pgpkey: `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
8MGs
=DYR6
-----END PGP PUBLIC KEY BLOCK-----

`,
};
let commandHistory = [];
let historyIndex = -1;

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const input = inputElement.value.trim();
    appendOutput(`${prompt}${input}`);
    processCommand(input);
    inputElement.value = "";
  }
});

function processCommand(command) {
  if (command === "clear") {
    clearOutput(); // call function clear nya bro
  } else if (commands[command]) {
    appendOutput(commands[command]);
  } else {
    appendOutput(`Command not found: ${command}`);
  }
}

function appendOutput(text) {
  const outputLine = document.createElement("div");
  outputLine.classList.add("output-line");
  outputLine.innerHTML = text; // Change this line to use innerHTML instead of textContent
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

window.onload = function () {
  inputElement.focus();
};

function clearOutput() {
  outputElement.innerHTML = ""; // Mengosongkan semua konten di elemen output
}
