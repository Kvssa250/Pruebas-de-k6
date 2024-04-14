import http from 'k6/http';
import { group, check } from 'k6';

export default function () {
    group('Crear Nuevo Post', function () {
        const payload = JSON.stringify({
            title: 'Nuevo Post',
            body: 'Contenido del nuevo post',
            userId: 1
        });

        const params = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = http.post('https://jsonplaceholder.typicode.com/posts', payload, params);

        check(response, {
            'Creación de Post exitosa': (res) => res.status === 201
        });
    });
}
