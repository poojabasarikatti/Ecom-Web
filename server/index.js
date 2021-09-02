import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/routes.js';


dotenv.config();
mongoose.set('useCreateIndex', true);
const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is successfully running on PORT ${PORT}`));


app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors());
app.use('/', Routes);


DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {} ;
paytmParams[ 'MID' ] = process.env.PAYTM_MID;
paytmParams[ 'WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams[ 'CHANNEL_ID' ] = process.env.PAYTM_CHANNEL_ID;
paytmParams[ 'INDUSTRY_TYPE_ID' ] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams[ 'ORDER_ID' ] = uuid();
paytmParams[ 'CUST_ID' ] = process.env.PAYTM_CUST_ID;
paytmParams[ 'TXN_AMOUNT' ] = '100';
paytmParams[ 'CALLBACK_URL' ] = 'http://localhost:8000/callback';
paytmParams[ 'EMAIL' ] = 'poojabasarikatti004@gmail.com';
paytmParams[ 'MOBILE_NO' ] = '9448083349';