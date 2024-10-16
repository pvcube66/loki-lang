# loki-lang


🌟 Simple Language Compiler
This project demonstrates the journey of a program from a custom-designed simple language to executable JavaScript. The language includes basic features like variable declarations and print statements, following a structure similar to JavaScript.

✨ Features
🔍 Lexer: Tokenizes the input source code into components like keywords, identifiers, numbers, and operators.
🛠 Parser: Converts tokens into an Abstract Syntax Tree (AST).
🧑‍💻 Code Generator: Transforms the AST into JavaScript code.
🚀 Runner: Executes the generated JavaScript code.
🧩 Custom Checks: Additional logic for specific conditions in the parsed AST.
📜 Language Syntax
This simple language introduces two keywords:

🗝️ iam: Used to declare variables.
🖨️ theresee: Used to print the value of an expression.
🔤 Example Code:
plaintext
Copy code
iam x = 7
iam y = 0
iam sum = x + y

theresee sum
📝 Explanation:
iam x = 7: Declares a variable x and assigns it the value of 7.
iam y = 0: Declares a variable y and assigns it the value of 0.
iam sum = x + y: Declares a variable sum and assigns it the result of x + y.
theresee sum: Prints the value of the variable sum.
🏗️ Project Structure
🔍 Lexer: Reads the input code character by character, categorizing them into tokens like keywords, identifiers, numbers, and operators.
🛠 Parser: Constructs an AST representing the program.
🧑‍💻 Code Generator: Converts the AST into JavaScript code.
🚀 Runner: Executes the generated JavaScript code with eval().
🔧 Lexer
🧹 Skips whitespace and categorizes characters into tokens.
🗝️ Handles keywords like iam and theresee, identifiers, numbers, and operators (+, -, *, /, =).
🛠️ Parser
🌳 Builds an AST representing variable declarations and print statements.
🔑 Creates a Declaration node for each iam keyword and a print node for each theresee keyword.
🧑‍💻 Code Generator
📝 Transforms the AST into JavaScript code.
For Declaration, it generates a JavaScript let statement.
For print, it generates a console.log() statement.
🚀 Runner
Executes the generated JavaScript code.
✅ Custom Check: checkForThala
The checkForThala function inspects the AST and logs a message if any declared variable contains the number 7 (a tribute to "Thala").
🔨 Usage
Write code using the custom language (e.g., variable declarations and print statements).
Pass the code to the compiler function, which:
🔍 Tokenizes the input (Lexer).
🛠 Builds the AST (Parser).
🧑‍💻 Generates JavaScript code (Code Generator).
🚀 Executes the code (Runner).
📝 Example:
js
Copy code
const code = `
iam x = 7
iam y = 0
iam sum = x + y

theresee sum
`;

compiler(code);  // Runs the code
checkForThala(parser(lexer(code)));  // Logs "thala for a reason" if '7' is detected
⚙️ How It Works
Input: The source code is provided as a string.
Lexer: Tokenizes the code into individual elements (keywords, identifiers, numbers, operators).
Parser: Constructs an AST that represents the structure of the program.
Code Generation: Converts the AST into JavaScript code.
Execution: The JavaScript code is executed, producing the final output.
🖨️ Example Output
For the input:

plaintext
Copy code
iam x = 7
iam y = 0
iam sum = x + y

theresee sum
The output will be:

css
Copy code
7
thala for a reason
🚀 Conclusion
This project demonstrates how a program flows from source code to execution by building a custom language with lexing, parsing, and code generation. It showcases how to translate high-level language constructs into JavaScript and execute them.

🌟 Future Enhancements
➕ Add support for more operators and expressions.
🔁 Implement loops and conditional statements.
⚠️ Improve error handling and reporting.
