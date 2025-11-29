import { supabase } from './supabase.js'
import { loginForm, accountForm, registerForm } from './forms.js'
import { changeStatusColor } from './functions.js'


// Function for handling user login
export async function login(email, password, formStatus, form, formBtn, formHeader){
    changeStatusColor('black', formStatus)
    formStatus.textContent ="Logging in..."

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    // handling errors
    if(error) {
        changeStatusColor('red', formStatus)
        formStatus.textContent = `Error: Invalid login credentials`
        console.log(error)
        
        return false
    } else {
        formStatus.textContent = `Login Successful!`
        changeStatusColor('green', formStatus)
        formBtn.textContent = "Account"
        formHeader.textContent = "Account" 
        form.innerHTML = accountForm
        return true
    }

}


// Fuction for handling logging out user
export async function logoutUser(formBtn, form, formHeader){
    const { error } = await supabase.auth.signOut();

    if(error){
        console.error('Failed to logout: ', error.message)
        alert("Failed to logout")
        return
    }

    alert('Logout Successful')
    formBtn.textContent = "Login"
    formHeader.textContent = "Login"
    form.innerHTML = loginForm

} 


// Function for handling user signup
export async function userSignUp(email, password, formStatus, formBtn, formHeader, form){
    const { data, error } = await supabase.auth.signUp({
        email:email,
        password: password,
    })
    console.log(error)
    console.log(data.user)
    if(error){
        changeStatusColor('red', formStatus)
        formStatus.textContent = error.message
        console.error('Sign-up error: ', error.message);
        return false
    }

    if(data.user) {
        alert('Registeration Successful!')
        await login(email, password, formStatus, form, formBtn, formHeader)
        return true
    }

    

}



// Sends request to backend to verify token returns user data
export async function fetchData(formBtn, form, formHeader){
    const { data: { session } } = await supabase.auth.getSession()

    if(!session){
        console.error('User is not logged in')
        form.innerHTML = loginForm
        return false
    } else {
        formBtn.textContent = "Account"
        formHeader.textContent = "Account" 
        form.innerHTML = accountForm
    }

    // Checking to make sure session key is valid
    try{
        const response = await fetch('http://localhost:5000/api/verify-token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.access_token}`
            }
        })

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status} `)
        }

        const data = await response.json()
        return data.id;

    } catch (err){
        console.error('Fetch request has failed: ',err)
        return false
    }   

}

