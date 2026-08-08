import { createClient } from
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Your Supabase project details
const SUPABASE_URL = 'https://ffjrvdwukljlazasmofo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_1ZVgl0LiDFOoNsm_vm7paQ_Qdg23VNy';

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function getStudents() {

    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) {
        console.error(error);
        document.getElementById('users').innerHTML =
            'Error loading users.';
        return;
    }

    console.log(data);

    // Display the data
    const container = document.getElementById('users');

    data.forEach(user => {
        const p = document.createElement('p');

        p.textContent =
            `${user.id} - ${user.name} - ${user.email}`;

        container.appendChild(p);
    });
}

getStudents();