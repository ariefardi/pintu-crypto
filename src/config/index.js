const firebase = require('firebase')
const config = {
    storageBucket: "pintu-web.appspot.com",
    projectId: "pintu-web",
};


firebase.initializeApp(config);

const DB = firebase.firestore()
const swal = require('sweetalert')
DB.settings({
    timestampsInSnapshots: true
});
export {DB, swal}
