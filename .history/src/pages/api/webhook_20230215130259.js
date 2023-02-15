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

const fullfillOrder = async (session) => {
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total,
      amount_shipping: session.total_details.amount_shipping,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      console.log(`success: order ${session.id} has been added to DB`)
    })
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers('stripe-signature');

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (e) {
      console.log(e.message);
      return res.status(400).send('web hook error');
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      reut
    }
  }
};
