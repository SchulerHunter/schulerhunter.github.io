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
    index = Math.round(Math.random() * keys.length - 1);
    console.log(newLineStart + "echo (" + helloWorld[key[index]][1] + ") > helloWorld" + helloWorld[key[index]][2])
    console.log(newLineStart + helloWorld[key[index]][0] + "hellowWorld" + helloWorld[key[index]][2])

    for(let i = 0; i < helloWorld[keys[index]].length; i++) {
    }
}