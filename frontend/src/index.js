const menuCloseBtn = document.querySelector('#menu-close-btn')
const menuBtn = document.querySelector('#menu-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')

// event listener for opening and closes side menu
document.addEventListener('click', (e) => {
    console.log(e.target)
    // opens menu
    if(e.target.closest('svg') === menuBtn){
        collapsingMenu.classList.replace('w-0', 'w-45')
    }    

    // closes menu
    if(e.target.closest('ul') !== collapsingMenu && e.target.closest('svg') !== menuBtn || e.target.closest('svg') === menuCloseBtn){
        collapsingMenu.classList.replace('w-45', 'w-0')
    }
})