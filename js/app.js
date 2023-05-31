var app = app || {};

$(function() {
    var books = [
        { coverImage: './images/icons8-imac-50.png', title: 'MacOS', author: 'Last Sign: Active right now', keywords: 'Protected' },
        { coverImage: './images/icons8-phone-50.png', title: 'iOS', author: 'Last Sign: Active right now', keywords: 'Protected' },
        { coverImage: './images/icons8-phone-50.png', title: 'Android', author: 'Last Sign: Active right now', keywords: 'Issue' },
    ];

    new app.LibraryView(books);

    // Check if there are issues detected
    var hasIssues = books.some(function(book) {
        return book.keywords === 'Issue';
    });

    // Create the banner element
    if (hasIssues) {
        var banner = document.createElement('div');
        banner.classList.add('banner', 'col-12');

        // Create an icon element
        var image = document.createElement('img');
        image.src = './images/icons8-shield-50.png';

        // Create a parent div element
        var textContainer = document.createElement('div');
        textContainer.classList.add('d-flex', 'flex-column');

        // Create a text element
        var text = document.createElement('span');
        text.textContent = 'Issue Detected';

        // Create a subText element
        var subText = document.createElement('span');
        subText.textContent = 'Solve the issue to get full protection';

        // Append the spans to the parent div
        textContainer.appendChild(text);
        textContainer.appendChild(subText);

        // Append the parent div to the banner
        banner.appendChild(textContainer);

        // Append the icon and text to the banner
        banner.appendChild(image);

        // Insert the banner into the booksHeader div
        var booksHeader = document.getElementById('booksHeader');
        booksHeader.appendChild(banner);
    }

  // Create the graph model
  var graphData = new app.GraphData();

  // Instantiate the graph view and pass the graph model to it
  var graphView = new app.GraphView({ model: graphData });

  // Fetch the graph data from the backend and update the graph model
  app.GraphService.getGraphData(function(data) {
    graphData.set('data', data);

    // Render the graph view
    graphView.render();
  });
});