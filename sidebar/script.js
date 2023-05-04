//scroll do menu
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectLink)
)

//expandir sidebar

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')
})
//entrar no link clicado
document.addEventListener('DOMContentLoaded', function() {
    var sidebarLinks = document.querySelectorAll('.menu-lateral a');
  
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link seja seguido imediatamente
  
        var page = this.getAttribute('href');
        window.location.href = page; // Redireciona para a página correspondente
      });
    });
  });