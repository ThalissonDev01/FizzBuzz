const fizzbuzz = require('./fizzbuzz');

// Testa se a função retorna o número como string quando não é múltiplo de 3 nem 5
test('retorna o número como string', () => {
  expect(fizzbuzz(1)).toBe("1");  // 1 não é múltiplo de 3 nem de 5
  expect(fizzbuzz(2)).toBe("2");  // 2 também não é
});

// Testa se a função retorna "Fizz" para múltiplos de 3
test('retorna "Fizz" para múltiplos de 3', () => {
  expect(fizzbuzz(3)).toBe("Fizz");  // 3 é múltiplo de 3
  expect(fizzbuzz(6)).toBe("Fizz");  // 6 também
});

// Testa se a função retorna "Buzz" para múltiplos de 5
test('retorna "Buzz" para múltiplos de 5', () => {
  expect(fizzbuzz(5)).toBe("Buzz");   // 5 é múltiplo de 5
  expect(fizzbuzz(10)).toBe("Buzz"); // 10 também
});

// Testa se a função retorna "FizzBuzz" para múltiplos de 3 e 5 ao mesmo tempo
test('retorna "FizzBuzz" para múltiplos de 3 e 5', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz"); // 15 é múltiplo de 3 e 5
  expect(fizzbuzz(30)).toBe("FizzBuzz"); // 30 também
});
