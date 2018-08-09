Class("NeonWidget").inherits(Widget)({
    prototype: {
        element: $("<h1>This is a Neon Widget</h1>"),
        init: function(config) {
            Widget.prototype.init.call(this, config);
            console.log("initialized");
        }
    }
});
