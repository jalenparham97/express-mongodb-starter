import express from 'express';
import cors from 'cors';
import { cartRouter } from './routes/cart.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/cart-items', cartRouter);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
