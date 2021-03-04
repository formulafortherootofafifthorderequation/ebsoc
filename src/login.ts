import axios from 'axios';
import path from './path.json';

export async function login(id: string, password: string) {
    let url: string = "https://" + path.host + path.login.login;
    let req = await axios({
        method: 'POST',
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36"
        },
        data: {
            memberId: id,
            memberPassword: password
        }
    });
    return req.data;
}