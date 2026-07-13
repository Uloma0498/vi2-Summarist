import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { db } from 

const docRef = await db
  .collection('customers')
  .doc(currentUser.uid)
  .collection('checkout_sessions')
  .add({
    price: 'price_1TsVY1GdbsGRY90HaCIewBS5',
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });
// Wait for the CheckoutSession to get attached by the extension
docRef.onSnapshot((snap) => {
  const { error, url } = snap.data();
  if (error) {
    // Show an error to your customer and
    // inspect your Cloud Function logs in the Firebase console.
    alert(`An error occured: ${error.message}`);
  }
  if (url) {
    // We have a Stripe Checkout URL, let's redirect.
    window.location.assign(url);
  }
});
