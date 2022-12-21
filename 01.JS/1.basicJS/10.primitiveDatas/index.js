console.log(`
 * Tipos Primitivos no JS
- Resumo

Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.

- Em detalhes

Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem.

- No JavaScript, existem 6 tipos primitivos:
String
Number
Boolean
Null
undefined
Symbol (novo no ECMAScript (en-US) 6)


=> Todos os primitivos são imutáveis (não podem ter o seu valor modificado).

- Wrappers em JavaScript
NT: O termo "wrapper" em português significa "que envolve". No entanto, em tecnologia, é comum se usar a versão em inglês que possui o mesmo significado.

À exceção do null e do undefined, todos os primitivos tem um objeto wrapper equivalente:

String para o primitivo string.
Number para o primitivo .
Boolean para o primitivo Boolean.
Symbol para o primitivo Symbol.
O método valueOf() do objeto wrapper retorna o valor primitivo.

NT: É possível verificar o tipo da variável digitando typeof+nomedavariavel. Para saber mais, verifique typeof.
`)

