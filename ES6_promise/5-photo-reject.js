export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => reject(new Error(`${fileName} can't be processed`)));
}
