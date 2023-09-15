import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];

  try {
    const userResult = await signUpUser(firstName, lastName);
    results.push({ status: 'fulfilled', value: userResult });
  } catch (error) {
    results.push({ status: 'rejected', value: `Error: ${error.message}` });
  }

  try {
    const photoResult = await uploadPhoto(fileName);
    results.push({ status: 'fulfilled', value: photoResult });
  } catch (error) {
    results.push({ status: 'rejected', value: `Error: ${error.message}` });
  }

  return results;
}
