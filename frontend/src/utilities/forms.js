export const loginForm = 
`
        <form id="form" class="p-3 flex flex-col gap-5 font-medium text-black">
        
            <input type="email" id="email" placeholder="Email Address"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <input type="password" id="password" placeholder="Password"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <button id="submit-form" type="submit" class="border border-black text-blue-400 rounded-lg max-w-40 w-full mx-auto px-6 font-semibold shadow-xs hover:shadow-md shadow-black/50">Login</button>
            <p class="text-black text-center text-shadow-none">New user? register <a id="register-btn" href="#" class="text-blue-400 hover:text-blue-800">here</a></p>

        </form>
        
`;


export const registerForm = 
`
        <form id="form" class="p-3 flex flex-col gap-5 font-medium text-black">
        
            <input type="email" id="email" placeholder="Email Address"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <input type="password" id="password1" placeholder="Password"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <input type="password" id="password2" placeholder="Re-enter Password"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <button id="submit-form" type="submit" class="border border-black text-blue-400 rounded-lg max-w-40 w-full mx-auto px-6 font-semibold shadow-xs hover:shadow-md shadow-black/50">Register</button>
            <button id="cancel-btn" type="button" class="border border-black text-blue-400 rounded-lg max-w-40 w-full mx-auto px-6 font-semibold shadow-xs hover:shadow-md shadow-black/50">Cancel</button>
            
        </form>
        
`;


export const accountForm = 
`
        <form id="form" class="p-3 flex flex-col gap-5 font-medium text-black">
        
            <input type="email" id="email" placeholder="Email Address"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <input type="password" id="password1" placeholder="Password"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <input type="password" id="password2" placeholder="Re-enter Password"
            class="focus:outline-none border border-black rounded-lg text-center shadow-black hover:shadow-xs focus:shadow-sm" required/>
            <button id="submit-form" type="submit" class="border border-black text-blue-400 rounded-lg max-w-40 w-full mx-auto px-6 font-semibold shadow-xs hover:shadow-md shadow-black/50">Save Changes</button>
            <button id="logout-btn" type="button"  class="border border-black text-blue-400 rounded-lg max-w-40 w-full mx-auto px-6 font-semibold shadow-xs hover:shadow-md shadow-black/50">Logout</button>
            
        </form>
`;