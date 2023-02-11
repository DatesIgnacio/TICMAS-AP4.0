/*const rutaPerfil = fotoPerfil.src("imagenes/fotoPerfilAdulto.jpg")
const rutaPerfil2 = perfil.src("imagenes/perfil.jpg")

function cambiarFoto(){
    $(rutaPerfil).replaceWith(rutaPerfil2);
}*/

function cambiarFoto() {
    document.getElementById("fotoPerfil").src="imagenes/perfil.jpg";
}

function volverFoto() {
    document.getElementById("fotoPerfil").src="imagenes/fotoPerfilAdulto.jpg";
}