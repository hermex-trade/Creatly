import functions = require("firebase-functions");

// // Function documentation
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const loginToPlenty = functions.https.onRequest((request, response) => {
  const password = request.query.password;
  const username = request.query.username;

  if (username && password) {
    response.send("Logged in");
  }
});

export const loginToPlenty = functions.https.onRequest((request, response) => {
   const password = request.query.password;
   const username = request.query.username;
 
   if (username && password) {
     response.send("Logged in");
   }
 });
 