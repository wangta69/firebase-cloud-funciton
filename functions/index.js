const functions = require("firebase-functions");
const cors = require("cors")({origin: true});


exports.fn = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.status(200).send();
    // your function body here - use the provided req and res from cors
  });
});

// const admin = require("firebase-admin");
//
// admin.initializeApp();
// exports.kakao = require("./libs/kakao");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
