import firebase from "firebase";

export async function addDocMutation(inputDoc) {
  const uid = firebase.firestore().collection("places").doc().id;

  return firebase
    .firestore()
    .collection("places")
    .doc(uid)
    .set(inputDoc)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
