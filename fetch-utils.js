const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODE5NSwiZXhwIjoxOTU1MDg0MTk1fQ.SJhLVaDw_aB73qEjmcIhyvBkxJT5jRqazFgJJFS9VQY';
const SUPABASE_URL = 'https://ftazqulflqmwusqskpxq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCandy(){ 

    const response = await client
        .from('candy')
        .select();
    return response.data;
}

export async function getDress(){
    const response = await client
        .from('dress')
        .select();
    return response.data;
}

export async function getSong(){
    const response = await client 
        .from('song')
        .select();
    return response.data;
}


export async function getMovie(){
    const response = await client
        .from('movie')
        .select();
    return response.data;
}