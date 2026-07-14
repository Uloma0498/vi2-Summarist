import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./init";

export async function createCheckoutSession(priceId, trialDays = 0) {
  const user = auth.currentUser;

  if (!user) {
    alert("Please sign in first.");
    return;
  }

  const docRef = await addDoc(
    collection(db, "customers", user.uid, "checkout_sessions"),
    {
      price: priceId,
      success_url: `${window.location.origin}/settings`,
      cancel_url: `${window.location.origin}/choose-plan`,
    }
  );

  onSnapshot(docRef, (snapshot) => {
    const { error, url } = snapshot.data() || {};

    if (error) {
      alert(`An error occurred: ${error.message}`);
    }

    if (url) {
      window.location.assign(url);
    }
  });
}
