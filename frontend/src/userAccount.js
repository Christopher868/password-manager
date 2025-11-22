import { supabase } from './supabase.js'
import { loginForm, accountForm, registerForm } from './forms.js'

// Logs user into an account
export async function login(email, password, formStatus, form, formBtn, formHeader){
    formStatus.textContent ="Logging in..."

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    // handling errors
    if(error) {
        formStatus.textContent = `Error: Invalid login credentials`
        console.log(error)
        formStatus.classList.remove('text-black');
        formStatus.classList.add('text-red-400');
        return false
    } else {
        formStatus.textContent = `Login Successful!`
        formStatus.classList.remove('text-black');
        formStatus.classList.add('text-green-400');
        formBtn.textContent = "Account"
        formHeader.textContent = "Account" 
        form.innerHTML = accountForm
        return true
    }

}


// logs out user
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


// Function for handing signup
export async function userSignUp(email, password){
    const { data, error } = await supabase.auth.signUp({
        email:email,
        password: password,
    })

    if(error){
        console.error('Sign-up error: ', error.message);
        return
    }

    if(data.user) {
        alert('Check your email for the confirmation link!');
    }
}