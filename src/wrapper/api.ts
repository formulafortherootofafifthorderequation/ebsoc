import axios from 'axios';
import Path from '../path.json';
import SubPath from './subpath.json';

export async function codeList(token: string) {
    let url: string = "https://" + Path.host + SubPath.codeList;
    let req = await axios({
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN": token,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36"
        }
    });
    return req.data;
}

export async function member(token: string) {
    let url: string = "https://" + Path.host + SubPath.member;
    let req = await axios({
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN": token,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36"
        }
    });
    return req.data;
}