
const firebaseConfig = {
    apiKey: "AIzaSyCtCodAgaTesfemfCH40vKUnrvIa-QpOYI",
    authDomain: "daagina-64987.firebaseapp.com",
    projectId: "daagina-64987",
    storageBucket: "daagina-64987.appspot.com",
    messagingSenderId: "340591992072",
    appId: "1:340591992072:web:fd49bf8159957bb00c60bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

async function getData() {
    data = await db.collection("products").get()
    data.docs.map(doc =>{
        console.log(doc.id)
        console.log(doc.data())
    })
}
async function getProducts(type) {
    data = await db.collection("products").doc(type).get()
    return (data.data())
}
