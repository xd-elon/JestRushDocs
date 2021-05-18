# jest Matchers

nesse codigo os operadores matchers ``` expect( 2 + 2) ``` retorna um objeto de
"expetativa". normalmente não se fara muito com esses objetos de expetativa,
exceto chamar matcher para eles. neste codigo``` .toBe(4) ```é o matcher. ele rastreia todos os matchers com falha para que possa imprimir mensagens de erro

```toBe``` usa ```Object.is``` para testar igualdade exata. Se voce desejar verificar o valor de um objeto, use ```toEqual```, toEqual verifica de maneira recursiva todos os campos de um objeto ou array

vocẽ tambem pode testar o oposto do matchers``` expect(a + b).not.toBe(0); ```

# Truthiness

Em testes, as vezes vocẽ precida distinguir entre ```undefined,  null```e ``` false```,
mas as vezes não deseja tratalos de forma diferente. Jest contém ajudantes que permitem que você seja explicito sobre o que deseja.

| sintax | esperado |
| --- | --- |
| `toBeNull` | `null ` |
| `toBeUndefined` | `undefined ` |
| `toBeDefined` | é o oposto de `toBeUndefined` |
| `toBeTruthy` | declarações de `if` que o if trate como verdadeira |
| `toBeFalse` | declarações de `if` que o if trate como falsa |


# Numbers

Para igualdade de ponto flutuante, use em `toBeCloseTo` em vez de to `toEqual` porque voçẽ não quer que um teste dependa de um pequeno arredondamento

| sintax | esperado |
| --- | --- |
|`toBeGreaterThan`| maior que parametro passado 3|
|`toBeGreaterThanOrEqual`| >= que parametro passado 3.5|
|`toBeLessThan`| menor que parametro passado 5|
|`toBeLessThanOrEqual`| menor ou igual a parametro passado 4.5 |
|`toBeCloseTo`| para igualdade de ponto flutuante |

# Strings

Vocẽ pode comparar strings com expressões regulares com `toMatch`

| sintax | esperado |
| --- | --- |
| `toMatch` | string que for passada no parametro |

ex:  toMatch(/stop/);

# Arrays and iterables

Vocẽ pode verificar se uma matriz ou interável contém um item especifico usando `toContain`


# Exceptions 
 Se vocẽ quiser testar se uma função especifica gera um erro ao ser chamada use `toThrow`


para mais acesse https://jestjs.io/docs/expect

# Asynchronous Callbacks

O padão assincrono mais comun são os retornos de chamada

Por exemplo, digamos que voce tenha uma `fecthData(callback)` função que busca alguns
dados e chama `callback(data)` quando esta completa. vocẽ  deseja testar se esses dados retornados
são string `peanut butter`.

Por padrão os testes de jest são concluidos quando chegam ao final de sua execução. Isso
significa que este teste não funcionara conforme o esperado "codigo asynchrono deste repositorio"

o poblema é que o teste será concluido assim que for fetchData concluido, antes mesmo de chamar o retorno
de chamada.

Existe uma forma alternativa de `test` corrigir isso. Em vez de colocar o teste em uma função com um argumento vazio, use um único argumento chamado `done`. Jest esperar até que o `done` retorno de chamada seja chamado antes de terminar o teste.


Se `done()` nunca for chamado, o teste irá falhar (com erro de timeout), que é o que você deseja que aconteça.

Se a expectinstrução falhar, ela gerará um erro e `done()` não será chamada. Se quisermos ver no log de teste por que ele falhou, temos que embrulhar `expect` em um `try` bloco e passar o erro no `catch` bloco para `done`. Caso contrário, terminaremos com um erro de tempo limite opaco que não mostra por qual valor foi recebido `expect(data)`.

# Asynchronous Promises

Se seu código usa promessas, há uma maneira mais direta de lidar com testes assíncronos.
Retorne uma promessa do seu teste e jest esperará que a promessa seja resolvida. Se a promessa for rejeitada, o teste falhará automaticamente.

Por exemplo, digamos que `fetchData` em vez de usar um retorno de chamada, retorne uma
promessa que deve ser resolvida para string `'peanut butter'`. Podemos testá-lo com:
