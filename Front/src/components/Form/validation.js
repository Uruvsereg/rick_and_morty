const validations=(userData)=>{
    let errors={}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "Usuario inválido";
    }
    if(!userData.username){
        errors.username = "Nombre de usuario vacío";
    }
    if(userData.username.length>35){
        errors.username = "El nombre de usuario debe tener menos de 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener mínimo un(1) número";
    }
    if(userData.password.length<6 || userData.password.length>10){
        errors.password = "La contraseña debe contener entre seis(6) y diez(10) caracteres";
    }
    return errors;
}
export default validations;