function makeRequest(location) {
  return new Promise((resolve,reject) => {
    console.log(`Making request to ${location}`)
    if (location === "Windows") {
      resolve ('Welcome windows 10')
    } else {
      reject ("We can only install windows");

    }
      })
}
   function processRequest(response) {
       return new Promise((resolve,reject) => {
         console.log("Processing response");
         resolve(`Extra information + ${response}`)
       })
     }
/*
   makeRequest("Facebook").then(response => {
     console.log('Response Received')
     return processRequest(response)
   }).then(processedResponse =>{
     console.log(processedResponse)
   }).catch(err => {
     console.log(err);
   })
*/

   async function doWork () {
     try {
   const response = await makeRequest('Windows')
   console.log('Response Received')
    const processedResponse = await processRequest(response)
   console.log(processedResponse)
 } catch (err) {
   console.log(err);
 }
 }
 doWork()
