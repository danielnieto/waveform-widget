require("../css/styles.scss");
require("./waveform");

// with name
var waveform = new Waveform({
    svg: {
        svg90:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/ESoH-701a3bcc-0906-487a-a62b-61467a6c6063-waveform-90.svg",
        svg100:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/JGJY-701a3bcc-0906-487a-a62b-61467a6c6063-waveform-100.svg",
        svg110:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/5UzJ-701a3bcc-0906-487a-a62b-61467a6c6063-waveform-110.svg"
    },
    svgToUse: "svg100",
    name: "Funk Smooth Disco Mania"
});

waveform.render(document.querySelector("#app"));

waveform.setProgress(40);

// without name
var waveform2 = new Waveform({
    svg: {
        svg90:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/uiGi-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-90.svg",
        svg100:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/uEwz-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-100.svg",
        svg110:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/1L7w-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-110.svg"
    },
    svgToUse: "svg90",
});

waveform2.render(document.querySelector("#app"));

waveform2.setProgress(70);

// animated progress
var waveform3 = new Waveform({
    svg: {
        svg90:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/uiGi-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-90.svg",
        svg100:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/uEwz-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-100.svg",
        svg110:
            "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/1L7w-dc48d411-6f27-4e8b-8492-8de2f84f600f-waveform-110.svg"
    },
    svgToUse: "svg110",
    name: "Animated progress bar"
});

waveform3.render(document.querySelector("#app"));
var percentage = 0;

var interval = setInterval(function(){
        
    waveform3.setProgress(++percentage);

    if(percentage === 100){
        clearInterval(interval);
    }

}, 700);