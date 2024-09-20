import { supabase } from "@/lib/supabaseClient";


const checkUserSession = async () => {
    console.log("Checking user session...");
    try {
      const { data: { session } = {} } = await supabase.auth.getSession();
  
      if (session) {
        console.log("Session found:", session);
        const { user } = session;
  
        if (user) {
          console.log("User found:", user);
          const { data, error } = await supabase
            .from("user")
            .select("*")
            .eq("user_id", user.id)
            .single();
  
          if (error) {
            console.log("No existing user found, creating new user...");
            const {
              email,
              user_metadata: { name },
              id: user_id,
            } = user;
  
            const [first_name, last_name] = name.split(" ");
  
            const { error: insertError } = await supabase
              .from("user")
              .insert([{ first_name, last_name, email, user_id }]);
  
            if (insertError) {
              console.error("Error inserting user data:", insertError);
            } else {
              console.log("User data inserted successfully");
            }
          } else {
            console.log("Existing user found:", data);
            return data.user_id;
          }
        }
      } else {
        console.log("No session found");
      }
    } catch (error) {
      console.error("An error occurred while checking the user session:", error);
    }
  };

export default checkUserSession;
  