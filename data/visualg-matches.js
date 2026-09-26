window.VISUALG_MATCHES = {
  
  "manzano-25-A": {
    title: "Celsius para Fahrenheit",
    prompt:
      "Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. Fórmula: F ← (9 * C + 160) / 5.",
    code: `Algoritmo "manzano_Ex7-L01A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê uma temperatura em graus Celsius e
//               apresenta em graus Fahrenheit
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   celsius, fahrenheit : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("                         ---  ---                        ")
   Escreval("")

   Escreval("   --- Conversor Celsius (°C) para Fahrenheit (°F) ---   ")
   Escreval("")

   Escreva("Digite a temperatura em graus Celsius (°C): ")
   Leia(celsius)
   Escreval("")

   fahrenheit <- (9 * celsius + 160) / 5

   Escreval("A conversão da temperatura Celsius em Fahrenheit é:", fahrenheit, "°F")
   Escreval("")

   Escreval("                         ---  ---                        ")

Fimalgoritmo`,
  },
  
  "manzano-25-B": {
    title: "Fahrenheit para Celsius",
    prompt:
      "Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. Fórmula: C ← (F - 32) * (5/9).",
    code: `Algoritmo "manzano_Ex7-L01B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê uma temperatura em graus Fahrenheit e
//               apresenta em graus Celsius
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   celsius, fahrenheit : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("                         ---  ---                        ")
   Escreval("")

   Escreval("   --- Conversor Fahrenheit (°F) para Celsius (°C) ---   ")
   Escreval("")

   Escreva("Digite a temperatura em graus Fahrenheit (°F): ")
   Leia(fahrenheit)
   Escreval("")

   celsius <- (fahrenheit - 32) * (5 / 9)

   Escreval("A conversão da temperatura Fahrenheit em Celsius é:", celsius, "°C")
   Escreval("")

   Escreval("                         ---  ---                        ")

Fimalgoritmo`,
  },
  
  "manzano-25-C": {
    title: "Volume da lata de óleo",
    prompt:
      "Calcular e apresentar o volume de uma lata de óleo: VOLUME ← π * RAIO² * ALTURA.",
    code: `Algoritmo "manzano_Ex7-L01C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula e apresenta o valor do volume de uma lata de óleo
//               utilizando a fórmula: volume <- pi * raio^2 * altura
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   volume, raio, altura : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("            ---  ---             ")
   Escreval("")

   Escreval("   --- Volume Lata de Óleo ---   ")
   Escreval("")

   Escreva("Informe a altura: ")
   Leia(altura)
   Escreval("")
   
   Escreva("Informe o raio: ")
   Leia(raio)
   Escreval("")

   volume <- pi * raio^2 * altura

   Escreval("O volume da lata de óleo é de: ", volume:4:2)
   Escreval("")

   Escreval("            ---  ---             ")

Fimalgoritmo`,
  },
  
  "manzano-25-D": {
    title: "Gasto de combustível",
    prompt:
      "Calcular os litros gastos em uma viagem por um automóvel que faz 12 km/l. Ler tempo e velocidade; DISTANCIA ← TEMPO * VELOCIDADE e LITROS_USADOS ← DISTANCIA / 12.",
    code: `Algoritmo "manzano_Ex7-L01D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Este processo descreve o cálculo automatizado do consumo de
//               combustível de um veículo que rende 12 km/l, baseando-se no
//               tempo de viagem e na velocidade média informados pelo usuário.
//               O objetivo principal é calcular e apresentar de forma clara
//               a distância percorrida e o total de litros utilizados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 16/09/2026
Var
   // Seção de Declarações das variáveis
   temp : inteiro
   velocidade, distancia, litrosUsados  : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("              ---  ---              ")
   Escreval("")

   Escreval("   --- Consumo de Combustível ---   ")
   Escreval("")

   Escreva("Informe o tempo gasto no percurso (Ex: 2 horas): ")
   Leia(temp)
   Escreval("")

   Escreva("Informe a velocidade média utilizada: ")
   Leia(velocidade)
   Escreval("")

   distancia <- temp * velocidade
   litrosUsados <- distancia / 12
   
   Escreval("              ---  ---              ")

   Escreva("A velocidade média utilizada foi de: ", velocidade, "Km/h")
   Escreval("")
   
   Escreva("O tempo gasto no percurso foi de: ", temp, "h")
   Escreval("")

   Escreva("A distância percorrida foi de: ", distancia, "Km")
   Escreval("")
   
   Escreva("A quantidade de litros utilizados foi de: ", litrosUsados, "L")
   Escreval("")

   Escreval("              ---  ---              ")

Fimalgoritmo`,
  },
  
  "manzano-25-E": {
    title: "Prestação em atraso",
    prompt:
      "Calcular uma prestação em atraso: PRESTACAO ← VALOR + (VALOR * TAXA / 100) * TEMPO.",
    code: `Algoritmo "manzano_Ex7-L01E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Efetua o cálculo e a apresenta o valor de uma prestação em
//               atraso, utilizando a fórmula
//               PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   prestacao, valor, taxa, diferenca : real
   temp : inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Prestação em Atraso --")
   Escreval("")

   Escreva("Digite o valor da prestação: R$ ")
   Leia(valor)
   Escreval("")

   Escreva("Digite a taxa da prestação: ")
   Leia(taxa)
   Escreval("")

   Escreva("Digite o tempo de atraso (em meses): ")
   Leia(temp)
   Escreval("")

   prestacao <- valor + (valor * taxa / 100) * temp
   diferenca <- prestacao - valor
   
   Escreval("O valor em atraso será de: R$", prestacao:6:2)
   Escreval("O valor do juros é de: R$", diferenca:6:2)

Fimalgoritmo`,
  },
  
  "manzano-25-F": {
    title: "Troca de valores",
    prompt:
      "Ler dois valores A e B, trocar seus valores e apresentá-los após a troca.",
    code: `Algoritmo "manzano_Ex7-L01F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois valores (inteiros, reais ou caracteres) para as
//               variáveis A e B, e efetua a troca dos valores de forma que
//               a variável A passe a possuir o valor da variável B e
//               a variável B passe a possuir o valor da variável A.
//               Apresenta os valores trocados.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, auxiliar: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Troca de Valores --")
   Escreval("")

   Escreva("Informe o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Informe o valor de B: ")
   Leia(b)
   Escreval("")

   auxiliar <- a
   a <- b
   b <- auxiliar

   Escreval("A =", a, " | " ,"B =", b)

Fimalgoritmo`,
  },
  
  "manzano-25-G": {
    title: "Propriedade distributiva",
    prompt:
      "Ler A, B, C e D e apresentar as adições e multiplicações de cada par: A com B, C e D; B com C e D; C com D.",
    code: `Algoritmo "manzano_Ex7-L01G"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê quatro números inteiros e apresentar o resultado da adição
//               e multiplicação, baseando-se na utilização do conceito da
//               propriedade distributiva. Ou seja, se forem lidas as variáveis
//               A, B, C, e D, devem ser somadas e multiplicadas A com B,
//               A com C e A com D. Depois B com C, B com D e por fim C com D.
//               Perceba que será necessário efetuar seis operações de adição e
//               seis operações de multiplicação e apresentar doze resultados
//               de saída.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c, d: inteiro
   somAB, somAC, somAD, somBC, somBD, somCD: inteiro
   multAB, multAC, multAD, multBC, multBD, multCD: inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Propriedade Distributiva --")
   Escreval("")

   Escreva("Informe o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Informe o valor de B: ")
   Leia(b)
   Escreval("")
   
    Escreva("Informe o valor de C: ")
   Leia(c)
   Escreval("")

   Escreva("Informe o valor de D: ")
   Leia(d)
   Escreval("")
   
   // Variavéis de soma
   
   somAB <- a + b
   somAC <- a + c
   somAD <- a + d
   somBC <- b + c
   somBD <- b + d
   somCD <- c + d
   
   // Variavéis de multiplicação
   
   multAB <- a * b
   multAC <- a * c
   multAD <- a * d
   multBC <- b * c
   multBD <- b * d
   multCD <- c * d

   Escreval("A + B =", somAB, " | " ,"A * B =", multAB)
   Escreval("A + C =", somAC, " | " ,"A * C =", multAC)
   Escreval("A + D =", somAD, " | " ,"A * D =", multAD)
   Escreval("B + C =", somBC, " | " ,"B * C =", multBC)
   Escreval("B + D =", somBD, " | " ,"B * D =", multBD)
   Escreval("C + D =", somCD, " | " ,"C * D =", multCD)
   
Fimalgoritmo`,
  },
  
  "manzano-25-H": {
    title: "Volume da caixa retangular",
    prompt:
      "Calcular e apresentar o volume de uma caixa retangular: VOLUME ← COMPRIMENTO * LARGURA * ALTURA.",
    code: `Algoritmo "manzano_Ex7-L01H"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Elabora um programa que calcule e apresente o volume de uma
//               caixa retangular, por meio da fórmula:
//               VOLUME <- COMPRIMENTO * LARGURA * ALTURA.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 22/09/2026
Var
   // Seção de Declarações das variáveis
   comprimento, largura, altura, volume: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Volume da Caixa Retangular --")
   Escreval("")

   Escreva("Informe o comprimento do retângulo: ")
   Leia(comprimento)
   Escreval("")

   Escreva("Informe a largura do retângulo: ")
   Leia(largura)
   Escreval("")

   Escreva("Informe a altura do retângulo: ")
   Leia(altura)
   Escreval("")

   volume <- comprimento * largura * altura

   Escreval("O volume da caixa retangular é:", volume)

Fimalgoritmo`,
  },
  
  "manzano-25-I": {
    title: "Quadrado da diferença",
    prompt:
      "Ler dois inteiros A e B e imprimir o quadrado da diferença do primeiro pelo segundo.",
    code: `Algoritmo "manzano_Ex7-L01I"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê dois inteiros (variáveis A e B) e imprime o resultado
//               do quadrado da diferença do primeiro valor pelo segundo.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, diferenca: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Quadrado Da Diferença --")
   Escreval("")

   Escreva("Digite o valor para a variável A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor para a variável B: ")
   Leia(B)
   Escreval("")

   diferenca <- (a - b) ^ 2

   Escreval("O resultado do quadrado da diferença é: ", diferenca)

Fimalgoritmo`,
  },
  
  "manzano-25-J": {
    title: "Dólar para real",
    prompt:
      "Converter um valor em dólar para real, solicitando a cotação do dólar e a quantidade de dólares.",
    code: `Algoritmo "manzano_Ex7-L01J"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Conversão em real de um valor lido em dólar
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   dolar, reais, cotacao: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Conversão em real de um valor lido em dólar --")
   Escreval("")

   Escreva("Digite a cotação atual do dólar (Ex: 5.25): ")
   Leia(cotacao)
   Escreval("")

   Escreva("Digite a quantidade de dólares que você possui: U$ ")
   Leia(dolar)
   Escreval("")

   reais <- cotacao * dolar

   Escreval("A quantidade de dólares em reais que possui é: R$", reais:4:2)

Fimalgoritmo`,
  },
  
  "manzano-25-K": {
    title: "Real para dólar",
    prompt:
      "Converter um valor em real para dólar, solicitando a cotação do dólar e a quantidade de reais.",
    code: `Algoritmo "manzano_Ex7-L01K"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Conversão em dólar de um valor lido em real
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026
Var
   // Seção de Declarações das variáveis
   dolar, reais, cotacao: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Conversão em dólar de um valor lido em real --")
   Escreval("")

   Escreva("Digite a cotação atual do dólar (Ex: 5.25): ")
   Leia(cotacao)
   Escreval("")

   Escreva("Digite a quantidade de reais que você possui: R$")
   Leia(reais)
   Escreval("")

   dolar <- reais / cotacao

   Escreval("A quantidade de reais em dólares que possui é: U$", dolar:4:2)

Fimalgoritmo`,
  },
  
  "manzano-25-L": {
    title: "Soma dos quadrados",
    prompt: "Ler A, B e C e apresentar a soma dos quadrados dos três valores.",
    code: `Algoritmo "manzano_Ex7-L01L"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O programa efetua a leitura de três valores (A, B e C)
//               e apresenta como resultado final à soma dos quadrados dos
//               três valores lidos.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   A, B, C, valorFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Soma Dos Quadrados --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(B)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(C)
   Escreval("")

   valorFinal <- (A ^ 2) + (B ^ 2) + (C ^ 2)

   Escreval("A soma dos quadrados dos três valores é:", valorFinal)

Fimalgoritmo`,
  },
  
  "manzano-25-M": {
    title: "Quadrado da soma",
    prompt: "Ler A, B e C e apresentar o quadrado da soma dos três valores.",
    code: `Algoritmo "manzano_Ex7-L01M"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O programa efetua a leitura de três valores (A, B e C)
//               e apresenta como resultado final o quadrado da soma dos três
//               valores lidos.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   A, B, C, valorFinal: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Quadrado Da Soma --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(A)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(B)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(C)
   Escreval("")

   valorFinal <- (A + B + C) ^ 2

   Escreval("O quadrado da soma dos três valores é:", valorFinal)

Fimalgoritmo`,
  },
  
  "manzano-26-A": {
    title: "Produto e soma",
    prompt: "Ler quatro valores inteiros A, B, C e D. Apresentar o produto do primeiro pelo terceiro e a soma do segundo com o quarto.",
    code: `Algoritmo "manzano_Extra-Ex1A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Programa efetua a leitura de quatro valores inteiros
//               (variáveis A, B, C e D). Ao final o programa apresenta o
//               resultado do produto (variável P) do primeiro com o terceiro
//               valor, e o resultado do produto (variável P) do primeiro
//               com o terceiro valor, e o resultado da soma (variável S)
//               do segundo com o quarto valor.
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   a, b, c, d, variavelP, variavelS: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Produtos E Somas --")
   Escreval("")

   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreval("")

   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreval("")

   Escreva("Digite o valor de C: ")
   Leia(c)
   Escreval("")

   Escreva("Digite o valor de D: ")
   Leia(d)
   Escreval("")

   variavelP <- a * c
   variavelS <- b + d

   Escreval("O produto do 1° valor (",a," ) pelo 3° valor (",c," ) (P) é: ", variavelP)
   Escreval("A soma do 2° valor (",b," ) com o 4° valor (",d," ) (S) é: ", variavelS)

Fimalgoritmo`,
  },
  
  "manzano-26-B": {
    title: "Reajuste salarial",
    prompt: "Ler o salário mensal e o percentual de reajuste de um trabalhador. Apresentar o novo salário.",
    code: `Algoritmo "manzano_Extra-Ex1B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê o valor correspondente ao salário mensal (variável SM)
//               de um trabalhador e também o valor do percentual de reajuste
//               (variável PR) a ser atribuído. Apresenta o valor do
//               novo salário (variável NS).
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   variavelSalarioMensal, variavelPercentualReajuste: real
   variavelNovoSalario, variavelReajuste: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("-- Reajuste Salarial --")
   Escreval("")

   Escreva("Informe o valor do seu salário mensal: ")
   Leia(variavelSalarioMensal)
   Escreval("")

   Escreva("Informe o valor do porcentual de reajuste (%): ")
   Leia(variavelPercentualReajuste)
   Escreval("")

   variavelReajuste <- variavelSalarioMensal * (variavelPercentualReajuste / 100)
   variavelNovoSalario <- variavelSalarioMensal + variavelReajuste

   Escreval("O valor do reajuste foi de: R$", variavelReajuste)
   Escreval("")

   Escreval("O valor do novo salário é: R$", variavelNovoSalario)

Fimalgoritmo`,
  },
  
  "manzano-26-C": {
    title: "Eleição sindical",
    prompt: "Ler votos válidos de três candidatos, votos nulos e em branco; apresentar total de eleitores e os percentuais solicitados.",
    code: `Algoritmo "manzano_Extra-Ex1C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apuração De Votos de uma Eleição
// Autor(a)    : Gilvam J. T. Oliveira
// Data atual  : 02/09/2026

Var
   // Seção de Declarações das variáveis
   // Variáveis de entrada
   votosA, votosB, votosC : inteiro
   votosNulos, votosBranco, totalValidos, totalEleitores : inteiro
   percentualValidos, percentualA, percentualB, percentualC: real
   percentualNulos, percentualBranco : real

Inicio
   // Entrada de dados
   Escreval("-- Apuração de Votos --")
   Escreval("")

   Escreva("Digite os votos válidos do Candidato A: ")
   Leia(votosA)
   Escreval("")

   Escreva("Digite os votos válidos do Candidato B: ")
   Leia(votosB)
   Escreval("")

   Escreva("Digite os votos válidos do Candidato C: ")
   Leia(votosC)
   Escreval("")

   Escreva("Digite a quantidade de votos nulos: ")
   Leia(votosNulos)
   Escreval("")

   Escreva("Digite a quantidade de votos em branco: ")
   Leia(votosBranco)
   Escreval("")

   // Processamento
   totalValidos <- votosA + votosB + votosC
   totalEleitores <- totalValidos + votosNulos + votosBranco

   // Cálculo dos percentuais
   percentualValidos <- (totalValidos / totalEleitores) * 100
   percentualA <- (votosA / totalEleitores) * 100
   percentualB <- (votosB / totalEleitores) * 100
   percentualC <- (votosC / totalEleitores) * 100
   percentualNulos <- (votosNulos / totalEleitores) * 100
   percentualBranco <- (votosBranco / totalEleitores) * 100

   // Saída de dados
   Escreval("-- Resultado da Apuração Dos Votos --")
   Escreval("")

   Escreval("Total de eleitores: ", totalEleitores)
   Escreval("Percentual de votos válidos totais: ", percentualValidos:1:2, "%")
   Escreval("Percentual do Candidato A: ", percentualA:1:2, "%")
   Escreval("Percentual do Candidato B: ", percentualB:1:2, "%")
   Escreval("Percentual do Candidato C: ", percentualC:1:2, "%")
   Escreval("Percentual de votos nulos: ", percentualNulos:1:2, "%")
   Escreval("Percentual de votos em branco: ", percentualBranco:1:2, "%")

Fimalgoritmo`,
  },
  
  "manzano-46-A": {
    title: "Tabuada",
    prompt: "Apresentar a tabuada de multiplicar, de 1 a 10, de um número qualquer.",
    code: `Algoritmo "manzano_Ex5.1.1-L03A"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta a tabuada de multiplicar, de 1 a 10,
//               de um número qualquer.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   numero, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Tabuado do 1 ao 10 --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   contadora <- 1

   enquanto (contadora <= 10) faca
      resultado <- contadora * numero
      Escreval(numero," x",contadora," =",resultado)

      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },
  
  "manzano-46-B": {
    title: "Soma de 1 a 100",
    prompt: "Apresentar o total da soma dos cem primeiros números inteiros.",
    code: `Algoritmo "manzano_Ex5.1.1-L03B"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o total da soma dos cem primeiros números inteiros.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   soma, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma de 1 a 100 --")
   Escreval("")

   contadora <- 1
   soma <- 0

   enquanto (contadora <= 100) faca
      soma <- soma + contadora
      contadora <- contadora + 1
   fimenquanto

   Escreval("O resultado da soma dos cem primeiros números inteiros é: ", soma)

Fimalgoritmo`,
  },
  
  "manzano-46-C": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares de 1 até 500.",
    code: `Algoritmo "manzano_Ex5.1.1-L03C"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta o somatório dos valores pares de 1 até 500.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   soma, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Soma dos pares --")
   Escreval("")

   contadora <- 1
   soma <- 0

   enquanto (contadora <= 500) faca

      se (contadora mod 2 = 0) entao
         soma <- soma + contadora
      fimse

      contadora <- contadora + 1
   fimenquanto

   Escreval("O resultado da soma dos pares de 1 a 500 é:",soma)

Fimalgoritmo`,
  },
  
    "manzano-46-D": {
    title: "Números ímpares de 0 a 20",
    prompt: "Apresentar todos os valores inteiros ímpares situados na faixa de 0 a 20, verificando dentro da repetição se cada número é ímpar.",
    code: `Algoritmo "manzano_Ex5.1.1-L03D"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta todos os valores inteiros ímpares situados na faixa
//               de 0 a 20, verificando dentro da repetição se cada número é
//               ímpar.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Ímpares de 0 a 20 --")
   Escreval("")

   contadora <- 0

   Escreval("Os valores inteiros ímpares de 0 a 20 são:")
   Escreval("")

   enquanto (contadora <= 20) faca

      se (contadora mod 2 = 1) entao
         Escreval(contadora)
      fimse

      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-E": {
    title: "Potências de 3",
    prompt: "Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.1.1-L03E"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Apresenta as potências de 3 para expoentes de 0 a 15
//               sem usar o operador ^.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   resultado, contadora: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potências de 3 --")
   Escreval("")

   resultado <- 1
   contadora <- 0

   enquanto (contadora <= 15) faca
      Escreval("3 elevado a",contadora," =",resultado)
      resultado <- resultado * 3
      contadora <- contadora + 1
   fimenquanto

Fimalgoritmo`,
  },

  "manzano-46-F": {
    title: "Potência de uma base",
    prompt: "Calcular o resultado de uma potência utilizando uma base e um expoente informados pelo usuário, sem utilizar o operador de exponenciação (^).",
    code: `Algoritmo "manzano_Ex5.1.1-L03F"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Calcula o resultado de uma potência utilizando uma base e um
//               expoente informados pelo usuário, sem utilizar o operador
//               de exponenciação (^)
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   base, expoente, contadora, resultado: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Potência de base qualquer --")
   Escreval("")

   Escreva("Digite a base: ")
   Leia(base)
   Escreval("")

   Escreva("Digite o expoente: ")
   Leia(expoente)
   Escreval("")

   resultado <- 1
   contadora <- expoente

   enquanto (contadora > 0) faca
      resultado <- resultado * base
      contadora <- contadora - 1
   fimenquanto

   Escreval(base," elevado a",expoente," =",resultado)

Fimalgoritmo`,
  },

  "manzano-46-G": {
    title: "Série de Fibonacci",
    prompt: "Apresentar a série de Fibonacci até o décimo quinto termo, iniciando com os valores 1 e 1.",
    code: ``,
  },

  "manzano-46-H": {
    title: "Conversão Celsius para Fahrenheit",
    prompt: "Apresentar a conversão de temperaturas de Celsius para Fahrenheit, de 10 em 10 graus, iniciando em 10°C e terminando em 100°C.",
    code: ``,
  },

  "manzano-46-I": {
    title: "Soma e média de 10 valores",
    prompt: "Ler 10 valores numéricos e apresentar ao final o somatório e a média aritmética dos valores informados.",
    code: ``,
  },

  "manzano-46-J": {
    title: "Soma e média dos pares",
    prompt: "Apresentar o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.",
    code: ``,
  },

  "manzano-46-K": {
    title: "Área total da residência",
    prompt: "Calcular a área total de uma residência, lendo o nome, a largura e o comprimento de cada cômodo e acumulando as áreas até o usuário informar que não deseja continuar.",
    code: ``,
  },

  "manzano-46-L": {
    title: "Maior e menor valor",
    prompt: "Ler valores inteiros positivos até que seja informado um valor negativo e, ao final, apresentar o maior e o menor valor informado.",
    code: ``,
  },
    "manzano-50-A": {
    title: "Quadrados de 15 a 200",
    prompt: "Apresentar os quadrados dos números inteiros de 15 até 200.",
    code: ``,
  },

  "manzano-50-B": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares existentes na faixa de 1 até 500.",
    code: ``,
  },

  "manzano-50-C": {
    title: "Divisíveis por 4",
    prompt: "Apresentar todos os números menores que 200 que sejam divisíveis por 4, verificando essa condição dentro da repetição.",
    code: ``,
  },

  "manzano-50-D": {
    title: "Grãos de trigo no tabuleiro",
    prompt: "Calcular o total de grãos de trigo em um tabuleiro de xadrez, começando com 1 grão e dobrando a quantidade a cada quadro até o 64º quadro.",
    code: ``,
  },

  "manzano-50-E": {
    title: "Soma de fatoriais",
    prompt: "Ler 15 valores inteiros e apresentar ao final o somatório dos fatoriais de cada valor informado.",
    code: ``,
  },

  "manzano-50-F": {
    title: "Soma e média de valores positivos",
    prompt: "Ler valores numéricos enquanto forem positivos e apresentar ao final o somatório, a média aritmética e a quantidade de valores lidos. O processo deve terminar quando for informado um valor negativo.",
    code: ``,
  },

  "manzano-50-G": {
    title: "Fatorial dos números ímpares",
    prompt: "Apresentar o fatorial dos valores ímpares situados na faixa numérica de 1 a 10.",
    code: ``,
  },

  "manzano-50-H": {
    title: "Área total da residência",
    prompt: "Calcular a área total de uma residência lendo o nome, a largura e o comprimento de cada cômodo e acumulando as áreas até o usuário informar que não deseja continuar.",
    code: ``,
  },

  "manzano-50-I": {
    title: "Maior e menor valor",
    prompt: "Ler valores inteiros positivos até que seja informado um valor negativo e, ao final, apresentar o maior e o menor valor informado.",
    code: ``,
  },

  "manzano-50-J": {
    title: "Divisão sem operador DIV",
    prompt: "Calcular o resultado inteiro da divisão de dois números utilizando uma estrutura de repetição, sem utilizar o operador DIV.",
    code: ``,
  },
    "manzano-66-A": {
    title: "Quadrados de 15 a 200",
    prompt: "Apresentar os quadrados dos números inteiros de 15 até 200.",
    code: ``,
  },

  "manzano-66-B": {
    title: "Tabuada",
    prompt: "Apresentar a tabuada de multiplicar, de 1 a 10, de um número qualquer.",
    code: ``,
  },

  "manzano-66-C": {
    title: "Soma de 1 a 100",
    prompt: "Apresentar o total da soma dos cem primeiros números inteiros.",
    code: ``,
  },

  "manzano-66-D": {
    title: "Soma dos pares",
    prompt: "Apresentar o somatório dos valores pares existentes na faixa de 1 até 500.",
    code: ``,
  },

  "manzano-66-E": {
    title: "Números ímpares de 0 a 20",
    prompt: "Apresentar todos os valores inteiros ímpares situados na faixa de 0 a 20, verificando dentro da repetição se cada número é ímpar.",
    code: ``,
  },

  "manzano-66-F": {
    title: "Números divisíveis por 4",
    prompt: "Apresentar todos os números menores que 200 que sejam divisíveis por 4, verificando essa condição durante a repetição.",
    code: ``,
  },

  "manzano-66-G": {
    title: "Potências de 3",
    prompt: "Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15, sem utilizar o operador de exponenciação (^).",
    code: ``,
  },

  "manzano-66-H": {
    title: "Potência de uma base",
    prompt: "Calcular o resultado de uma potência utilizando uma base e um expoente informados pelo usuário, sem utilizar o operador de exponenciação (^).",
    code: ``,
  },

  "manzano-66-I": {
    title: "Série de Fibonacci",
    prompt: "Apresentar a série de Fibonacci até o décimo quinto termo, iniciando com os valores 1 e 1.",
    code: ``,
  },

  "manzano-66-J": {
    title: "Conversão Celsius para Fahrenheit",
    prompt: "Apresentar a conversão de temperaturas de Celsius para Fahrenheit, de 10 em 10 graus, iniciando em 10°C e terminando em 100°C.",
    code: ``,
  },

  "manzano-66-K": {
    title: "Fatorial dos números ímpares",
    prompt: "Apresentar o fatorial dos valores ímpares situados na faixa numérica de 1 a 10.",
    code: ``,
  },
  
  "faccat-4-5": {
    title: "Antecessor",
    prompt: "Ler um valor e escrever seu antecessor.",
    code: `Algoritmo "faccat_Pg4-Ex5"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler um valor
//               (do teclado) e escrever (na tela) o seu antecessor.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   numero, antecessor: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Antecessor --")
   Escreval("")

   Escreva("Digite um número: ")
   Leia(numero)
   Escreval("")

   antecessor <- numero - 1

   Escreval("O antecessor do número digitado é:", antecessor)

Fimalgoritmo`,
  },
  
  "faccat-4-6": {
    title: "Área do retângulo",
    prompt: "Ler base e altura de um retângulo, calcular e escrever a área.",
    code: `Algoritmo "faccat_Pg4-Ex6"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Algoritmo para ler as dimensões de um retângulo
//              (base e altura), calcula e escreve a área do retângulo.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   base, altura, area:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Dimensões Retangulo --")
   Escreval("")

   Escreva("Digite o número da base: ")
   Leia(base)
   Escreval("")

   Escreva("Digite o número da altura: ")
   Leia(altura)
   Escreval("")

   area <- base * altura

   Escreval("A área do retângulo é:",area)

Fimalgoritmo`,
  },
  
  "faccat-4-7": {
    title: "Idade em dias",
    prompt: "Ler idade em anos, meses e dias e escrever apenas em dias; ano tem 365 dias e mês 30.",
    code: `Algoritmo "faccat_Pg4-Ex7"
// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Algoritmo que lâ a idade de uma pessoa expressa em anos,
//               meses e dias e escreva a idade dessa pessoa expressa apenas
//               em dias.
//               Considerar ano com 365 dias e mês com 30 dias.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 28/08/2026
Var
   // Seção de Declarações das variáveis
   anos, meses, dias, totalDias:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Programa Idade em Dias --")
   Escreval("")
   
   Escreva("Digite a quantidade de anos: ")
   Leia(anos)
   Escreval("")
   
   Escreva("Digite a quantidade de meses: ")
   Leia(meses)
   Escreval("")
   
   Escreva("Digite a quantidade de dias: ")
   Leia(dias)
   Escreval("")
   
   totalDias <- (anos * 365) + (meses * 30) + dias
   
   Escreval("Dias desde o seu nascimento:",totalDias)

Fimalgoritmo`,
  },
  
  "faccat-6–8-38": {
    title: "Acesso por código",
    prompt: "Validar código 1234 e senha 9999, informando acesso permitido ou erro.",
    code: `Algoritmo "faccat_Pg6-8-Ex38"
// Disciplina  : [Lógica de Programação de JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Lê um número que é um código de usuário. Caso este código
//               seja diferente de um código armazenado internamente no
//               algoritmo (igual a 1234) é apresentada a mensagem
//               ‘Usuário inválido!’. Caso o Código seja correto, é
//               lido outro valor que é a senha. Se esta senha estiver
//               incorreta (a certa é 9999) é mostrada a mensagem
//               ‘senha incorreta’. Caso a senha esteja correta, é
//               mostrada a mensagem ‘Acesso permitido’.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   codigoArmazenado, codigoDigitado: inteiro
   senhaArmazenada, senhaDigitada: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Acesso Por Código --")
   Escreval("")

   codigoArmazenado <- 1234
   senhaArmazenada <- 9999

   Escreva("Digite o código: ")
   Leia(codigoDigitado)
   Escreval("")

   se (codigoDigitado <> codigoArmazenado) entao
      Escreval("Usuário Inválido!")
   senao
      Escreva("Digite a senha: ")
      Leia(senhaDigitada)
      Escreval("")

      se (senhaArmazenada <> senhaDigitada) entao
         Escreval("Senha Incorreta!")
      senao
         Escreval("Acesso Permitido!")
      fimse
   fimse

Fimalgoritmo`,
  },
  
  "faccat-8-39": {
    title: "Expressões lógicas",
    prompt: "Para A=V, B=V e C=F, avaliar as expressões lógicas apresentadas no exercício.",
    code: `Algoritmo "faccat_Pg8-Ex39"
// Disciplina  : [Lógica de Programação de JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Para A=V, B=V e C=F, avalia as expressões lógicas apresentadas.
// Autor(a)    : Gilvam J. T. de Oliveira
// Data atual  : 25/09/2026
Var
   // Seção de Declarações das variáveis
   a, b, c: logico
   resultadoA, resultadoB, resultadoC: logico

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreval("-- Expressões lógicas --")
   Escreval("")

   a <- verdadeiro
   b <- verdadeiro
   c <- falso

   resultadoA <- (a e b) ou (a xou b)
   resultadoB <- (a ou b) e (a e c)
   resultadoC <- a ou c e b xou a e nao b
   
   Escreval("Resultado a): ",resultadoA)
   Escreval("Resultado b): ",resultadoB)
   Escreval("Resultado c): ",resultadoC)

Fimalgoritmo`,
  },
};
