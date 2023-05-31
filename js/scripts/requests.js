// api.js

function fetchData() {
    fetch('http://localhost:8080/api/graph-data')
      .then(response => response.json())
      .then(data => {
        // Process the received data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
  
  // Call the fetchData function or export it to be used elsewhere
  fetchData();