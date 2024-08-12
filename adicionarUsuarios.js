let usuarios= require ('./usuarios')

function adicionarUsuarios(usuario) {
   usuario.id= usuarios.length +1;
   let jaExiste = usuarios.find(cont => cont.email === usuario.email);
if (jaExiste) {
throw new Error('Já existe um usuario com esse email');
} else { 
   usuarios.push(usuario)
   }
}
module.exports= adicionarUsuarios
