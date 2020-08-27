const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  if (!context.instanceIdToken.admin) {
    return { error: "Only admins cnad add other admins" };
  }

  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return { message: `success ${data.email} has been made an admin` };
    })
    .catch((err) => {
      return err;
    });
});
