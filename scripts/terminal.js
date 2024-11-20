const outputDiv = document.getElementById("output")
const commandInput = document.getElementById("commandInput")
const terminal = document.getElementById("terminal")

const commands = {
  welcome: `
▗▖ ▗▖▗▞▀▚▖▄▄▄▄  ▄▄▄▄  ▗▞▀▚▖   ■  ▐▌   
▐▌▗▞▘▐▛▀▀▘█   █ █   █ ▐▛▀▀▘▗▄▟▙▄▖▐▌   
▐▛▚▖ ▝▚▄▄▖█   █ █   █ ▝▚▄▄▖  ▐▌  ▐▛▀▚▖
▐▌ ▐▌                        ▐▌  ▐▌ ▐▌
            Version (1.0)    ▐▌

Welcome to my terminal portfolio.
. . . .

Type <n>'help'</n> for a list of available commands.
`,
help: `Available commands: "welcome" ,"about", "projects", "skills", "resume", "contact", "clear"`,
about: `
Hello, I'm Kenneth.
I'm a budding software developer with a keen interest in building interactive and user-friendly websites.
`,
projects: "Project 1: Portfolio | Project 2: Love Page | Project 3: Python Automation",
skills: "JavaScript, React, Node.js, CSS, C#, C++, Java, and I'm constantly learning more.",
resume: "Download my resume here.",
contact: "Email: neneneneth07@gmail.com",
  clear: () => {
    outputDiv.innerHTML = ""
  },
}

let listCommands = Object.keys(commands);

const scrollingElement = document.getElementById("terminal") || document.body

const scrollToBottom = () => {
  scrollingElement.scrollTop = scrollingElement.scrollHeight
}

function sanitizedInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function processCommand(input) {
  const sanitizeInput = sanitizedInput(input)
  outputDiv.innerHTML += `<div><m>visitor</m>@<n>terminal.kenneth.dev</n>:~$ ${sanitizeInput}</div>`
  let response = ""

  if (input.trim() === "") {
    response = ""
  } else if (commands[input]) {
    if (typeof commands[input] === "function") {
      response = commands[input]()
      return
    }
    response = commands[input]
  } else {
    response = `Command not found ${input}`
  }

  outputDiv.innerHTML += `<div><pre>${response}</pre></div>`
  outputDiv.scrollTop = outputDiv.scrollHeight
  scrollToBottom()
}

commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = commandInput.value.trim().toLowerCase()
    commandInput.value = "" 
    processCommand(input)
  }
})
document.body.addEventListener("click", () => {
  commandInput.focus() 
})
