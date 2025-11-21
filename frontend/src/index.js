import { changeArrowDirection, toggleClasses } from "./functions"
import { login, fetchData } from "./authorization"
import { fetchAccounts } from "./fetch-accounts"

const menuCloseBtn = document.querySelector('#menu-close-btn')
const menuBtn = document.querySelector('#menu-btn')
const collapsingMenu = document.querySelector('#collapsing-menu')
const recentAccounts = document.querySelector('#recent-accounts')
const recentAccountsBtn = document.querySelector('#recent-accounts-btn')
const searchAccounts = document.querySelector('#search-accounts')
const accountsBtn = document.querySelector('#accounts-btn')
const accountsContainer = document.querySelector('#accounts-container')
const formContainer = document.querySelector('#form-container')
const formBtn = document.querySelector('#form-btn')
const form = document.querySelector('#form')
const formStatus = document.querySelector('#form-status')
const accounts = document.querySelectorAll('.account')
const accountsList = document.querySelector('#accounts-list')

// Fetches user's data if they are logged in and displays logged in user's accounts
async function checkForUser() {
    const response = await fetchData(formBtn, formContainer);
    if(response !== false){
        await fetchAccounts(response, accountsList)
    }
}

checkForUser();

// login form event listener
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const result = await login(email, password, formStatus)
})


document.addEventListener('click', (e) => {
    console.log(e.target)
    // opens and closes side menu
    if(e.target.closest('ul') !== collapsingMenu && e.target.closest('svg') !== menuBtn || e.target.closest('svg') === menuCloseBtn || e.target.closest('svg') === menuBtn && collapsingMenu.classList.contains('w-40')){
       collapsingMenu.classList.replace('w-40', 'w-0') 
    } else if(e.target.closest('svg') === menuBtn){
        collapsingMenu.classList.replace('w-0', 'w-40')
    }  
    
    
    // Opens and closes recent accounts and accounts section. Also changes arrow direction
    if(e.target.closest('h3') === recentAccountsBtn){
        toggleClasses(recentAccounts, ['h-0', 'h-100', 'mt-3'])
        changeArrowDirection(recentAccountsBtn, 'Most Recent Accounts');
    } 

    if(e.target.closest('h3') === accountsBtn){
        toggleClasses(accountsContainer, ['h-0', 'h-100'])
        changeArrowDirection(accountsBtn, 'Accounts');
    }

    // Opens and closes login form
    if(e.target.closest('div') !== formContainer && !formContainer.classList.contains('hidden') ){
        formContainer.classList.add('hidden')
    } else if (e.target.closest('li') === formBtn && e.target.closest('div') !== formContainer) {
        formContainer.classList.toggle('hidden')
    }
})


// Opens recent accounts and accounts if viewport is above a certain width on refresh
if(window.innerWidth >= 1433){
        recentAccounts.classList.replace('h-0', 'h-100');
        recentAccounts.classList.add('mt-3');

        accountsContainer.classList.replace('h-0', 'h-100');
    }


window.addEventListener('resize', () => {

    // Collapses side menu at sm breakpoint
    if(window.innerWidth >= 640){
        collapsingMenu.classList.replace('w-40', 'w-0');
    }

    // auto opens recent accounts and accounts at certain breakpoint
    if(window.innerWidth >= 1433){
        recentAccounts.classList.replace('h-0', 'h-100');
        recentAccounts.classList.add('mt-3');

        accountsContainer.classList.replace('h-0', 'h-100');
    }
})

// Uses search bar to filter accounts
searchAccounts.addEventListener('input', (e) => {
    accounts.forEach(account => {
        if(!account.innerText.toLowerCase().includes(searchAccounts.value.toLowerCase())){
            account.classList.add('hidden')
        } else {
            account.classList.remove('hidden')
        }
    })
})



