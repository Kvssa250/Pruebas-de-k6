import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const headers = {
        'Authorization': 'Bearer <token_de_autenticación>'
    };

    const response = http.get('https://jsonplaceholder.typicode.com/posts', { headers });

    check(response, {
        'Solicitud Autorizada': (res) => res.status === 200
    });
}
