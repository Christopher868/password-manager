// Function for changing arrow direction on accounts and recent accounts
export function changeArrowDirection(btn, header){
     if(btn.innerHTML === `${header} <i class="fa fa-angle-down"></i>`){
            btn.innerHTML = `${header} <i class="fa fa-angle-up"></i>`;
        } else {
            btn.innerHTML = `${header} <i class="fa fa-angle-down"></i>`;
        }
}


// Function for toggling multiple classes at once
export function toggleClasses(element, payloads){
    payloads.forEach((payload) => {
        element.classList.toggle(payload)
    });
} 


// Function for changing form status color
export function changeStatusColor(newColor, formStatus){
    switch (newColor) {
        case 'red':
            formStatus.classList.remove('text-black')
            formStatus.classList.remove('text-green-400')
            formStatus.classList.add('text-red-400')
            break;
        case 'green':
            formStatus.classList.remove('text-black')
            formStatus.classList.remove('text-red-400')
            formStatus.classList.add('text-green-400')
            break;
        case 'black':
            formStatus.classList.remove('text-green-400')
            formStatus.classList.remove('text-red-400')
            formStatus.classList.add('text-black')
            break;
        default:
            console.log("Invalid Color for form status")
    }
}