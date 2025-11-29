import { supabase } from "./supabase";

// Function fetches accounts and displays them
export async function fetchAccounts(userId, accountsList){
    
    // Gets all accounts with matching id to current user
    const { data: userAccounts, error: error} = await supabase
    .from('User_Secret_Accounts')
    .select('*')
    .eq('user_id', userId);

    // Adds accounts to accounts section of page
    userAccounts.forEach((account) => {
        accountsList.innerHTML += `<a class="shadow-black hover:shadow-md hover:text-blue-400" href="#"><li class="account border py-2 px-4 truncate">${account.site} <i class="fa fa-angle-right"></i></li><p class="hidden">${account.id}</p></a>`
    })
}