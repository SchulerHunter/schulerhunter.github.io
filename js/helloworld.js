helloWorld = {
    python: `print("Hello World")`,
    ruby: `puts "Hello World"`,
    java: `
    class HelloWorld {
        static public void main(String args[]) {
            System.out.println("Hello World");
        }
    }`,
    javascript: `console.log("Hello World")`,
    cpp: `
    #include <iostream>
    int main() {
        std::cout << "Hello World" << std::endl;
    }`,
    c: `
    #include <stdio.h>
    #include <stdlib.h>
    int main(void) {
        puts("Hello World");
        return EXIT_SUCCESS;
    }`,
    css: `
    body:before {
        content: "Hello World";
    }`,
    shell: `echo Hello World`,
    sql: `SELECT "Hello World";`,
    powershell: `'Hello World'`,
    html: `
    <html>
        <head>
            <title> Hello World </title>
        </head>
        <body>
            <p> Hello World </p>
        </body>
    </html>`,
}

function printCode() {
    let keys = Object.keys(helloWorld);
    index = Math.round(Math.random() * keys.length - 1);
    console.log(helloWorld[keys[index]])
    console.log(keys.index)
    for(let i = 0; i < helloWorld[keys[index]].length; i++) {
        console.log(helloWorld[keys[index]][i])
    }
}