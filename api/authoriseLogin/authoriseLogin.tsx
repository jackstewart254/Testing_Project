import supabase from "@/utils/supabase";

const authoriseLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    return { data, error }
}

export {authoriseLogin};