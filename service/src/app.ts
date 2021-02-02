import express from 'express';
import { json } from "express";
import { NotFoundError } from "@vijay010498tickets/common";
import { errorHandler } from "@vijay010498tickets/common";
import { serviceRouter } from "./routes/service";

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(serviceRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});
app.use(errorHandler);



export { app };
