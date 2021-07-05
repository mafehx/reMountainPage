import firebase from "firebase";

export function allDocsListenerQuery(setter, setter2 = () => {}) {
  firebase
    .firestore()
    .collection("places")
    .onSnapshot((querySnapshot) => {
      var places = [];
      querySnapshot.forEach((doc) => {
        places.push(doc.data());
      });
      setter(places);
      setter2(places);
    });
}
