import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const fetchSavedAppointments = async () => {
  const appointmentsRef = collection(db, "appointments");
  const resp = await getDocs(appointmentsRef);
  const appointmentsArray = resp.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return appointmentsArray;
};

export default fetchSavedAppointments;
