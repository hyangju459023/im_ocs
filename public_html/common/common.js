window.addEventListener('DOMContentLoaded', () => {
    //headroom
    let Header = document.querySelector('header');
    let headroom = new Headroom(Header, {
        offset: 35,
        tolerance: 5,
    });
    headroom.init();

    // Mobile menu
    document.querySelector('#menu-btn').addEventListener('click', (e) => {
        const mobileMenu = e.target.closest('div#menu-btn');
        mobileMenu.classList.toggle('menu-opened');
        document.querySelector('html').classList.toggle('open');

        if (mobileMenu.classList.contains('menu-opened')) {
            document.querySelector('.ac-gn-list').style.height = `${window.innerHeight - 50}px`;
        } else {
            document.querySelector('.ac-gn-list').style.height = 'auto';
        }
    });
});
