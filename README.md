# jest Matchers

nesse codigo os operadores matchers ``` expect( 2 + 2) ``` retorna um objeto de
"expetativa". normalmente não se fara muito com esses objetos de expetativa,
exceto chamar matcher para eles. neste codigo``` .toBe(4) ```é o matcher. ele rastreia todos os matchers com falha para que possa imprimir mensagens de erro

```toBe``` usa ```Object.is``` para testar igualdade exata. Se voce desejar verificar o valor de um objeto, use ```toEqual```, toEqual verifica de maneira recursiva todos os campos de um objeto ou array

vocẽ tambem pode testar o oposto do matchers``` expect(a + b).not.toBe(0); ```

# Truthiness

Em testes, as vezes vocẽ precida distinguir entre ```undefined,  null```e ``` false```,
mas as vezes não deseja tratalos de forma diferente. Jest contém ajudantes que permitem que voçê seja explicito sobre o que deseja.

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