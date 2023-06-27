// import { uploadPhoto, createUser } from './utils';

// export default async function asyncUploadUser() {
//   try {
//     const [photoResponse, userResponse] = await Promise.all([
//       uploadPhoto('photo-profile-1'),
//       createUser(),
//     ]);

//     return {
//       photo: photoResponse.body,
//       user: userResponse,
//     };
//   } catch (error) {
//     return {
//       photo: null,
//       user: null,
//     };
//   }
// }

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
