var name = document.getElementById('name')
var Sname = document.getElementById('SName')
var email = document.getElementById('email-input')
var tel = document.getElementById('fixo')
var cell = document.getElementById('cell')
var area = document.getElementById('area-int')
var mensagem = document.getElementById('mensagem')
var curriculum = document.getElementById('arqCm')

function Enviar(){
    window.alert('O seu nome é ' + name + ' ' + Sname + ', e possui o email: ' + email + ', e o telefone: ' + tel + ', celular: ' + cell + '. Possui o interesse na área de: ' + area + ', estás informaçôes está correta')
}