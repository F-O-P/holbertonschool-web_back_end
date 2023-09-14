import { uploadPhoto, createUser } from './utils';

export default function handleProfileSetup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((afterAll) => {
      console.log(`${afterAll[0].body} ${afterAll[1].firstName} ${afterAll[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
