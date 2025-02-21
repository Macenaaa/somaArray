const somaArray = require ('./somaArray');

test('Soma de todos os números de um array', () => {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = somaArray(numeros);
    expect(somaArray([1,2,3,4,5])).toBe(15); 
});