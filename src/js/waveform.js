Class("Waveform").inherits(Widget)({
    ELEMENT_CLASS: 'waveform',
    prototype: {
        progress: 0,
        svgIsLoaded: false,
        init: function(config) {
            Widget.prototype.init.call(this, config);

            var waveform = this;
            var svgFile = config.svg[config.svgToUse];

            if(config.name){
                waveform.element.append(
                    '<div class="title">' + config.name + "</div>"
                );
            }
            waveform.$svgContainer = $("<div class='svg-container'></div>");
            waveform.element.append(waveform.$svgContainer);

            waveform.$svgContainer.load(svgFile, function( response, status, xhr ) {
                if (status === "success") {
                    waveform.svgIsLoaded = true;
                    waveform.$progress = waveform.$svgContainer.find(".progress");
                    waveform._updateProgressBar();
                }
            });
        },
        _updateProgressBar: function _updateProgressBar() {

            if(this.svgIsLoaded){
                this.$progress.css('width', this.progress + '%');
            }

        },
        getProgress: function getProgress() {
            return this.progress;
        },
        setProgress: function setProgress(progress) {
            this.progress = progress;
            this._updateProgressBar();
        }
    }
});
