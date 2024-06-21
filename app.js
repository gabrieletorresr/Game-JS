alert('Boas vindas ao jogo do número secreto! ');
let numberMax = 5000;
let secretNumber = parseInt(Math.random() * numberMax + 1);
let kick;
let attempts = 1;

// enquanto chute não for igual ao n.s
while (kick != secretNumber){
   kick = prompt(`Escolha um número entre 1 e ${numberMax}`);
    if (kick == secretNumber) {
        break;

    } else {
        if (kick > secretNumber ){
            alert(`O número secreto é menor que ${kick}`);
        } else {
            alert(`O número secreto é maior que ${kick}`);
        }
        attempts++
    }
}
let tentativeWord = attempts > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto (${secretNumber}) com (${attempts}) ${tentativeWord}`);