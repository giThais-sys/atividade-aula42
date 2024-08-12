let usuarios= require ('./usuarios')
function removerUsuarios(index, ) {
let remocao= prompt ('tem certeza de que gostaria de remover esse item?' , sim/nao) {
if(remocao === 'sim') {
console.log('contato removido com sucesso!')
}else{
  console.log ('nao é possivel remover esse usuario!')

}
    index = usuarios.findIndex(usuario => usuario.id == index)

usuarios.splice(index, 1) 
console.log('usuario deletado com sucesso!')

}
}
module.exports= removerUsuarios













