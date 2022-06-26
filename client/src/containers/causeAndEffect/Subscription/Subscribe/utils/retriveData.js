import { db } from "utils/initializer/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default async function retriveData() {
  const q = collection(db, "images");

  const querySnapShot = await getDocs(q);

  let result = [];
  querySnapShot.forEach((doc) => {
    let data = doc.data();
    result.push(data);
  });

  console.log(result);

  return result;
}
