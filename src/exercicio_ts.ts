//01: Abra o terminal com F1
//02: instale de forma global o TypeScript com "npm install --global typescript"
//03: No terminal execute o comando "npx tsc --init" para inicializar a configuração do Typescript
//04: Para converter um .ts em um .js você deve executar o comando "npx tsc" no terminal
//05: você também pode acionar a função watch com "npx tsc --watch"

//Função para dizer Olá:
function dizOla(name: string): string {
    try {
        return `Olá ${name}! O resultado da multiplicação é:`;
    }
    catch (error) {
        console.error('Ocorreu um erro na saudação, desculpe', error);
        return '';
    }
}

//Função para fazer a multiplicação:
function fazMultiplicacao(valorA: number, ValorB: number): number {
    try {
        return valorA * ValorB;
    }
    catch (error) {
        console.error('Ocorreu um erro na solução da conta', error);
        return 0;
    }
}

//Chamada dos resultados:
console.log(dizOla('Klinsman'));
console.log(fazMultiplicacao(25, 30));
