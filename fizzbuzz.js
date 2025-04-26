function fizzbuzz(n) {
  // Verifica se o número é múltiplo de 3 e 5 ao mesmo tempo
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz"; // Retorna "FizzBuzz" se for múltiplo de ambos
  }

  // Verifica se o número é múltiplo de 3
  if (n % 3 === 0) {
    return "Fizz"; // Retorna "Fizz" se for múltiplo de 3
  }

  // Verifica se o número é múltiplo de 5
  if (n % 5 === 0) {
    return "Buzz"; // Retorna "Buzz" se for múltiplo de 5
  }

  // Caso o número não seja múltiplo nem de 3 nem de 5, retorna o número como string
  return n.toString(); // Converte o número em string
}

// Exporta a função para ser utilizada em outros arquivos, como nos testes
module.exports = fizzbuzz;
