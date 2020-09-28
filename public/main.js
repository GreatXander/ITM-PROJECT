$(document).ready(()=>{
    const $header = $('header');
    const $menuButton = $('.menu__button');
    const $menu = $('.menu__container');

    // Menu Object
    function Menu(){
        let isOpen = false;
        let $actualActive = $('.home');
        
        this.handleClick = () => {
            isOpen = isOpen ? false : true;
            return isOpen;
        }
        this.changeActive = (menuOption) => {
            $actualActive.toggleClass('active');
            let $nowActive =  $(".header__ul li[name='" + menuOption + "']")
            $nowActive.toggleClass('active');
            $actualActive = $nowActive; 
        }
    }
    //Menu Instance
    let menu = new Menu();
    let menuOptions = ['home', 'us', 'offer', 'community','teachers', 'library'];
    $menuButton.click(() => {
        if(menu.handleClick()){
            $menu.animate({
                'top': $header.css('height')
            }, 'slow')
        }else{
            $menu.animate({
                'top': '-310px'
            }, 'slow')
        }
    })

    menuOptions.forEach(option => {
        $('.' + option).click(() => {
            menu.changeActive(option);
        })
    })

    const $loginForm = $('.login__form');
    $loginForm.submit(e => {
        e.preventDefault();
    })
})