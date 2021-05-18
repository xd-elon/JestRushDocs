# jest Matchers

nesse codigo os operadores matchers ``` expect( 2 + 2) ``` retorna um objeto de
"expetativa". normalmente não se fara muito com esses objetos de expetativa,
exceto chamar matcher para eles. neste codigo``` .toBe(4) ```é o matcher. ele rastreia todos os matchers com falha para que possa imprimir mensagens de erro

```toBe``` usa ```Object.is``` para testar igualdade exata. Se voce desejar verificar o valor de um objeto, use ```toEqual```, toEqual verifica de maneira recursiva todos os campos de um objeto ou array

vocẽ tambem pode testar o oposto do matchers``` expect(a + b).not.toBe(0); ```

# Truthiness
