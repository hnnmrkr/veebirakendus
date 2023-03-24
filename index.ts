import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
import parcelmachines from "./controllers/parcelmachines";
import nordPoolPrice from "./controllers/nord-pool-price";
import payment from "./controllers/payment";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', payment);
app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);
app.use('/', parcelmachines);
app.use('/', nordPoolPrice);

app.listen(3001,() => {
    console.log(`[server]: Server is running at http://localhost:3001`);
});