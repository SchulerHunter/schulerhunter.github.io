function printCode() {
    // Format: [interpreter, code, extension]
    let helloWorld = {
        python: ['python', `print("Hello World")`, '.py'],
        ruby: ['IRB', `puts "Hello World"`, '.rb'],
        java:
            ['java', 
    `class HelloWorld {
        \tstatic public void main(String args[]) {
            \t\tSystem.out.println("Hello World");
        }
    }`, '.java'],
        javascript: ['node', `console.log("Hello World")`, '.js'],
        cpp:
            ['g++', 
    `#include <iostream>
    int main() {
        \tstd::cout << "Hello World" << std::endl;
    }`, '.cpp'],
        c:
            ['gcc', 
    `#include <stdio.h>
    #include <stdlib.h>
    int main(void) {
        \tputs("Hello World");
        \treturn EXIT_SUCCESS;
    }`, '.c'],
        css:
            ['npm run build-css', 
    `body:before {
        \tcontent: "Hello World";
    }`, '.css'],
        shell: ['echo', `Hello World`, '.sh'],
        sql: ['mysql', `SELECT "Hello World";`, '.sql'],
        powershell: ['powershell', `"Hello World"`, ''],
        html:
            ['w3m -dump', 
    `<html>
        \t<head>
            \t\t<title> Hello World </title>
        \t</head>
        \t<body>
            \t\t<p> Hello World </p>
        \t</body>
    </html>`, '.html'],
    }

    let newLineStart = "Hunter@HunterThe.Dev:~$ "
    let keys = Object.keys(helloWorld);
    let index = Math.round(Math.random() * keys.length - 1);

    let makeFile = "echo (\n" + helloWorld[keys[index]][1] + "\n) > helloWorld" + helloWorld[keys[index]][2];
    let loadFile = helloWorld[keys[index]][0] + " helloWorld" + helloWorld[keys[index]][2];

    document.getElementById("helloWorld").innerText = newLineStart;
    writeCodeToHTML(makeFile, "helloWorld");
    setTimeout(() => {
        document.getElementById("helloWorld").innerText += "\n> " + newLineStart;
    }, makeFile.length * 100)
    setTimeout(() => {
        writeCodeToHTML(loadFile, "helloWorld") 
    }, (makeFile.length + newLineStart.length) * 100)
    setTimeout(() => {
        document.getElementById('interpreter'.innerText) = "Hello World"
    }, (makeFile.length + newLineStart.length + loadFile.length) * 100)
}

function writeCodeToHTML(code, destination) {
    for (let i = 0; i < code.length; i++) {
        ((strIndex) => {
            setTimeout(() => {
                document.getElementById(destination).innerText += code[strIndex];
            }, 100 * i)
        })(i);
    }
}
printCode();