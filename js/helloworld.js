function printCode() {
    // Format: [interpreter, code, extension]
    let helloWorld = {
        python: ['python', `print("Hello World")`, '.py'],
        ruby: ['IRB', `puts "Hello World"`, '.rb'],
        java:
            ['java', 
    `class HelloWorld {
        static public void main(String args[]) {
            System.out.println("Hello World");
        }
    }`, '.java'],
        javascript: ['node', `console.log("Hello World")`, '.js'],
        cpp:
            ['g++', 
    `#include <iostream>
    int main() {
        std::cout << "Hello World" << std::endl;
    }`, '.cpp'],
        c:
            ['gcc', 
    `#include <stdio.h>
    #include <stdlib.h>
    int main(void) {
        puts("Hello World");
        return EXIT_SUCCESS;
    }`, '.c'],
        css:
            ['npm run build-css', 
    `body:before {
        content: "Hello World";
    }`, '.css'],
        shell: ['echo', `Hello World`, '.sh'],
        sql: ['mysql', `SELECT "Hello World";`, '.sql'],
        powershell: ['powershell', `"Hello World"`, ''],
        html:
            ['w3m -dump', 
    `<html>
        <head>
            <title> Hello World </title>
        </head>
        <body>
            <p> Hello World </p>
        </body>
    </html>`, '.html'],
    }

    let newLineStart = "Hunter@HunterThe.Dev:~$ "
    // Echo file to helloWorld.ext
        // put ( type code, put )
    // Run interpreter on that file
    // Show "hello world" in output below
    let keys = Object.keys(helloWorld);
    let index = Math.round(Math.random() * keys.length - 1);

    let makeFile = "echo (" + helloWorld[keys[index]][1] + ") > helloWorld" + helloWorld[keys[index]][2];
    let loadFile = helloWorld[keys[index]][0] + " helloWorld" + helloWorld[keys[index]][2];
    
    document.getElementById("helloWorld").innerText = newLineStart
    for(let i = 0; i < makeFile; i++) {
        ((strIndex) => {
            setTimeout(() => {
                document.getElementById("helloWorld").innerText += makeFile[strIndex];
            }, 100 * i);
        })(i);
    }
    document.getElementById("helloWorld").innerText += "\n" + newLineStart
    for (let i = 0; i < loadFile; i++) {
        document.getElementById("helloWorld").innerText += makeFile[i]
    }
}

printCode();