function lexer(input){
    let tokens = [];
    let cursor = 0;

    while (cursor < input.length) {
        let char = input[cursor];

        if (/\s/.test(char)) {
            cursor++;
            continue;
        }

        if (/[a-zA-Z]/.test(char)) {
            let word = '';

            while (/[a-zA-Z]/.test(char) && cursor < input.length) {
            word += char;
            char = input[++cursor];
            }

            if(word=='iam' || word=='theresee'){
                tokens.push({type:'keyword',value:word})
            }
            else{
                tokens.push({type:'identifier',value:word})
            }
            continue;
        }
        if (/\d/.test(char)) {
            let number = '';

            while (/\d/.test(char) && cursor < input.length) {
            number += char;
            char = input[++cursor];
            }

            tokens.push({type: 'number', value: parseInt(number)});
            continue;
        }
        if (/[+\-*/=]/.test(char)) {
            tokens.push({type: 'operator', value: char});
            cursor++;
            continue;
        }

        // Add more tokenization logic here

        cursor++;
    }

    return tokens;
}

function parser(tokens){
    const tree={
        type:'program',
        body:[]
    };
    while(tokens.length>0){
        let token=tokens.shift();
        if(token.type=='keyword' && token.value=='iam'){
            let declaration={
                type:'Declaration',
                name:tokens.shift().value,
                value:null
            };

            if (tokens[0] && tokens[0].type == 'operator' && tokens[0].value == '=') {
                tokens.shift(); 
                let expression='';
                while(tokens.length>0 && tokens[0].type!='keyword'){
                    expression+=tokens.shift().value;
                }
                declaration.value = expression.trim();
                tree.body.push(declaration);
            }

           
        }
        if(token.type=='keyword' && token.value=='theresee'){
            tree.body.push({
                type:'print',
                expression:tokens.shift().value
            });
        }
        
    }
    return tree;
}


function codeGen(node) {
    switch (node.type) {
        case 'program':
            return node.body.map(codeGen).join('\n');
        case 'Declaration':
            return `let ${node.name} = ${node.value};`;
        case 'print':
            return `console.log(${node.expression});`;
        default:
            throw new TypeError(node.type);
    }
}      

function runner(input){
    try {
        eval(input);
    } catch (error) {
        console.error("chekkesta error", error);
    }
}


function compiler(input){
    const tokens=lexer(input)
    const tree=parser(tokens)

    const exec=codeGen(tree)
    runner(exec)
    
}

function checkForThala(tree) {
    for (const node of tree.body) {
        if (node.type === 'Declaration' && node.value.includes('7')) {
            console.log("thala for a reason");
            break;
        }
    }
}





const code = `
iam x = 7

iam y = 0
iam sum = x + y

theresee sum
`;





compiler(code);
checkForThala(parser(lexer(code)));



