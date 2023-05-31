var app = app || {};

app.GraphService = {
  getGraphData: function(callback) {
    // Make an AJAX or Fetch request to your backend server
    // to retrieve the graph data from MongoDB

    // Example using Fetch API
    fetch('/api/graph-data')
      .then(response => response.json())
      .then(data => {
        // Invoke the callback function and pass the retrieved data
        callback(data);
      })
      .catch(error => {
        console.error('Error fetching graph data:', error);
      });
  }
};