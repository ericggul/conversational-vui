import { db, storage } from "utils/initializer/firebase";
import { getDoc, doc, collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default async function uploadImage({ image, text, socket }) {
  const dataRef = collection(db, "images");
  const storageRef = ref(storage, "images");
  const imageRef = await addDoc(dataRef, {
    createdAt: serverTimestamp(),
    text,
  });

  const idRef = ref(storageRef, `${imageRef.id}_image.png`);

  console.log(image);
  try {
    await uploadBytesResumable(idRef, image, {
      contentType: "image/png",
    });
  } catch (e) {
    console.log(e);
  }

  const imageUrl = await getDownloadURL(idRef);
  const parentChatRef = doc(dataRef, imageRef.id);
  await updateDoc(parentChatRef, {
    imageUrl: imageUrl,
  });

  socket.emit("screen shot");
}
