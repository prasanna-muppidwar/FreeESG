// lib/useAuth.ts
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const useAuth = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user || null);
        };

        checkUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return user;
};

export default useAuth;