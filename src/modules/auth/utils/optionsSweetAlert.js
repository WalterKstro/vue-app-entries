const optionsShared = {
    showConfirmButton : false,
    timer : 2000
}
export const registered = {
    title : 'Registrado!',
    text : 'Tu cuenta ha sido creada con éxito.',
    icon : 'success',
    ...optionsShared
}

export const invalidRegistered = {
    title : 'Error!',
    text : 'El usuario ya existe.',
    icon : 'error',
    ...optionsShared
}

export const invalidLogin = {
    title : 'Error!',
    text : 'Usuario o contraseña incorrectos.',
    icon : 'error',
    ...optionsShared
}

export const validLogin = {
    title : 'Bienvenido!',
    text : 'Iniciaste sesión con éxito.',
    icon : 'success',
    ...optionsShared
}