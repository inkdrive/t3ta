// script.js
import { supabaseUrl, supabaseKey } from './env.js';

// Initialize Supabase client
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle form submission
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Call Supabase's authentication API to create a new user
    const { user, error } = await supabase.auth.signUp({
        email: username,  // Using username as email for now
        password: password
    });

    if (error) {
        console.error('Error:', error.message);
        alert('Error during sign up!');
    } else {
        // Optionally, store user data (like username) in the 'users' table if needed
        // You can add more custom data as necessary here

        // Redirect to profile page after successful signup
        window.location.href = 'profile.html';
    }
});
