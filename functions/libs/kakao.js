const functions = require("firebase-functions");

exports.getCustomToken = functions.https.onCall((data, _) => {
  // 커스텀 토큰 가져오기
});

exports.getGeoCode = functions.https.onCall((data, _) => {
  // 좌표 불러오기
});
