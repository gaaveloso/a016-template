const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]
// escreva seu código abaixo 👇🏻

// Use o array de filmes que esta no template
// Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
for(let i=0;i<filmes.length;i++){
  console.log(`Filme: ${filmes[i].titulo}\n Ano: ${filmes[i].ano}\n Diretor: ${filmes[i].diretor}\n Elenco: ${filmes[i].elenco}`)
  }
// Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// A saída deve se parecer com:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso”


/*
  laço pra cada filme {
  console.log('titulo, ano, diretor')
  console.log("estrelando: ")
  laço no elenco{
    cada pessoa no elenco
  }
}
*/





// Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays.
// Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados
// Caso seja diferente, imprima que é necessário alterar o número de itens do array.

// const resultadosMegaSena = [
//   [6, 10, 23, 89, 12, 34],
//   [81, 12, 32, 65, 86, 4],
//   [10, 54, 8, 12, 58, 23],
//   [9, 3, 6, 10, 40, 50]
// ]
// for (let i = 0; i < resultadosMegaSena.length; i++) {
//   if(resultadosMegaSena[i].length !== 6){
//     alert("resultado do sorteio está errado.")
//   } else {
//     console.log(`Confira os resultados da mega! ${resultadosMegaSena[i]}`)
//   }
// }

// for (let i = 0; i < resultadosMegaSena.length; i++) {
//   console.log(`Sorteio ${i+1}:`)
//   for (let indice = 0; indice < resultadosMegaSena[i].length; indice++){
//     console.log(resultadosMegaSena[i][indice])
//   }
// }
// Altere o laço externo do programa anterior para que ele seja um for… in
//for (let indice in array)
//pra cada indice do array

// Altere o laço interno do programa anterior para que ele seja um for… of
//for (let elemento of array)
//pra cada elemento do array

// for (let i in resultadosMegaSena){
//   const sorteios = ""
//   console.log(`Sorteio ${Number(i)+1}:`)
//   for (let j of resultadosMegaSena[i]){
//     console.log(j)
//   }
// }