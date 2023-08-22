var jogador1 = 0;
var jogador2 = 1
var placar;

if(jogador1 > 0){
    console.log('jogador 1 marcou pontoa!!');
}
else if(jogador2 > 0){
    console.log(' Jogador 2 marcou ponto!!');
}
else
    console.log('ninguem marcou');

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
       console.log('Jogador 2 Ganhou!!')
      break;


}