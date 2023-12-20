// exercicio 1

// let numero, subtracao

// numero = parseInt(prompt("insira um numero"))

// subtracao = numero - 1

// alert(subtracao)


//exercicio 2

// let base, altura, calculo

// base = parseInt(prompt("insira o valor da base"))
// altura = parseInt(prompt("insira o valor da altura"))
// calculo = base * altura
// alert("a area do retangulo e :" + calculo)


//exercicio 3

// let anos,meses,dias,calculoTotal,calculoMeses,calculoAnos

// anos = parseInt(prompt("quantos anos voce tem:"))
// meses = parseInt(prompt("quantos meses voce tem:"))
// dias = parseInt(prompt("quantos dias voce tem:"))

// calculoAnos = anos*360
// calculoMeses = meses*30

// calculoTotal = calculoAnos + calculoMeses + dias
// alert("o total de dias que vc tem e:" +  calculoTotal)



//ex 4

// let eleitores,nulos,brancos,validos

// eleitores = 1000

// nulos = 100
// brancos = 200
// validos = 700
// parseInt(nulos,brancos,validos)
// brancos = brancos / 100 * 10 + "%"
// nulos = nulos / 100 * 10 + "%"
// validos = validos / 100 * 10 + "%"

// alert("a quantidade de votos nulos sao: " + nulos +  "a quantidade de votos brancos sao: " + brancos  + "a quantidade de votos validos sao: " + validos)

// ex5
// let salario,aumento,aumento2

// salario = parseInt(prompt("digite o seu salario"))
// aumento = salario / 100 * 10
// aumento2 = aumento + salario

// alert("o seu salario recebeu um aumento de 10% " + aumento2)

//ex6

//  let fabrica,distribuidor,imposto,valorFinal

// fabrica = parseInt(prompt("digite o valor de custo"))
// distribuidor = fabrica / 100 * 28
// imposto = fabrica / 100 * 45
// valorFinal = fabrica + distribuidor + imposto
// alert("valor final do carro e: " + valorFinal)


// ex 7

// let comissao5,comissao,salario,valorTotal,comissaoCarroVendido,carrosVendidos,valorVendido

// salario = parseInt(prompt("digite o seu salario"))
// comissao = parseInt(prompt("digite a sua comissao"))
// carrosVendidos = parseInt(prompt("digite os carros vendidos"))
// valorVendido = parseInt(prompt("digite o valor total dos carros vendidos"))

// comissao5 = valorVendido / 100 * 5
// comissaoCarroVendido = 200 * carrosVendidos
// valorTotal = salario + comissao + comissao5 + comissaoCarroVendido


// alert("valor total a receber: " + valorTotal +"$")

// ex 8

// let valor

// valor = parseInt(prompt("digite um valor"))

// if (valor > 10){
//     alert("e maior que 10")
// } else {
//     alert("e menor que 10")
// }


//ex 9

// let valor

// valor = parseInt(prompt("digite um valor"))

// if (valor >= 0){
//     alert("esse numero e positivo")
// } else {
//     alert("esse numero e negativo")
// }

//ex 10

// let quantidadeMacas,valorMacas

// quantidadeMacas = parseInt(prompt("digite a quantidade de  maçãs"))

// if ( quantidadeMacas >= 12){

//     valorMacas = 1 * quantidadeMacas
//     alert("esse e o valor a se pago: " + valorMacas + "R$")
// } else {
//     valorMacas = 1.30 * quantidadeMacas
//     alert("esse e o valor a se pago: " + valorMacas + "R$")
// }


// ex11

// let nota1,nota2,media

// nota1 = parseInt(prompt("digite a primeira nota"))
// nota2 = parseInt(prompt("digite a segunda nota"))

// media = (nota1 + nota2) / 2

// if ( media >= 6){

    
//     alert("aluno aprovado essa foi sua media : " + media )
// } else {
//     alert("aluno reprovado essa foi sua media : " + media )
// }



//ex 12

// let anoNascimento,anoAtual,idade

// anoNascimento = parseInt(prompt("digite seu ano de nascimento"))
// anoAtual = 2023
// idade = 2023 - anoNascimento

// if ( idade >= 18){

    
//     alert("Voce pode votar esse ano")
// } else {
//     alert("Voce nao pode votar esse ano")
// }


// ex 13

// let valor1,valor2,media

// valor1 = parseInt(prompt("digite um valor :"))
// valor2 = parseInt(prompt("digite um valor :"))



// if ( valor1 == valor2 ){

//     alert("valores iguais")
    
// }
// if(valor1 > valor2){

//     alert("o maior deles e: " + valor1)
// } else{
//     alert("o maior deles e: " + valor2)
// }


//ex 14

// let valor1,valor2,media

// valor1 = parseInt(prompt("digite um valor :"))
// valor2 = parseInt(prompt("digite um valor :"))



// if ( valor1 == valor2 ){

//     alert("valores iguais")
    
// }
// if(valor1 > valor2){

//     alert("ordem crescente : "+valor2 + "/"+ valor1)
// } else{
//     alert("ordem crescente : "+valor1 + "/"+ valor2)
// }

//ex 15

// let horaInicio,horaTermino,hora1,hora2,hora

// horaInicio = parseInt(prompt("digite a hora de inicio :"))
// horaTermino = parseInt(prompt("digite a hora de termino :"))


// hora1 = horaTermino - 24
// hora2 = horaInicio - 24
// hora = hora1 - hora2

// if(hora <= 0){
//  hora1 = horaInicio - 24
//  hora = hora1 - horaTermino
//  alert("a duração da partida foi: " + Math.abs(hora)+"h")

// } else{
//     alert("a duração da partida foi: " + hora+"h")
    
// }


// //ex16

// let salarioFixo,horaExtraqtd,horaExtra

// salarioFixo = parseInt(prompt("digite seu salario :"))
// horaExtraqtd = parseInt(prompt("digite a quantidade de horas extras :"))

// salarioHora = salarioFixo / 160
// alert("valor por hora de trabalho: " + salarioHora)
// horaExtra = salarioHora / 100 * 50
// horaExtra = horaExtra + salarioHora 
// alert("valor da hora Extra: " + horaExtra)
// horaExtra = horaExtra * horaExtraqtd

//  salarioTotal = salarioFixo + horaExtra

//  alert("total a receber: " + salarioTotal)


// ex 17

// let salarioFixo,comissao,totalVendas,salarioTotal

// salarioFixo = parseInt(prompt("digite seu salario :"))
// totalVendas = parseInt(prompt("qual o valor vendido esse mes :"))


// if(totalVendas > 1500){
// comissao =  totalVendas / 100 * 5
// salarioTotal = salarioFixo + comissao
// alert("salario a receber: " + salarioTotal + "R$")
// } else{
//  comissao =  totalVendas / 100 * 3
//  salarioTotal = salarioFixo + comissao
//  alert("salario a receber: " + salarioTotal + "R$")

// }

// ex 18

// let saldo,debito,credito,conta,saldoAtual


// conta = prompt("digite o numero da sua  conta")
// saldo = parseInt(prompt("digite o seu saldo"))
// debito = parseInt(prompt("digite o seu debito"))
// credito = parseInt(prompt("digite o seu credito"))

// saldoAtual = saldo - debito + credito

// if(saldoAtual >= 0){
//     alert("seu saldo e de: " + saldoAtual+"R$" + "e esta positivo")
// } else{
//     alert("seu saldo e de: " + saldoAtual+"R$" + "e esta negativo")
// }

// ex 19  um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
//     média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
//     a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
//     compra'.

// let quantidadeMaxima,quantidadeEstoque,quantidadeMinima,quantidadeMedia

// quantidadeEstoque = parseInt(prompt("digite a quantidade atual em estoque"))
// quantidadeMinima = parseInt(prompt("digite a quantidade minima do estoque"))
// quantidadeMaxima = parseInt(prompt("digite a quantidade maxima do estoque"))

// quantidadeMedia = (quantidadeMaxima + quantidadeMinima) /2

// if(quantidadeMedia > quantidadeEstoque){

//     alert("EFetuar Compra ")
// } else {
//     alert("Nao efetuar compra")
// }







//ex 20 ) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

// let valor1,valor2,valor3,valor

// valor1 = parseInt(prompt("digite um valor:"))
// valor2 = parseInt(prompt("digite um valor:"))
// valor3 = parseInt(prompt("digite um valor:"))

// if(valor1 == valor2 && valor1 == valor3 && valor2 == valor3){
//     alert("nao sao permitidos valores iguais")
// }
// else{
// switch (valor1 > 0){
    
   
//     case valor1 > valor2 && valor1 > valor3:

//         alert(valor1)

//        break

//     case valor2 > valor1 && valor2 > valor3:

//         alert(valor2)

//        break

//     case valor3 > valor2 && valor3 > valor1:

//         alert(valor3)

//        break

//     default:

//     }}


//ex20 Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
// maiores.

// let valor1,valor2,valor3,valor

// valor1 = parseInt(prompt("digite um valor:"))
// valor2 = parseInt(prompt("digite um valor:"))
// valor3 = parseInt(prompt("digite um valor:"))

// if(valor1 == valor2 && valor1 == valor3 && valor2 == valor3){
//     alert("nao sao permitidos valores iguais")
// }
// else{
// switch (valor1 > 0){
    
   
//     case valor1 > valor2 && valor3 > valor2:
//          valor = valor1 + valor3
//         alert(valor)

//        break

//     case valor2 > valor1 && valor3 > valor1:
//         valor = valor2 + valor3
//         alert(valor)

//        break

//     case valor1 > valor3 && valor2 > valor3:
//         valor = valor1 + valor2
//         alert(valor)

//        break

//     default:

//     }}





//ex 21 Ler um valor e escrever se é positivo, negativo ou zero


// let valor1

// valor1 = parseInt(prompt("digite um valor:"))

//   if(valor1 > 0){
//     alert("valor positivo")
//   }
//     if(valor1 < 0){
 
//     alert("valor negativo")
// }         
//         if(valor1 == 0){
//             alert("valor igual a 0")
//         }



// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
// dos outros 2 lados.

// let valor1,valor2,valor3,valor

// valor1 = parseInt(prompt("digite um valor:"))
// valor2 = parseInt(prompt("digite um valor:"))
// valor3 = parseInt(prompt("digite um valor:"))


// switch (valor1 > 0){
    
   
//         case valor1 > valor2 + valor3:
             
//         alert("nao e um triangulo")
    
//            break
    
//         case valor2 > valor1 + valor3:
          
//         alert("nao e um triangulo")
    
//            break
    
//         case valor3 > valor1 + valor2:
            
//         alert("nao e um triangulo")
    
//            break
    
//         default:
//             alert(" e um triangulo")
    
//         }


// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE
    
  
// let time1,time2,time1Gols,time2Gols,placar

// time1 = prompt("digite o nome do time 1")
// time2 = prompt("digite o nome do time 2")
// time1Gols = parseInt(prompt("digite a quantidade de gol do time 1"))
// time2Gols = parseInt(prompt("digite a quantidade de gol do time 2"))


// if(time1Gols == time2Gols){
//     alert(time1 + " / " + time1Gols + " x " + time2Gols + " / " +  time2 + " Resultado do jogo: empate" )
// } else{
//     if(time1Gols > time2Gols){
//         alert(time1 + " / " + time1Gols + " x " + time2Gols + " / " +  time2 + " Resultado do jogo: vitoria " + time1 )
//     }else{
//         if(time2Gols > time1Gols){
//             alert(time1 + " / " + time1Gols + " x " + time2Gols + " / " +  time2 + " Resultado do jogo: vitoria " + time2 )
       
//     }
// }}


// Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro


// let valor1,valor2

// valor1 = parseInt(prompt("digite um valor:"))
// valor2 = parseInt(prompt("digite um valor:"))


// switch (valor1 > 0 && valor2 > 0){
    
   
//     case valor1 > valor2:
         
//         alert("Primeiro é maior")

//        break

//     case valor2 > valor1:
        
//         alert("Segundo maior")

//        break

   
//     default:
//         alert("valores iguais")

//     }


// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
//     seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
//     que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.


// let tipo,litros,calculo,a,g

// tipo = prompt("digite A para álcool e  G para gasolina")
// litros = parseInt(prompt("digite a quantidade de litros"))
// tipo = tipo.toLowerCase()

// a = 2.90
// g = 3.30

// switch(tipo){

//     case "g":
//      if(litros > 20){
//        calculo = g * litros
//        desconto = calculo /100 * 6
//        valoPagar = calculo - desconto
//        alert("valor total a pagar: " + valoPagar)
//      }else{
//        calculo = g * litros
//        desconto = calculo /100 * 4
//        valoPagar = calculo - desconto
//        alert("valor total a pagar: " + valoPagar)
//      }
       
//     break

//     case "a":
//         if(litros > 20){
//             calculo = a * litros
//             desconto = calculo /100 * 5
//             valoPagar = calculo - desconto
//             alert("valor total a pagar: " + valoPagar)
//           }else{
//             calculo = a * litros
//             desconto = calculo /100 * 3
//             valoPagar = calculo - desconto
//             alert("valor total a pagar: " + valoPagar)
//           }   

//     break

//     default:
//         alert("valor nao e valido")
// }


// Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//     dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//     das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//     novo com a mulher mais velha.

// let idade1H, idade2H ,idade1M ,idade2M,calculoM,calculoH,idadeMaiorH,idadeMaiorM,idadeMenorM,idadeMenorH

// idade1H = parseInt(prompt("digite sua idade"))
// idade2H = parseInt(prompt("digite sua idade"))
// idade1M = parseInt(prompt("digite sua idade"))
// idade2M = parseInt(prompt("digite sua idade"))


// if(idade1H == idade2H || idade1M == idade2M){
//     alert("idades iguais")
// } else{
    
//  switch(idade1M > 0){

//     case idade1M > idade2M:
//         idadeMaiorM = idade1M
//         idadeMenorM = idade2M
//     break

//     case idade2M > idade1M:
//     idadeMaiorM = idade2M
//     idadeMenorM = idade1M
//     break

//     default:

//  }


//  switch(idade1H > 0){

//     case idade1H > idade2H:
//         idadeMaiorH = idade1H
//         idadeMenorH = idade2H
//     break

//     case idade2H > idade1H:
//     idadeMaiorH = idade2H
//     idadeMenorH = idade1H

//     break

//     default:

//  }

//   calculoM = idadeMenorH + idadeMaiorM
//   calculoH = idadeMenorM + idadeMaiorH
   
//   alert("soma das idades do homem mais velho com a mulher mais nova: " + calculoH + " produto das idades do homem mais  novo com a mulher mais velha: " + calculoM)

// }


// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.


// let  kgMorangos,kgmacas,calculoMorangos,calculoMacas,valorTotal,kgTotal,desconto

// kgmacas  = parseInt(prompt("digite kg de maças"))
// kgMorangos  = parseInt(prompt("digite kg de Morangos"))


// switch(kgMorangos > 0){

//     case kgMorangos > 5:

//     calculoMorangos = 2.20 * kgMorangos
        
//     break

//     case kgMorangos <= 5:
//         calculoMorangos = 2.50 * kgMorangos

//     break
// }

// switch(kgmacas > 0){

//     case kgmacas > 5:

//     calculoMacas = 1.50 * kgmacas
        
//     break

//     case kgmacas <= 5:
//         calculoMacas = 1.80 * kgmacas

//     break
// }


// kgTotal = kgMorangos + kgmacas
// valorTotal = calculoMorangos + calculoMacas

// if(kgTotal >= 20 || valorTotal > 25){
//     desconto = valorTotal /100 * 10
//     valorTotal = valorTotal - desconto
//     alert("valor a pagar: " + valorTotal)
// } else{
//      alert( "valor a pagar: " + valorTotal)
// }




// Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
// diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
// esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
// senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.


// let codUsuario,senha

// codUsuario = parseInt(prompt("digite o codigo de usuario"))


// if(codUsuario == 1234 ){
//     alert("acesso permitido")
//     senha = parseInt(prompt("digite sua senha"))
// if(senha == 9999){
//     alert("acesso permitido bem vindo!")
// } else{
//     alert("senha incorreta")
// }
// } else{
//     alert("acesso negado")
// }



// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
// a pagar (total a pagar = total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// let nomeProduto,quantidade,preco,total,desconto

// nomeProduto = prompt("digite o nome do produto")
// quantidade = prompt("digite a quantidade")
// preco = prompt("digite o preco do produto")

// total = quantidade * preco

// switch(quantidade > 0){

//     case quantidade <= 5:
//       desconto = total /100 * 2
//       total = total - desconto
//       alert("valor a pagar: " + total)
//     break

//     case quantidade > 5 && quantidade <= 10:
//     desconto = total /100 * 3
//     total = total - desconto
//     alert("valor a pagar: " + total)

//     break

//     case quantidade > 10:
//         desconto = total /100 * 5
//         total = total - desconto
//         alert("valor a pagar: " + total)

//     break
//     default:
//         alert("invalido")
// }



// Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
// N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = n1 + n2 * 2 +n3 *3 +media dos exercicios /7

// let n1,n2,n3,mediaExercicios,mediaAproveitamento

// n1 = parseInt(prompt("digite a nota"))
// n2 = parseInt(prompt("digite a nota"))
// n3 = parseInt(prompt("digite a nota"))
// mediaExercicios = parseInt(prompt("digite a nota"))

// mediaAproveitamento = ((n1 + n2) * 2 + n3 * 3 + mediaExercicios) /7

// switch(mediaAproveitamento >= 0){

//     case mediaAproveitamento >= 6 && mediaAproveitamento <= 7.5:
//         alert("media igual : C")
//     break

//     case mediaAproveitamento >= 7.5 && mediaAproveitamento < 9:
//         alert("media igual : B")
//     break

//     case mediaAproveitamento >= 9 :
//         alert("media igual : A")
//     break

//     case mediaAproveitamento < 6 :
//         alert("media igual : D")
//     break

//     default:
//         alert("nota invalida")

// }




// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
// estar em condições, um dos seguintes requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.




// let anoNascimento,codigoFuncionario,inicioNaEmpresa,idade,tempoEmpresa



// codigoFuncionario  = parseInt(prompt("digite seu codigo"))
// anoNascimento =  parseInt(prompt("digite seu ano de nascimento"))
// inicioNaEmpresa = parseInt(prompt("digite seu ano de inicio na empresa"))
// idade = 2023 - anoNascimento
// tempoEmpresa = 2023 - inicioNaEmpresa
// if(idade >= 65 || tempoEmpresa >= 30 || idade >= 60 && tempoEmpresa >= 25){
//     alert("requerer aponsentadoria")
// }else{
//     alert("nao requerer aposentadoria")
// }



// Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
// um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
// da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).

// let valor1,valor2

// valor1 = parseInt(prompt("digite um valor"))

// do{
// valor2 = parseInt(prompt("digite um valor"))

// } while( valor2 == 0)

// divisao = valor1 / valor2
// alert(divisao)




// Reescreva o exercício anterior utilizando a estrutura ENQUANTO


// let valor1,valor2

// valor1 = parseInt(prompt("digite um valor"))
// valor2 = parseInt(prompt("digite um valor"))
// while (valor2 == 0){

//     valor2 = parseInt(prompt("digite um valor"))
// } 

// divisao = valor1 / valor2
// alert(divisao)



// Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor
// informado seja ZERO

// let valor1,valor2

// valor1 = parseInt(prompt("digite um valor"))

// do{
// alert("valor invalido")
// valor2 = parseInt(prompt("digite um valor"))

// } while( valor2 == 0)

// divisao = valor1 / valor2
// alert(divisao)


// Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [45] caso o segundo valor
// informado seja ZERO

// let valor1,valor2

// valor1 = parseInt(prompt("digite um valor"))
// valor2 = parseInt(prompt("digite um valor"))
// while (valor2 == 0){

//     valor2 = parseInt(prompt("digite um valor"))
//     alert("valor invalido")
// } 

// divisao = valor1 / valor2
// alert(divisao)


// Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
// média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada
// nota.

// let nota1,nota2,media

// nota1 = parseInt(prompt("digite a primeira nota"))

// if(nota1 >= 0 && nota1 <= 10){
//     nota2 = parseInt(prompt("digite a segunda nota"))
//     if(nota2 >= 0 && nota2 <= 10){
//         media = (nota1 + nota2)/2
//         alert(media)
// }else{
//     alert("nota invalida")
// }}else{
//         alert("nota invalida")
// }




// Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. Se for
// respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.


// let nota1,nota2,media,continuar

// do{
// nota1 = parseInt(prompt("digite a primeira nota"))

// if(nota1 >= 0 && nota1 <= 10){
//     nota2 = parseInt(prompt("digite a segunda nota"))
//     if(nota2 >= 0 && nota2 <= 10){
//         media = (nota1 + nota2)/2
//         alert(media)
//         continuar = prompt("digite S para continuar e N para encerrar")

// }else{
//     alert("nota invalida")
// }}else{
//         alert("nota invalida")
// } } while(continuar == "S")




// Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
// crescente

// let numero
// numero = 0
// while(numero < 10){
//     numero = numero + 1
//     alert(numero)
// }


// Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
// decrescente.

// let numero
// numero = 11
// while(numero > 0){
//     numero = numero - 1
//     alert(numero)
// }



// Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

// let numero
// numero = 100

// while(numero < 110){
//     numero = numero + 1
//     alert(numero)
// }




// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
// que o N será sempre maior que ZERO



// let numero,contadora

// numero = parseInt(prompt("digite um numero inteiro"))
// if(numero > 0){
// contadora = parseInt(0)
// while(contadora < numero){
//     contadora = contadora + 1
//     alert(contadora)
   
// }}else {alert("numero invalido")}




// Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor
// informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.


// let numero,contadora


// do{
//     numero = parseInt(prompt("digite um numero inteiro"))
// }while(numero <= 0)

// contadora = parseInt(0)
// while(contadora < numero){
//     contadora = contadora + 1
//     alert(contadora)
   
// }


// Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10).


// let numero,contadora,tabuada
// numero = 8
// contadora = 0


// while(contadora < 10){
//     contadora = contadora + 1
//     tabuada = numero * contadora
//     alert( numero + " x " + contadora + " = " + tabuada)
// }




// Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor
// lido



// let numero,contadora,tabuada


// numero = parseInt(prompt("digite um numero"))
// contadora = 0



// while(contadora < 10){
//     contadora = contadora + 1
//     tabuada = numero * contadora
//     alert( numero + " x " + contadora + " = " + tabuada)
// }





// Reescreva o exercício 50 utilizando a estrutura REPITA e um CONTADOR


// let numero
// numero = 0
// do{
//     numero = numero + 1
//     alert(numero)
// }while(numero < 10)





// Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.


// let numero, contadora, negativos

// negativos = 0
// contadora = 0

// while(contadora < 10){
//     numero = parseInt(prompt("digite um numero"))
//     contadora = contadora + 1
//     if(numero < 0 ){
//         negativos = negativos + 1
//     }
    
   
// }

// alert(negativos)



// Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os
//     valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.


// let numero, contadora, negativos

// negativos = 0
// contadora = 0

// while(contadora < 10){
//     numero = parseInt(prompt("digite um numero"))
//     contadora = contadora + 1
//     if(numero >= 10 && numero <= 20 ){
//         negativos = negativos + 1
//     }
    
   
// }

// alert(negativos)




// Ler 10 valores, calcular e escrever a média aritmética desses valores lidos

// let numero, contadora, media,guarda


// contadora = 0
// guarda = 0

// while(contadora < 10){
//     numero = parseInt(prompt("digite um numero"))
//     contadora = contadora + 1
//     numero = guarda + numero
//     guarda = numero 
 
   
// }

// guarda = guarda / 10

// alert(guarda)




// Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
// escrever a média aritmética dessas notas lida



// let numero, contadora, media,guarda,alunos,nota1,nota2,nome

// alunos = parseInt(prompt("digite a quantidade de alunos"))
// contadora = 0
// guarda = 0

// while(contadora < alunos){
//     nome = prompt("digite o nome do aluno")
//     nota1 = parseInt(prompt("digite um numero"))
//     nota2 = parseInt(prompt("digite um numero"))
//     media = (nota1 + nota2) / 2
//     alert("nome do aluno: " + nome + " media do aluno " + media)
//    contadora = contadora + 1

// }




// Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10
// números lidos.



// let numero, contadora, media,guarda


// contadora = 0
// guarda = 0

// while(contadora < 10){
//     numero = parseInt(prompt("digite um numero"))
//     contadora = contadora + 1
//     numero = guarda + numero
//     guarda = numero 
 
   
// }


// alert(guarda)




// Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem
// ser somados. Escreva o valor final da soma efetuada.



// let numero, contadora, media,guarda


// contadora = 0
// guarda = 0

// while(contadora < 10){
//     numero = parseInt(prompt("digite um numero"))
//     contadora = contadora + 1
//     if(numero < 40){
//     numero = guarda + numero
//     guarda = numero }
 
   
// }


// alert(guarda)



