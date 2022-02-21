import { app } from "../services/firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);

export async function getAllAbaStories() {
  const snapshot = await getDocs(collection(db, "abaStories"));
  return snapshot.docs.map((document) => document.data());
}

export async function getAllAbaRazzis() {
  const snapshot = await getDocs(collection(db, "abaRazzis"));
  return snapshot.docs.map((document) => document.data());
}

export function addAbaStory() {
  return;
}

export function addAbaAuthor() {
  return;
}

export function deleteAbaStory() {
  return;
}

export function deleteAbaAuthor() {
  return;
}
