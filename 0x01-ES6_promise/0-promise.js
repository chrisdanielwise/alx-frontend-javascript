export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API request
    // Here, we can resolve or reject based on certain conditions
    const condition = true; // Example condition

    if (condition) {
      const response = {
        status: 200,
        body: 'photo-profile-1',
      };
      resolve(response);
    } else {
      const error = new Error('Failed to fetch response from API');
      reject(error);
    }
  });
}
