import { createServer } from 'miragejs';
import Cookies from 'js-cookie';

export default function () {
  createServer({
    routes() {
      this.namespace = 'api';

      this.post('/auth', (schema, request) => {
        const creds = JSON.parse(request.requestBody);
        Cookies.set('token', creds.response.credential, { expires: 1 });
      });
    },
  });
}
