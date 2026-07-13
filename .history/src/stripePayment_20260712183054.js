import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

const db = getFirestore();

// Create the Checkout Session document
const docRef = await addDoc(
  collection(
    db,
    "customers",
    currentUser.uid,
    "checkout_sessions"
  ),
  {
    price: "price_1GqIC8HYgolSBA35zoTTN2Zl",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  }
);

// Listen for updates from the Stripe extension
const unsubscribe = onSnapshot(docRef, (snap) => {
  const data = snap.data();

  if (!data) return;

  const { error, url } = data;

  if (error) {
    alert(`An error occurred: ${error.message}`);
    return;
  }

  if (url) {
    window.location.assign(url);
  }
});

// Optionally call unsubscribe() when you no longer need the listener.