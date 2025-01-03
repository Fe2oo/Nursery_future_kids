import axios from 'axios';

const apiGateway = axios.create({
  baseURL: 'http://localhost:3000/api', // The base URL for your API Gateway
});

export default apiGateway;
