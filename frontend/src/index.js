const menuCloseBtn = document.querySelector('#menu-close-btn')
const menuBtn = document.querySelector('#menu-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')
const recentAccounts = document.querySelector('#recent-accounts')
const recentAccountsBtn = document.querySelector('#recent-accounts-btn')
const searchAccounts = document.querySelector('#search-accounts')
const accountsBtn = document.querySelector('#accounts-btn')
const accountsContainer = document.querySelector('#accounts-container')

const accounts = document.querySelectorAll('.account')

// Event Listener for document
document.addEventListener('click', (e) => {
    // opens and closes side menu
    if(e.target.closest('ul') !== collapsingMenu && e.target.closest('svg') !== menuBtn || e.target.closest('svg') === menuCloseBtn || e.target.closest('svg') === menuBtn && collapsingMenu.classList.contains('w-40')){
       collapsingMenu.classList.replace('w-40', 'w-0') 
    } else if(e.target.closest('svg') === menuBtn){
        collapsingMenu.classList.replace('w-0', 'w-40')
    }  
    
    
    // Opens and closes recent accounts section
    if(e.target.closest('h3') === recentAccountsBtn){
        recentAccounts.classList.toggle('h-0')
        recentAccounts.classList.toggle('mt-3')
    } 

    // Opens and closes accounts section
    if(e.target.closest('h3') === accountsBtn){
        accountsContainer.classList.toggle('h-0')
        accountsContainer.classList.toggle('p-5')
    }

})


// Closes side menu after reaching sm breakpoint
window.addEventListener('resize', () => {
    if(window.innerWidth >= 640){
        collapsingMenu.classList.replace('w-40', 'w-0');
    }
})

// Accounts filter
searchAccounts.addEventListener('input', (e) => {
    accounts.forEach(account => {
        if(!account.innerText.toLowerCase().includes(searchAccounts.value.toLowerCase())){
            account.classList.add('hidden')
        } else {
            account.classList.remove('hidden')
        }
    })
})



