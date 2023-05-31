var app = app || {};

app.GraphData = Backbone.Model.extend({
    defaults: {
        data: []  // An array to hold the problem count for each day
    },

    setData: function(numbers) {
        this.set('data', numbers);
    }
});