//Desenha uma moldura em uma frase

//const readline = require('readline-sync');
//const frase = readline.question('\nDigite uma frase: ')
//const ch = '█'

//for (let i=0; i<frase.length+4; i++){
//   process.stdout.write(ch);
//}

//console.log(`\n${ch} ${frase} ${ch}`)

//for (let i=0; i<frase.length+4; i++){
//   process.stdout.write(ch);
//}

//OU
{
const readline = require('readline-sync'); 
const frase = readline.question('\nDigite uma frase: ') 
const ch = '█'

function barra (qtde){
    for (let i=0; i<qtde+4 ; i++){
        process.stdout.write(ch);
    }
    console.log()
}
}
