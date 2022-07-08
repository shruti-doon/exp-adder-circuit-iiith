'use strict'
// Dimensions of working area
const circuitBoard = document.getElementById("circuit-board");
const sidePanels = document.getElementsByClassName("v-datalist-container");
// Distance of working area from top
const circuitBoardTop = circuitBoard.offsetTop;
// Full height of window
const windowHeight = window.innerHeight;
const width = window.innerWidth;
if (width < 1024) {
  circuitBoard.style.height = 600 + "px";
} else {
  circuitBoard.style.height = windowHeight - circuitBoardTop - 20 + "px";
}
sidePanels[0].style.height = circuitBoard.style.height;

const svg = document.querySelector(".svg");
const inputpath1 = document.querySelector("#inputpath1");
const svgns = "http://www.w3.org/2000/svg";
gsap.registerPlugin(MotionPathPlugin);

let newCircle = document.createElementNS(svgns, "circle");
gsap.set(newCircle, {
    attr: { cx: 100, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle1 = document.createElementNS(svgns, "circle");
gsap.set(newCircle1, {
    attr: { cx: 100, cy: 280, r: 15, fill: "#FF0000" }
});
let newCircle2 = document.createElementNS(svgns, "circle");
gsap.set(newCircle2, {
    attr: { cx: 100, cy: 340, r: 15, fill: "#FF0000" }
});
let newCircle3 = document.createElementNS(svgns, "circle");
gsap.set(newCircle3, {
    attr: { cx: 459, cy: 260, r: 15, fill: "#FF0000" }
});

let newCircle4 = document.createElementNS(svgns, "circle");
gsap.set(newCircle4, {
    attr: { cx: 100, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle5 = document.createElementNS(svgns, "circle");
gsap.set(newCircle5, {
    attr: { cx: 100, cy: 280, r: 15, fill: "#FF0000" }
});

let newCircle6 = document.createElementNS(svgns, "circle");
gsap.set(newCircle6, {
    attr: { cx: 459, cy: 260, r: 15, fill: "#FF0000" }
});
let newCircle7 = document.createElementNS(svgns, "circle");
gsap.set(newCircle7, {
    attr: { cx: 100, cy: 340, r: 15, fill: "#FF0000" }
});
let newCircle8 = document.createElementNS(svgns, "circle");
gsap.set(newCircle8, {
    attr: { cx: 632, cy: 460, r: 15, fill: "#FF0000" }
});
let newCircle9 = document.createElementNS(svgns, "circle");
gsap.set(newCircle9, {
    attr: { cx: 632, cy: 570, r: 15, fill: "#FF0000" }
});

let newCircle10 = document.createElementNS(svgns, "circle");
gsap.set(newCircle10, {
    attr: { cx: 610, cy: 320, r: 15, fill: "#FF0000" }
});

let newCircle11 = document.createElementNS(svgns, "circle");
gsap.set(newCircle11, {
    attr: { cx: 790, cy: 515, r: 15, fill: "#FF0000" }
});

let input1Text = document.createElementNS(svgns, "text");
let input2Text = document.createElementNS(svgns, "text");
let input3Text = document.createElementNS(svgns, "text");
let output1Text = document.createElementNS(svgns, "text");
let output2Text = document.createElementNS(svgns, "text");


input1Text.textContent = 2;
input2Text.textContent = 2;
input3Text.textContent = 2;
output1Text.textContent = 2;
output2Text.textContent = 2;
svg.appendChild(newCircle);
svg.appendChild(newCircle1);
svg.appendChild(newCircle2);
svg.appendChild(newCircle3);
svg.appendChild(newCircle4);
svg.appendChild(newCircle5);
svg.appendChild(newCircle6);
svg.appendChild(newCircle7);
svg.appendChild(newCircle8);
svg.appendChild(newCircle9);
svg.appendChild(newCircle10);
svg.appendChild(newCircle11);

gsap.set(input1Text, {
    x: 96,
    y: 244,
});
gsap.set(input2Text, {
    x: 96,
    y: 284,
});
gsap.set(input3Text, {
    x: 96,
    y: 344,
});
gsap.set(output1Text, {
    x: 840,
    y: 519,
});
gsap.set(output2Text, {
    x: 840,
    y: 324,

});

svg.appendChild(input1Text);
svg.appendChild(input2Text);
svg.appendChild(input3Text);
svg.appendChild(output1Text);
svg.appendChild(output2Text);
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

function free() {
    document.getElementById("Observations").innerHTML = "";
}
function and(a,b,c) {
    if (a === "1" && b === "1") {
        setter("1", c);
    }
    else {
        setter("0", c);
    }
    return (a & b);
}

function xor(a,b,c) {
    if (a === b) {
        setter("0", c);
    }
    else {
        setter("1", c);
    }
    return (a ^ b);
}
function outputHandle(){
    output1Text.textContent = xor(xor(input1Text.textContent,input2Text.textContent,newCircle3),input3Text.textContent,newCircle10);
    output2Text.textContent = xor(and(xor(input1Text.textContent,input2Text.textContent,newCircle6),input3Text.textContent,newCircle8),and(input1Text.textContent,input2Text.textContent,newCircle9),newCircle11);
}

function allDisappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });

    TweenLite.to(input1Text, 0, { autoAlpha: 0 });
    TweenLite.to(input2Text, 0, { autoAlpha: 0 });
    TweenLite.to(input3Text, 0, { autoAlpha: 0 });
    TweenLite.to(output1Text, 0, { autoAlpha: 0 });
    TweenLite.to(output2Text, 0, { autoAlpha: 0 });
    gsap.set(input1, {

        fill: "#008000"
    });
    gsap.set(input2, {

        fill: "#008000"
    });
    gsap.set(input3, {

        fill: "#008000"
    });

    gsap.set(output1, {

        fill: "#008000"
    });
    gsap.set(output2, {

        fill: "#008000"
    });

}
function set(a) {
    gsap.set(a, {
        fill: "#eeeb22"
    });
}//output 0
function unset(a) {
    gsap.set(a, {
        fill: "#29e"
    });
}//output 1
function setter(a, b) {
    if (a === "1") {
        unset(b);
    }
    else if (a === "0") {
        set(b);
    }
}
function appendInput1() {
    if (input1Text.textContent !== "0") {
        TweenLite.to(input1Text, 0, { autoAlpha: 0 });
        input1Text.textContent = 0;
        svg.appendChild(input1Text);
        gsap.set(input1Text, {
            x: 96,
            y: 244,
        });
        gsap.set(input1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input1Text, 0, { autoAlpha: 1 });
        setter(input1Text.textContent, newCircle);
        setter(input1Text.textContent, newCircle4);
    }
    else if (input1Text.textContent !== "1") {    
        TweenLite.to(input1Text, 0, { autoAlpha: 0 });
        input1Text.textContent = 1;
        svg.appendChild(input1Text);
        gsap.set(input1Text, {
            x: 96,
            y: 244,
        });
        gsap.set(input1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input1Text, 0, { autoAlpha: 1 });
        setter(input1Text.textContent, newCircle);
        setter(input1Text.textContent, newCircle4);
    }

}
function appendInput2() {
    if (input2Text.textContent !== "0") {
        TweenLite.to(input2Text, 0, { autoAlpha: 0 });
        input2Text.textContent = 0;
        svg.appendChild(input2Text);
        gsap.set(input2Text, {
            x: 96,
            y: 284,
        });
        gsap.set(input2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input2Text, 0, { autoAlpha: 1 });
        setter(input2Text.textContent, newCircle1);
        setter(input2Text.textContent, newCircle5);
    }
    else if (input2Text.textContent !== "1") {
        TweenLite.to(input2Text, 0, { autoAlpha: 0 });
        input2Text.textContent = 1;
        svg.appendChild(input2Text);
        gsap.set(input2Text, {
            x: 96,
            y: 284,
        });
        gsap.set(input2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input2Text, 0, { autoAlpha: 1 });
        setter(input2Text.textContent, newCircle1);
        setter(input2Text.textContent, newCircle5);
    }


}

function appendInput3() {
    if (input3Text.textContent !== "0") {
        TweenLite.to(input3Text, 0, { autoAlpha: 0 });
        input3Text.textContent = 0;
        svg.appendChild(input3Text);
        gsap.set(input3Text, {
            x: 96,
            y: 344
        });
        gsap.set(input3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input3Text, 0, { autoAlpha: 1 });
        setter(input3Text.textContent, newCircle2);
        setter(input3Text.textContent, newCircle7);
    }
    else if (input3Text.textContent !== "1") {
        TweenLite.to(input3Text, 0, { autoAlpha: 0 });
        input3Text.textContent = 1;
        svg.appendChild(input3Text);
        gsap.set(input3Text, {
            x: 96,
            y: 344
        });
        gsap.set(input3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(input3Text, 0, { autoAlpha: 1 });
        setter(input3Text.textContent, newCircle2);
        setter(input3Text.textContent, newCircle7);
    }
}
function outputSetter() {
    setter(output1Text.textContent, output1);
    setter(output2Text.textContent, output2);
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. Press Restart the simulation.";
}
let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
let speedCircuit = 1;
function setSpeed(speed) {
    if (speed === "1") {
        if (input1Text.textContent !== "2" && input2Text.textContent !== "2" && input3Text.textContent!=="2" && tl.progress()!==1) {
            tl.timeScale(1);
        }
    }
    else if (speed === "2") {
        if (input1Text.textContent !== "2" && input2Text.textContent !== "2" && input3Text.textContent!=="2"&& tl.progress()!==1) {
            tl.timeScale(2);
        }
    }
    else if (speed === "4") {
        if (input1Text.textContent !== "2" && input2Text.textContent !== "2" && input3Text.textContent!=="2" && tl.progress()!==1) {
            tl.timeScale(4);
        }
    }
    if(tl.progress()===0){
        speedCircuit = speed;
    }

}

function workCircuit() {
    let a = document.getElementById("currentwork").innerHTML;
    if (a === "Start") {
        startCircuit();
    }
    else if (a === "Stop") {
        stopCircuit();
    }
}
function stopCircuit() {
    if (tl.time() !== 0 && tl.progress() !==1) {
        tl.pause();
        document.getElementById("currentwork").innerHTML = "Start";
        document.getElementById("Observations").innerHTML = "Simulation has been stopped."
    }
    else if(tl.progress() === 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"
    }
}

function startCircuit() {
    if (input1Text.textContent !== "2" && input2Text.textContent !== "2" && input3Text.textContent !=="2" && tl.progress() !== 1) {
        tl.play();
        tl.timeScale(speedCircuit);
        document.getElementById("currentwork").innerHTML = "Stop";
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (input1Text.textContent === "2" || input2Text.textContent === "2" || input3Text.textContent === "2" ) {
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() === 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


function outputVisible() {
    TweenLite.to(output1Text, 0, { autoAlpha: 1 });
    TweenLite.to(output2Text, 0, { autoAlpha: 1 });
}
function free() {
    document.getElementById("Observations").innerHTML = "";
}
function gate1ComponentsAppear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 1 });
}
function gate1ComponentsDisappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
}
function gate23ComponentsAppear() {
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 1 });
}
function gate23ComponentsDisappear() {
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 }); 
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
}
function gate45ComponentsAppear() {
    TweenLite.to(newCircle8, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 1 });
}
function gate45ComponentsDisappear() {
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
}
function gate67ComponentsAppear() {
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
}
function gate67ComponentsDisappear() {
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
}


tl.add(gate1ComponentsAppear, 0);
tl.add(gate1ComponentsDisappear, 5);
tl.add(gate23ComponentsAppear, 5);
tl.add(gate23ComponentsDisappear, 10);
tl.add(gate45ComponentsAppear, 10);
tl.add(gate45ComponentsDisappear, 15);
tl.add(gate67ComponentsAppear, 15);
tl.add(gate45ComponentsDisappear, 20);
tl.add(outputVisible, 20);
tl.add(outputHandle, 0);
tl.add(outputSetter, 20);
tl.eventCallback("onComplete", outputVisible);
tl.eventCallback("onComplete", observation);
tl.to(newCircle, {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle1, {
    motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle2, {
    motionPath: {
        path: "#path3",
        align: "#path3",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle3, {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 5);
tl.to(newCircle4, {
    motionPath: {
        path: "#path5",
        align: "#path5",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    
    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
tl.to(newCircle5, {
    motionPath: {
        path: "#path6",
        align: "#path6",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);

tl.to(newCircle6, {
    motionPath: {
        path: "#path7",
        align: "#path7",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 5);
tl.to(newCircle7, {
    motionPath: {
        path: "#path8",
        align: "#path8",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 0);

tl.to(newCircle8, {
    motionPath: {
        path: "#path9",
        align: "#path9",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 10);

tl.to(newCircle9, {
    motionPath: {
        path: "#path10",
        align: "#path10",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 10);

tl.to(newCircle10, {
    motionPath: {
        path: "#path11",
        align: "#path11",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 10,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 10);

tl.to(newCircle11, {
    motionPath: {
        path: "#path12",
        align: "#path12",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 5,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 15);
tl.pause();
allDisappear();