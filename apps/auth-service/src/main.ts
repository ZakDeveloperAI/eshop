import { serve } from './../../../node_modules/@types/swagger-ui-express/index.d';
import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API'});
});

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', (err)=>{
    console.error('Server error:', err);
});
