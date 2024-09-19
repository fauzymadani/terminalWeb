const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const commands = {
  help: `
Available commands:\n
- help\n
- project\n
- github\n
- about\n
- contact\n
- neofetch
`,
  project: `
+-------------------+
|   My Projects     |
+-------------------+
1. Portfolio Website
2. E-commerce App
3. Personal Blog

ASCII Art:
  ________
 /        \\
| PROJECT |
 \________/
`,
  github: 'https://github.com/yourusername',
  about: `
Hi, I'm a web developer specializing in creating interactive websites!
I enjoy working with JavaScript, CSS, and HTML.`,
  contact: `
You can contact me at: 
- Email: yourname@example.com
- LinkedIn: linkedin.com/in/yourname
`,
  neofetch: `
   .---.   Anime ASCII Art
  |     |
 (o     o)
  \\  ^  /
   '--|--'

user@portfolio
-----------------
OS: Custom WebOS
Shell: Terminal-based Portfolio
`
};

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const input = inputElement.value.trim();
    processCommand(input);
    inputElement.value = '';
  }
});

function processCommand(command) {
  if (commands[command]) {
    appendOutput(commands[command]);
  } else {
    appendOutput(`Command not found: ${command}`);
  }
}

function appendOutput(text) {
  const outputLine = document.createElement('div');
  outputLine.classList.add('output-line');
  outputLine.textContent = text;
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

window.onload = function() {
    inputElement.focus();
  };
  