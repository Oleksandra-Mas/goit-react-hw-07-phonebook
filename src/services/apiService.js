import axios from 'axios';

axios.defaults.baseURL = 'https://61eb12c27ec58900177cdb91.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
}
