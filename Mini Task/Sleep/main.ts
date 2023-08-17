/**
 
 * @param {number} millis - The number of milliseconds to sleep.
 * @returns {Promise<void>}
 */
async function sleep(millis: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, millis));
}

// Example usage
// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100
