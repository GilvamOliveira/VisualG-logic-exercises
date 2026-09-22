window.VISUALG_MATCHES = {
  "manzano-25-A": {
    title: "Celsius para Fahrenheit",
    prompt:
      "Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. Fórmula: F ← (9 * C + 160) / 5.",
    code: `algoritmo "ConversaoFahrenheit"
var celsius, fahrenheit: real
inicio
  leia(celsius)
  fahrenheit <- (9 * celsius + 160) / 5
  escreval(fahrenheit:4:2, " °F")
fimalgoritmo`,
  },
  "manzano-25-B": {
    title: "Fahrenheit para Celsius",
    prompt:
      "Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. Fórmula: C ← (F - 32) * (5/9).",
    code: `algoritmo "ConversaoCelsius"
var celsius, fahrenheit: real
inicio
  leia(fahrenheit)
  celsius <- (fahrenheit - 32) * (5 / 9)
  escreval(celsius:4:2, " °C")
fimalgoritmo`,
  },
  "manzano-25-C": {
    title: "Volume da lata de óleo",
    prompt:
      "Calcular e apresentar o volume de uma lata de óleo: VOLUME ← π * RAIO² * ALTURA.",
    code: `algoritmo "CalculoVolume"
var raio, altura, volume: real
inicio
  leia(raio, altura)
  volume <- pi * (raio ^ 2) * altura
  escreval(volume:4:2)
fimalgoritmo`,
  },
  "manzano-25-D": {
    title: "Gasto de combustível",
    prompt:
      "Calcular os litros gastos em uma viagem por um automóvel que faz 12 km/l. Ler tempo e velocidade; DISTANCIA ← TEMPO * VELOCIDADE e LITROS_USADOS ← DISTANCIA / 12.",
    code: `algoritmo "GastoCombustivel"
var tempo, velocidade, distancia, litros_usados: real
inicio
  leia(tempo, velocidade)
  distancia <- tempo * velocidade
  litros_usados <- distancia / 12
  escreval("Velocidade: ",velocidade," Tempo: ",tempo)
  escreval("Distância: ",distancia," Litros: ",litros_usados:4:2)
fimalgoritmo`,
  },
  "manzano-25-E": {
    title: "Prestação em atraso",
    prompt:
      "Calcular uma prestação em atraso: PRESTACAO ← VALOR + (VALOR * TAXA / 100) * TEMPO.",
    code: `algoritmo "PrestacaoAtrasada"
var valor, taxa, tempo, prestacao: real
inicio
  leia(valor, taxa, tempo)
  prestacao <- valor + (valor * taxa / 100) * tempo
  escreval(prestacao:4:2)
fimalgoritmo`,
  },
  "manzano-25-F": {
    title: "Troca de valores",
    prompt:
      "Ler dois valores A e B, trocar seus valores e apresentá-los após a troca.",
    code: `algoritmo "TrocaDeValores"
var a, b, auxiliar: real
inicio
  leia(a, b)
  auxiliar <- a
  a <- b
  b <- auxiliar
  escreval("A=",a," B=",b)
fimalgoritmo`,
  },
  "manzano-25-G": {
    title: "Propriedade distributiva",
    prompt:
      "Ler A, B, C e D e apresentar as adições e multiplicações de cada par: A com B, C e D; B com C e D; C com D.",
    code: `algoritmo "PropriedadeDistributiva"
var a, b, c, d: inteiro
inicio
  leia(a, b, c, d)
  escreval(a+b," ",a*b)
  escreval(a+c," ",a*c)
  escreval(a+d," ",a*d)
  escreval(b+c," ",b*c)
  escreval(b+d," ",b*d)
  escreval(c+d," ",c*d)
fimalgoritmo`,
  },
  "manzano-25-H": {
    title: "Volume da caixa retangular",
    prompt:
      "Calcular e apresentar o volume de uma caixa retangular: VOLUME ← COMPRIMENTO * LARGURA * ALTURA.",
    code: `algoritmo "VolumeCaixaRetangular"
var comprimento, largura, altura, volume: real
inicio
  leia(comprimento, largura, altura)
  volume <- comprimento * largura * altura
  escreval(volume:4:2)
fimalgoritmo`,
  },
  "manzano-25-I": {
    title: "Quadrado da diferença",
    prompt:
      "Ler dois inteiros A e B e imprimir o quadrado da diferença do primeiro pelo segundo.",
    code: `algoritmo "QuadradoDaDiferenca"
var a, b: inteiro
inicio
  leia(a, b)
  escreval((a - b) ^ 2)
fimalgoritmo`,
  },
  "manzano-25-J": {
    title: "Dólar para real",
    prompt:
      "Converter um valor em dólar para real, solicitando a cotação do dólar e a quantidade de dólares.",
    code: `algoritmo "DolarParaReal"
var cotacao, dolar, reais: real
inicio
  leia(cotacao, dolar)
  reais <- cotacao * dolar
  escreval(reais:4:2)
fimalgoritmo`,
  },
  "manzano-25-K": {
    title: "Real para dólar",
    prompt:
      "Converter um valor em real para dólar, solicitando a cotação do dólar e a quantidade de reais.",
    code: `algoritmo "RealParaDolar"
var cotacao, dolar, reais: real
inicio
  leia(cotacao, reais)
  dolar <- reais / cotacao
  escreval(dolar:4:2)
fimalgoritmo`,
  },
  "manzano-25-L": {
    title: "Soma dos quadrados",
    prompt: "Ler A, B e C e apresentar a soma dos quadrados dos três valores.",
    code: `algoritmo "SomaDosQuadrados"
var a, b, c: real
inicio
  leia(a, b, c)
  escreval((a ^ 2) + (b ^ 2) + (c ^ 2))
fimalgoritmo`,
  },
  "manzano-25-M": {
    title: "Quadrado da soma",
    prompt: "Ler A, B e C e apresentar o quadrado da soma dos três valores.",
    code: `algoritmo "QuadradoDaSoma"
var a, b, c: real
inicio
  leia(a, b, c)
  escreval((a + b + c) ^ 2)
fimalgoritmo`,
  },
};
