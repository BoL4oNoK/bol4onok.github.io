window.onload = () => {
    const MENU = document.getElementById('main_menu');
    const BUTTONS = document.getElementById('buttons_list');
    const PORTFOLIO = document.getElementById('portfolio-list');

    /*** 1) Header ***/
    let avgHeight = 0;
    const SECTIONs = document.querySelectorAll('section');
    SECTIONs.forEach(el => {
        avgHeight += el.offsetHeight; 
    });
    let ScrollOffset = document.documentElement.clientHeight - parseInt(avgHeight / SECTIONs.length);
    ScrollOffset = (ScrollOffset < 30) ? document.querySelector('header').offsetHeight : ScrollOffset;

    document.addEventListener('scroll', event => {
        let curPos = window.scrollY + ScrollOffset;
        const elList = document.querySelectorAll('section');
        const menuList =  MENU.querySelectorAll('li');
        elList.forEach(el => {
            if ((el.offsetTop) <= curPos && (el.offsetTop + el.offsetHeight - 60) > curPos) {
                menuList.forEach(li => {
                    li.classList.remove('menu_active');
                    if (el.getAttribute('id') === li.querySelector('a').getAttribute('href').substring(1)) {
                        li.classList.add('menu_active');
                    }
                });
            }
        });
        
        if (document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
            MENU.querySelector('li.menu_active').classList.remove('menu_active');
            menuList[menuList.length - 1].classList.add('menu_active');
        }
        if (MENU.querySelector('li.menu_active') === null) {
            menuList[0].classList.add('menu_active');
        }
    });

    /*** 2) Slider.Slider ***/
    const SLIDER = document.getElementById('slider');
    let slides = document.querySelectorAll('.slide_single');
    let current = 0;
    let sliderBlocked = false;
    let sliderWidth = SLIDER.offsetWidth


    function slider_init() {
        let offset = 0;
        let slide2 = (current === 0) ? 1 : 0;
        SLIDER.innerHTML = '';
        let elem = slides[slide2].cloneNode(true);
        elem.style.left = offset*sliderWidth - sliderWidth + 'px';
        slides[current].style.left = offset*sliderWidth + 'px';
        offset += 1;
        slides[slide2].style.left = offset*sliderWidth + 'px';
        SLIDER.appendChild(elem);
        SLIDER.appendChild(slides[current]);
        SLIDER.appendChild(slides[slide2]);
    }

    function slide_left() {
        if (!sliderBlocked) {
            sliderBlocked = true;
            let slides2 = document.querySelectorAll('.slide_single');
            let offset2 = -1;
            for (let i = 0; i < slides2.length; i += 1) {
                slides2[i].style.left = offset2*sliderWidth - sliderWidth +'px';
                offset2 += 1;
            }
            current += 1;
            if (current >= slides.length) {
                current = 0;
            }
            if (current === 1) {
                document.getElementById('slider_main').classList.add('bgBlue');
            } else {
                document.getElementById('slider_main').classList.remove('bgBlue');
            }
        }   
    }

    function slide_right() {
        if (!sliderBlocked) {
            sliderBlocked = true;
            let slides2 = document.querySelectorAll('.slide_single');
            let offset2 = -1;
            for (let i = 0; i < slides2.length; i += 1) {
                slides2[i].style.left = offset2*sliderWidth + sliderWidth +'px';
                offset2 += 1;
            }
            current += 1;
            if (current >= slides.length) {
                current = 0;
            }
            if (current === 1) {
                document.getElementById('slider_main').classList.add('bgBlue');
            } else {
                document.getElementById('slider_main').classList.remove('bgBlue');
            }
        } 
    }
    SLIDER.addEventListener('transitionend', function () {
        slider_init();
        sliderBlocked = false;
    });
    document.getElementById('arrow_left').addEventListener('click', slide_right);
    document.getElementById('arrow_right').addEventListener('click', slide_left);
    slider_init();

    /*** 3) Slider.Displays ***/
    const iPhone_Vert = document.getElementById('iPhone_Vert').querySelector('img');
    iPhone_Vert.addEventListener('click', event => {
        iPhone_Vert.classList.toggle('phone-disp-off');
        event.preventDefault()
    });
    const iPhone_Hor = document.getElementById('iPhone_Hor').querySelector('img');
    iPhone_Hor.addEventListener('click', event => {
        iPhone_Hor.classList.toggle('phone-disp-off');
        event.preventDefault()
    });

    /*** 4) Portfolio.Tabs ***/
    function buttonhandler(event) {
        if (event.target.tagName === 'BUTTON' && !event.target.classList.contains('button_active')) {
            BUTTONS.querySelectorAll('button').forEach(el => {
                el.classList.remove('button_active');
            });
            
            const portfolioList = PORTFOLIO.querySelectorAll('img');
            PORTFOLIO.insertAdjacentElement('afterbegin', portfolioList[portfolioList.length - 1]);
            PORTFOLIO.querySelectorAll('img').forEach(el => {
                el.classList.remove('portfolio-selected');
            });
            const elem = event.target;
            elem.classList.add('button_active');
        }
    }

    BUTTONS.addEventListener('click', buttonhandler);

    /*** 5) Portfolio.Images ***/
    PORTFOLIO.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
            PORTFOLIO.querySelectorAll('img').forEach(el => {
                el.classList.remove('portfolio-selected');
            });
            event.target.classList.add('portfolio-selected');
        }
    });

    /*** 6) Get a Quote ***/
    const FORM = document.getElementById('contacts-form');
    FORM.addEventListener('submit',  event => {
        event.preventDefault();
        document.getElementById('pop-up-subject').innerHTML = (document.getElementById('form-input-subject').value) ? '<b>Тема:</b> ' + ( ( document.getElementById('form-input-subject').value.length > 100 ) ? document.getElementById('form-input-subject').value.substring(0, 100) + '...' : document.getElementById('form-input-subject').value ): 'Без темы';
        document.getElementById('pop-up-message').innerHTML = (document.getElementById('form-area-message').value) ? '<b>Описание:</b> ' + ( ( document.getElementById('form-area-message').value.length > 230 ) ? document.getElementById('form-area-message').value.substring(0, 230) + '...' : document.getElementById('form-area-message').value ) : 'Без описания';
        document.getElementById('pop-up_msg').classList.remove('pop-up_hidden');
        FORM.reset();
        return false;
    });

    const MODAL_BLOCK = document.getElementById('pop-up_msg');
    const MODAL_CLOSE = document.getElementById('btn-close');
    function popup_close(event) {
        if (event.target === MODAL_BLOCK || event.target === MODAL_CLOSE) {
            MODAL_BLOCK.classList.add('pop-up_hidden');
        }
    }
    MODAL_BLOCK.addEventListener('click', popup_close);
    MODAL_CLOSE.addEventListener('click', popup_close);
}