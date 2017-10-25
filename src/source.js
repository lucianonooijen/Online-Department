'use strict';

$(function(){
    $('.menu__button').click(function(e){
        e.preventDefault();
        $('#content').toggleClass('menu-opened');
        $('.navigation').toggleClass('navigation--opened');
        console.log('clicked');
    });
});