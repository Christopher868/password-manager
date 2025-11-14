export function changeArrowDirection(btn, header){
     if(btn.innerHTML === `${header} <i class="fa fa-angle-down"></i>`){
            btn.innerHTML = `${header} <i class="fa fa-angle-up"></i>`;
        } else {
            btn.innerHTML = `${header} <i class="fa fa-angle-down"></i>`;
        }
}

export function toggleClasses(element, payloads){
    payloads.forEach((payload) => {
        element.classList.toggle(payload)
    });
} 
