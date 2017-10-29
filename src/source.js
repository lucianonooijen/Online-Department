'use strict';

$(function(){
    $('.menu__button, .menu__button--mobile, .mobile-menu-close-button').click(function(e){
        e.preventDefault();
        $('#content').toggleClass('menu-opened');
        $('.menu').toggleClass('menu--opened');
        $('.navigation').toggleClass('navigation--opened');
        $('.navigation__list li').toggleClass('navigation-li--opened');
        $('.follow-block').toggleClass('navigation-follow-block--opened');

        //Changes image source on menu buttons
        if ($('#content').hasClass('menu-opened')){
            $('.menu__button > img').attr('src', 'img/menu-open.svg');
            $('.menu__button--mobile > img').attr('src', 'img/menu-open.svg');
        } else {
            $('.menu__button > img').attr('src', 'img/menu-closed.svg');
            $('.menu__button--mobile > img').attr('src', 'img/menu-closed.svg');
        }

        //console.log('clicked');
    });
});