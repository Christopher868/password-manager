import { supabase } from './supabase.js'

// Logs user into an account
export async function login(email, password, loginStatus){
    loginStatus.textContent ="Logging in..."

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    // handling errors
    if(error) {
        loginStatus.textContent = `Error: Invalid login credentials`
        console.log(error)
        loginStatus.classList.remove('text-black');
        loginStatus.classList.add('text-red-400');
        return false
    } else {
        loginStatus.textContent = `Login Successful!`
        loginStatus.classList.remove('text-black');
        loginStatus.classList.add('text-green-400');
        return true
    }

}

// Sends request to backend to verify token returns user data
export async function fetchData(loginBtn, formContainer){
    const { data: { session } } = await supabase.auth.getSession()

    if(!session){
        console.error('User is not logged in')
        return false
    } else {
        formContainer.classList.add('hidden')
        loginBtn.textContent = 'Account'
    }

    // Checking to make sure session key is valid
    const response = await fetch('http://localhost:5000/api/verify-token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`
        }
    })

    const data = await response.json()
    return data.id;

}