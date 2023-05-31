var app = app || {};

app.GraphView = Backbone.View.extend({
    el: '#graph',

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        var data = this.model.get('data');

        // Use a charting library of your choice (e.g., Chart.js) to render the bar graph
        // You will need to include the necessary library and configuration code

        // Example using Chart.js:
        var ctx = this.$el.get(0).getContext('2d');
        if (this.chart) {
            // If a chart instance already exists, destroy it before rendering a new one
            this.chart.destroy();
        }
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Numbers',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    borderRadius: 40
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});