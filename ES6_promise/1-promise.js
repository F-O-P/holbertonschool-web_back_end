export default function getResponseFromAPI(boolean) {
  const promise = new Promise(((resolve, reject) => {
    if (boolean === true) {
      // resolve the promise by passing an object with 2 attributes
      resolve({ status: 200, body: 'Success' });
    }
    // reject the promise by passing an object with 1 attribute
    reject(new Error('The fake API is not working currently'));
  }));
  return promise;
}
