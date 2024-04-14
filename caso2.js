import http from 'k6/http';

export default function () {
    const startTime = new Date().getTime();
    const response = http.get('https://jsonplaceholder.typicode.com/posts/1');
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;

    console.log(`Tiempo de respuesta: ${responseTime} ms`);
}
