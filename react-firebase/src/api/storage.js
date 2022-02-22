import { app } from "../services/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage(app);

export async function uploadImage(file, metadata) {
  const imageRef = ref(storage, "images/" + file.name);
  uploadBytesResumable(imageRef, file, metadata)
    .then((snapshot) => {
      console.log("Uploaded", snapshot.totalBytes, "bytes.");
      console.log("File metadata:", snapshot.metadata);
      getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
}
