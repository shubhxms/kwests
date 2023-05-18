import { supabaseAuth } from "./supabaseClient";

const fetchData = async (session) => {
    const { user } = session;
    const { email } = user;
    
    const { data, error } = await supabaseAuth
        .from('users')
        .select()
        .eq('email', email)
    if (error) {
        throw new Error(error);
    }
    
    return data
}

export default fetchData