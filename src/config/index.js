const firebase = require('firebase')
console.log('Berhasil add')
const config = {
    storageBucket: "pintu-landing-pages.appspot.com",
    projectId: "pintu-landing-pages",
};
firebase.initializeApp(config);

const DB = firebase.firestore()
const swal = require('sweetalert')
DB.settings({
    timestampsInSnapshots: true
});
export {DB, swal}
