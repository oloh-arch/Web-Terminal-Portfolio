const output = document.getElementById("output");
const input = document.getElementById("command-input");
const terminal = document.getElementById("terminal");

const commands = {
  help: `Available commands:
  about     - Who I am and what I build
  skills    - My technical skills and tools
  projects  - Featured work and bootcamp builds
  contact   - How to reach me
  clear     - Clear the terminal screen`,

  about: `Stephan Messi Oloo
Web Developer & Tech Trainee based in Nairobi, Kenya.
I build clean, fast static web interfaces, handle QA/data tasks, and focus on practical user-first design.`,

  skills: `Technical Skills:
  • Languages: HTML5, CSS3, JavaScript (ES6+)
  • Tools: Git, GitHub Pages, Google Workspace
  • Practices: Responsive design, cross-device QA testing, structured documentation`,

  projects: `Projects:
  1. Web Terminal Portfolio (Hand-made)
     A retro command-line portfolio built with HTML, CSS, and vanilla JS.`,

  contact: `Contact Details:
  • Email: oloo.stephan@learninglions.org
  • Location: Nairobi, Kenya`,
};

function printLine(text, className = "") {
  const div = document.createElement("div");
  div.className = `line ${className}`.trim();
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

function handleCommand(rawCmd) {
  const cmd = rawCmd.trim().toLowerCase();
  printLine(`stephan@portfolio:~$ ${rawCmd}`, "cmd-echo");

  if (!cmd) return;

  if (cmd === "clear") {
    output.innerHTML = "";
    return;
  }

  if (commands[cmd]) {
    printLine(commands[cmd]);
  } else {
    printLine(`Command not found: '${cmd}'. Type 'help' for available commands.`, "error");
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCommand(input.value);
    input.value = "";
  }
});

terminal.addEventListener("click", () => input.focus());

// Welcome banner on load
printLine("Welcome to Stephan's Web Terminal Portfolio (v1.0)");
printLine("Type 'help' and press Enter to see available commands.\n");
