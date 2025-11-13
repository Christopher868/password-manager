const menuCloseBtn = document.querySelector('#menu-close-btn')
const menuBtn = document.querySelector('#menu-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')

// event listener for opening and closes side menu
document.addEventListener('click', (e) => {
    // opens and closes menu
    if(e.target.closest('ul') !== collapsingMenu && e.target.closest('svg') !== menuBtn || e.target.closest('svg') === menuCloseBtn || e.target.closest('svg') === menuBtn && collapsingMenu.classList.contains('w-40')){
       collapsingMenu.classList.replace('w-40', 'w-0') 
    } else if(e.target.closest('svg') === menuBtn){
        collapsingMenu.classList.replace('w-0', 'w-40')
       
    }    

})


// Closes side menu after reaching sm breakpoint
window.addEventListener('resize', () => {
    if(window.innerWidth >= 640){
        collapsingMenu.classList.replace('w-40', 'w-0');
    }
})