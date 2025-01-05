// Importing the required createClient function from Supabase CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'; 
import { supabaseUrl, supabaseKey } from './env.js';  // Import credentials from env.js

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle form submission for sign-up
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value; // Get the username input
    const password = document.getElementById('password').value; // Get the password input

    // Insert user data into the 'users' table directly (no Supabase Auth)
    const { data, error } = await supabase.from('users').insert([
        { username, password }  // Insert username and password into the 'users' table
    ]);

    if (error) {
        console.error('Error:', error.message);  // Log error to console for debugging
        alert('Error during sign-up!');  // Show error alert to user
    } else {
        // Redirect to profile page after successful sign-up
        window.location.href = 'profile.html';
    }
});
