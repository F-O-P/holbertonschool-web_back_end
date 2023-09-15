export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    return reject(new Error(`${fileName} can't be uploaded`));
  });
}