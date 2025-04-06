import supabase from "./supabase-client";

async function UserAuthentication(email:string, password:string){
  
  const {data, error} = await supabase.rpc('user_auth',{
    user_email_input: email,
    user_password_input: password
  });

  if(error){
    console.log("Error during user authentication", error)
    return {success: false, error}
  }

  return {success: true, count: data}
}

export default UserAuthentication;
