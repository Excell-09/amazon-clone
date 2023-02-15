import { buffer } from 'micro';
import * as admin from 'firebase-admin';

var serviceAccount = require('./../../../permission.json');

// secuere connection to firebase from backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNINI_SECRET;

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer.re
  }
};
