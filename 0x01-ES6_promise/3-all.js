const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`Body: ${photoResponse.body}`);
      console.log(`First Name: ${userResponse.firstName}`);
      console.log(`Last Name: ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
