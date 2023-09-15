export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    return reject(`${fileName} can't be uploaded`)
  });
}