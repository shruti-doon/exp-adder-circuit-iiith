const svg = document.querySelector(".svg");
const inputpath1 = document.querySelector("#inputpath1");
const svgns = "http://www.w3.org/2000/svg";
gsap.registerPlugin(MotionPathPlugin);

// Dimensions of working area
let circuitBoard = document.getElementById("circuit-board");
let sidePanels = document.getElementsByClassName("components-list");
// Distance of working area from top
let circuitBoardTop = circuitBoard.offsetTop;
// Full height of window
let windowHeight = window.innerHeight;
let width = window.innerWidth;
if (width < 1024) {
  circuitBoard.style.height = 600 + "px";
} else {
  circuitBoard.style.height = windowHeight - circuitBoardTop - 20 + "px";
}

sidePanels[0].style.height = circuitBoard.style.height;
sidePanels[1].style.height = circuitBoard.style.height;

let newCircle = document.createElementNS(svgns, "circle");
gsap.set(newCircle, {
    attr: { cx: 150, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle1 = document.createElementNS(svgns, "circle");
gsap.set(newCircle1, {
    attr: { cx: 200, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle2 = document.createElementNS(svgns, "circle");
gsap.set(newCircle2, {
    attr: { cx: 350, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle3 = document.createElementNS(svgns, "circle");
gsap.set(newCircle3, {
    attr: { cx: 400, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle4 = document.createElementNS(svgns, "circle");
gsap.set(newCircle4, {
    attr: { cx: 550, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle5 = document.createElementNS(svgns, "circle");
gsap.set(newCircle5, {
    attr: { cx: 600, cy: 240, r: 15, fill: "#FF0000" }
});

let newCircle6 = document.createElementNS(svgns, "circle");
gsap.set(newCircle6, {
    attr: { cx: 750, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle7 = document.createElementNS(svgns, "circle");
gsap.set(newCircle7, {
    attr: { cx: 800, cy: 240, r: 15, fill: "#FF0000" }
});
let newCircle8 = document.createElementNS(svgns, "circle");
gsap.set(newCircle8, {
    attr: { cx: 25, cy: 390, r: 15, fill: "#FF0000" }
});
let newCircle9 = document.createElementNS(svgns, "circle");
gsap.set(newCircle9, {
    attr: { cx: 225, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle10 = document.createElementNS(svgns, "circle");
gsap.set(newCircle10, {
    attr: { cx: 425, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle11 = document.createElementNS(svgns, "circle");
gsap.set(newCircle11, {
    attr: { cx: 625, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle12 = document.createElementNS(svgns, "circle");
gsap.set(newCircle12, {
    attr: { cx: 825, cy: 390, r: 15, fill: "#FF0000" }
});

let newCircle13 = document.createElementNS(svgns, "circle");
gsap.set(newCircle13, {
    attr: { cx: 175, cy: 440, r: 15, fill: "#FF0000" }
});

let newCircle14 = document.createElementNS(svgns, "circle");
gsap.set(newCircle14, {
    attr: { cx: 375, cy: 440, r: 15, fill: "#FF0000" }
});
let newCircle15 = document.createElementNS(svgns, "circle");
gsap.set(newCircle15, {
    attr: { cx: 575, cy: 440, r: 15, fill: "#FF0000" }
});
let newCircle16 = document.createElementNS(svgns, "circle");
gsap.set(newCircle16, {
    attr: { cx: 775, cy: 440, r: 15, fill: "#FF0000" }
});


var textA0 = document.createElementNS(svgns, "text");
var textA1 = document.createElementNS(svgns, "text");
var textA2 = document.createElementNS(svgns, "text");
var textA3 = document.createElementNS(svgns, "text");
var textB0 = document.createElementNS(svgns, "text");
var textB1 = document.createElementNS(svgns, "text");
var textB2 = document.createElementNS(svgns, "text");
var textB3 = document.createElementNS(svgns, "text");
var textC0 = document.createElementNS(svgns, "text");
var textC1 = document.createElementNS(svgns, "text");
var textC2 = document.createElementNS(svgns, "text");
var textC3 = document.createElementNS(svgns, "text");
var textC4 = document.createElementNS(svgns, "text");
var textS0 = document.createElementNS(svgns, "text");
var textS1 = document.createElementNS(svgns, "text");
var textS2 = document.createElementNS(svgns, "text");
var textS3 = document.createElementNS(svgns, "text");


textA0.textContent = 2;
textA1.textContent = 2;
textA2.textContent = 2;
textA3.textContent = 2;
textB0.textContent = 2;
textB1.textContent = 2;
textB2.textContent = 2;
textB3.textContent = 2;
textC0.textContent = 2;
textC1.textContent = 2;
textC2.textContent = 2;
textC3.textContent = 2;
textC4.textContent = 2;
textS0.textContent = 2;
textS1.textContent = 2;
textS2.textContent = 2;
textS3.textContent = 2;

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
svg.appendChild(newCircle12);
svg.appendChild(newCircle13);
svg.appendChild(newCircle14);
svg.appendChild(newCircle15);
svg.appendChild(newCircle16);

gsap.set(textA0, {
    x: 146,
    y: 244,
});
gsap.set(textA1, {
    x: 346,
    y: 244,
});
gsap.set(textA2, {
    x: 546,
    y: 244,
});
gsap.set(textA3, {
    x: 746,
    y: 244,
});
gsap.set(textB0, {
    x: 196,
    y: 244,
});
gsap.set(textB1, {
    x: 396,
    y: 244,
});
gsap.set(textB2, {
    x: 596,
    y: 244,
});
gsap.set(textB3, {
    x: 796,
    y: 244,
});
gsap.set(textC0, {
    x: 21,
    y: 394,
});

gsap.set(textC4, {
    x: 921,
    y: 394,
});


gsap.set(textS0, {
    x: 170,
    y: 546,
});
gsap.set(textS1, {
    x: 370,
    y: 546,
});
gsap.set(textS2, {
    x: 570,
    y: 546,
});
gsap.set(textS3, {
    x: 770,
    y: 546,
});

svg.appendChild(textA0);
svg.appendChild(textA1);
svg.appendChild(textA2);
svg.appendChild(textA3);
svg.appendChild(textB0);
svg.appendChild(textB1);
svg.appendChild(textB2);
svg.appendChild(textB3);
svg.appendChild(textC0);
svg.appendChild(textC4);
svg.appendChild(textS0);
svg.appendChild(textS1);
svg.appendChild(textS2);
svg.appendChild(textS3);

var A0 = document.getElementById("input1");
var A1 = document.getElementById("input3");
var A2 = document.getElementById("input5");
var A3 = document.getElementById("input7");
var B0 = document.getElementById("input2");
var B1 = document.getElementById("input4");
var B2 = document.getElementById("input6");
var B3 = document.getElementById("input8");
var C0 = document.getElementById("input9");
var C4 = document.getElementById("output1");
var S0 = document.getElementById("output2");
var S1 = document.getElementById("output3");
var S2 = document.getElementById("output4");
var S3 = document.getElementById("output5");

function free() {
    document.getElementById("Observations").innerHTML = "";
}
function output_S(a,b,c){
    s=1;
    if(a==b){
        s=0;
    }
    console.log("s+c = "+s+c);
    s= (parseInt(s)+parseInt(c))%2;
    console.log("s now is ");
    console.log("a is "+a);
    console.log("b is "+b);
    console.log("c is "+c);
    console.log(s);
    return s;
}
function output_C(a,b,c){
    s=c;
    if(a==1 && b==1 && c==0){
        s=1;
    }
    if(a==0 && b==0 && c==1){
        s=0;
    }
    console.log("cout now:");
    console.log(s);
    return s;
}
function output_handle(){
    textS0.textContent = output_S(textA0.textContent,textB0.textContent,textC0.textContent);
    SETTER(textS0.textContent,newCircle13);
    textC1.textContent = output_C(textA0.textContent,textB0.textContent,textC0.textContent);
    SETTER(textC1.textContent,newCircle9);
    textS1.textContent = output_S(textA1.textContent,textB1.textContent,textC1.textContent);
    SETTER(textS1.textContent,newCircle14);
    textC2.textContent = output_C(textA1.textContent,textB1.textContent,textC1.textContent);
    SETTER(textC2.textContent,newCircle10);
    textS2.textContent = output_S(textA2.textContent,textB2.textContent,textC2.textContent);
    SETTER(textS2.textContent,newCircle15);
    textC3.textContent = output_C(textA2.textContent,textB2.textContent,textC2.textContent);
    SETTER(textC3.textContent,newCircle11);
    textS3.textContent = output_S(textA3.textContent,textB3.textContent,textC3.textContent);
    SETTER(textS3.textContent,newCircle16);
    textC4.textContent = output_C(textA3.textContent,textB3.textContent,textC3.textContent);
    SETTER(textC4.textContent,newCircle12);
}

function All_disappear() {
    console.log("All_disappear");
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
    TweenLite.to(newCircle12, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 0 });
    TweenLite.to(textA0, 0, { autoAlpha: 0 });
    TweenLite.to(textA1, 0, { autoAlpha: 0 });
    TweenLite.to(textA2, 0, { autoAlpha: 0 });
    TweenLite.to(textA3, 0, { autoAlpha: 0 });
    TweenLite.to(textB0, 0, { autoAlpha: 0 });
    TweenLite.to(textB1, 0, { autoAlpha: 0 });
    TweenLite.to(textB2, 0, { autoAlpha: 0 });
    TweenLite.to(textB3, 0, { autoAlpha: 0 });
    TweenLite.to(textC0, 0, { autoAlpha: 0 });
    TweenLite.to(textC4, 0, { autoAlpha: 0 });
    TweenLite.to(textS0, 0, { autoAlpha: 0 });
    TweenLite.to(textS1, 0, { autoAlpha: 0 });
    TweenLite.to(textS2, 0, { autoAlpha: 0 });
    TweenLite.to(textS3, 0, { autoAlpha: 0 });

    gsap.set(A0, {
        fill: "#008000"
    });

    gsap.set(A1, {
        fill: "#008000"
    });

    gsap.set(A2, {
        fill: "#008000"
    });

    gsap.set(A3, {
        fill: "#008000"
    });

    gsap.set(B0, {
        fill: "#008000"
    });

    gsap.set(B1, {
        fill: "#008000"
    });

    gsap.set(B2, {
        fill: "#008000"
    });

    gsap.set(B3, {
        fill: "#008000"
    });

    gsap.set(C0, {
        fill: "#008000"
    });

    gsap.set(C4, {
        fill: "#008000"
    });

    gsap.set(S0, {
        fill: "#008000"
    });

    gsap.set(S1, {
        fill: "#008000"
    });

    gsap.set(S2, {
        fill: "#008000"
    });

    gsap.set(S3, {
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
function SETTER(a, b) {
    if (a == 1) {
        unset(b);
    }
    else if (a == 0) {
        set(b);
    }
}
function input1() {
    if (textA0.textContent != 0) {
        TweenLite.to(textA0, 0, { autoAlpha: 0 });
        textA0.textContent = 0;
        svg.appendChild(textA0);
        gsap.set(textA0, {
            x: 146,
            y: 244,

        });
        gsap.set(A0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA0, 0, { autoAlpha: 1 });
        SETTER(textA0.textContent, newCircle);
    }
    else if (textA0.textContent != 1) {    
        TweenLite.to(textA0, 0, { autoAlpha: 0 });
        textA0.textContent = 1;
        svg.appendChild(textA0);
        gsap.set(textA0, {
            x: 146,
            y: 244,
        });
        gsap.set(A0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA0, 0, { autoAlpha: 1 });
        SETTER(textA0.textContent, newCircle);
    }

}
function input3() {
    console.log("2");
    if (textA1.textContent != 0) {
        TweenLite.to(textA1, 0, { autoAlpha: 0 });
        textA1.textContent = 0;
        svg.appendChild(textA1);
        gsap.set(textA1, {
            x: 346,
            y: 244,
        });
        gsap.set(A1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA1, 0, { autoAlpha: 1 });
        SETTER(textA1.textContent, newCircle2);
    }
    else if (textA1.textContent != 1) {
        TweenLite.to(textA1, 0, { autoAlpha: 0 });
        textA1.textContent = 1;
        svg.appendChild(textA1);
        gsap.set(textA1, {
            x: 346,
            y: 244,
        });
        gsap.set(A1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA1, 0, { autoAlpha: 1 });
        SETTER(textA1.textContent, newCircle2);
    }
}

function input5() {
    console.log("here we go");
    if (textA2.textContent != 0) {
        TweenLite.to(textA2, 0, { autoAlpha: 0 });
        textA2.textContent = 0;
        svg.appendChild(textA2);
        gsap.set(textA2, {
            x: 546,
            y: 244,
        });
        gsap.set(A2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA2, 0, { autoAlpha: 1 });
        SETTER(textA2.textContent, newCircle4);
    }
    else if (textA2.textContent != 1) {
        TweenLite.to(textA2, 0, { autoAlpha: 0 });
        textA2.textContent = 1;
        svg.appendChild(textA2);
        gsap.set(textA2, {
            x: 546,
            y: 244,
        });
        gsap.set(A2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA2, 0, { autoAlpha: 1 });
        SETTER(textA2.textContent, newCircle4);
    }
}

function input7() {
    console.log("here we go");
    if (textA3.textContent != 0) {
        TweenLite.to(textA3, 0, { autoAlpha: 0 });
        textA3.textContent = 0;
        svg.appendChild(textA3);
        gsap.set(textA3, {
            x: 746,
            y: 244,
        });
        gsap.set(A3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA3, 0, { autoAlpha: 1 });
        SETTER(textA3.textContent, newCircle6);
    }
    else if (textA3.textContent != 1) {
        TweenLite.to(textA3, 0, { autoAlpha: 0 });
        textA3.textContent = 1;
        svg.appendChild(textA3);
        gsap.set(textA3, {
            x: 746,
            y: 244,
        });
        gsap.set(A3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textA3, 0, { autoAlpha: 1 });
        SETTER(textA3.textContent, newCircle6);
    }
}

function input2() {
    console.log("here we go");
    if (textB0.textContent != 0) {
        TweenLite.to(textB0, 0, { autoAlpha: 0 });
        textB0.textContent = 0;
        svg.appendChild(textB0);
        gsap.set(textB0, {
            x: 196,
            y: 244
        });
        gsap.set(B0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB0, 0, { autoAlpha: 1 });
        SETTER(textB0.textContent, newCircle1);
    }
    else if (textB0.textContent != 1) {
        TweenLite.to(textB0, 0, { autoAlpha: 0 });
        textB0.textContent = 1;
        svg.appendChild(textB0);
        gsap.set(textB0, {
            x: 196,
            y: 244
        });
        gsap.set(B0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB0, 0, { autoAlpha: 1 });
        SETTER(textB0.textContent, newCircle1);
    }
}

function input4() {
    console.log("here we go");
    if (textB1.textContent != 0) {
        TweenLite.to(textB1, 0, { autoAlpha: 0 });
        textB1.textContent = 0;
        svg.appendChild(textB1);
        gsap.set(textB1, {
            x: 396,
            y: 244
        });
        gsap.set(B1, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB1, 0, { autoAlpha: 1 });
        SETTER(textB1.textContent, newCircle3);
    }
    else if (textB1.textContent != 1) {
        TweenLite.to(textB1, 0, { autoAlpha: 0 });
        textB1.textContent = 1;
        svg.appendChild(textB1);
        gsap.set(textB1, {
            x: 396,
            y: 244
            
        });
        gsap.set(B1, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB1, 0, { autoAlpha: 1 });
        SETTER(textB1.textContent, newCircle3);
    }
}

function input6() {
    console.log("here we go");
    if (textB2.textContent != 0) {
        TweenLite.to(textB2, 0, { autoAlpha: 0 });
        textB2.textContent = 0;
        svg.appendChild(textB2);
        gsap.set(textB2, {
            x: 596,
            y: 244

        });
        gsap.set(B2, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB2, 0, { autoAlpha: 1 });
        SETTER(textB2.textContent, newCircle5);
    }
    else if (textB2.textContent != 1) {
        TweenLite.to(textB2, 0, { autoAlpha: 0 });
        textB2.textContent = 1;
        svg.appendChild(textB2);
        gsap.set(textB2, {
            x:  596,
            y: 244

        });
        gsap.set(B2, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB2, 0, { autoAlpha: 1 });
        SETTER(textB2.textContent, newCircle5);
    }
}

function input8() {
    console.log("here we go");
    if (textB3.textContent != 0) {
        TweenLite.to(textB3, 0, { autoAlpha: 0 });
        textB3.textContent = 0;
        svg.appendChild(textB3);
        gsap.set(textB3, {
            x: 796,
            y: 244

        });
        gsap.set(B3, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB3, 0, { autoAlpha: 1 });
        SETTER(textB3.textContent, newCircle7);
    }
    else if (textB3.textContent != 1) {
        TweenLite.to(textB3, 0, { autoAlpha: 0 });
        textB3.textContent = 1;
        svg.appendChild(textB3);
        gsap.set(textB3, {
            x: 796,
            y: 244

        });
        gsap.set(B3, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textB3, 0, { autoAlpha: 1 });
        SETTER(textB3.textContent, newCircle7);
    }
}

function input9() {
    console.log("here we go");
    if (textC0.textContent != 0) {
        TweenLite.to(textC0, 0, { autoAlpha: 0 });
        textC0.textContent = 0;
        svg.appendChild(textC0);
        gsap.set(textC0, {
            x: 21,
            y: 394

        });
        gsap.set(C0, {
            fill: "#eeeb22"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textC0, 0, { autoAlpha: 1 });
        SETTER(textC0.textContent, newCircle8);
    }
    else if (textC0.textContent != 1) {
        TweenLite.to(textC0, 0, { autoAlpha: 0 });
        textC0.textContent = 1;
        svg.appendChild(textC0);
        gsap.set(textC0, {
            x: 21,
            y: 394

        });
        gsap.set(C0, {
            fill: "#29e"
        });
        document.getElementById("Observations").innerHTML = "";
        TweenLite.to(textC0, 0, { autoAlpha: 1 });
        SETTER(textC0.textContent, newCircle8);
    }
}
function output_setter() {
    SETTER(textS0.textContent, S0);
    SETTER(textS1.textContent, S1);
    SETTER(textS2.textContent, S2);
    SETTER(textS3.textContent, S3);
    SETTER(textC4.textContent, C4);
}

function observation() {
    document.getElementById("Observations").innerHTML = "Simulation has finished. Press Restart the simulation.";
}
var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
var speed_circuit = 1;
function SetSpeed(speed) {
    console.log(speed)
    if (speed == "1") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 &&  tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(1);
        }
    }
    else if (speed == "2") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(2);
        }
    }
    else if (speed == "4") {
        if (textA0.textContent != 2 && textB0.textContent != 2 && textA1.textContent != 2 && textB1.textContent != 2 &&textA2.textContent != 2 && textB2.textContent != 2 && textA3.textContent != 2 && textB3.textContent != 2 && tl.progress()!=1) {
            // tl.resume();
            tl.timeScale(4);
        }
    }
    if(tl.progress()==0){
        speed_circuit = speed;
    }
    console.log("speead_circuit:"+ speed_circuit);

}


function WorkCircuit() {
    var a = document.getElementById("currentwork").innerHTML;
    if (a == "Start") {
        StartCircuit();
    }
    else if (a == "Stop") {
        StopCircuit();
    }
}
function StopCircuit() {
    if (tl.time() != 0 && tl.progress() !=1) {
        tl.pause();
        document.getElementById("currentwork").innerHTML = "Start";
        document.getElementById("Observations").innerHTML = "Simulation has been stopped."
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"
    }
}

function StartCircuit() {
    if (textA0.textContent != 2 && textA1.textContent != 2 && textA2.textContent!=2 && textA3.textContent!=2 && textB0.textContent!=2 && textB1.textContent!=2 && textB2.textContent!=2 && textB3.textContent!=2 && textC0.textContent!=2 && tl.progress()!=1) {
        tl.play();
        document.getElementById("currentwork").innerHTML = "Stop";
        tl.timeScale(speed_circuit);
        document.getElementById("Observations").innerHTML = "Simulation has started."
    }
    else if (textA0.textContent == 2 || textA1.textContent == 2 || textA2.textContent == 2 || textA3.textContent == 2 || textB0.textContent == 2 || textB1.textContent == 2 || textB2.textContent == 2 || textB3.textContent == 2 || textC0.textContent == 2 ) {
        document.getElementById("Observations").innerHTML = "Please select the values"
    }
    else if(tl.progress() == 1){
        document.getElementById("Observations").innerHTML = "Please Restart the simulation"  
    }
}


function free() {
    document.getElementById("Observations").innerHTML = "";
}
function gate1_components_appear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 1 });
}
function gate1_components_disappear() {
    TweenLite.to(newCircle, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle1, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle8, 0, { autoAlpha: 0 });
}
function gate2_components_appear() {
    console.log("gate23_components_appear now");
    TweenLite.to(newCircle2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 1 });
    
}
function gate2_components_disappear() {
    console.log("gate23_components_disappear now");
    TweenLite.to(newCircle2, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle3, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle9, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle13, 0, { autoAlpha: 0 });

}
function gate3_components_appear() {
    console.log("gate45_components_appear now");

    TweenLite.to(textS0, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle4, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 1 });

}
function gate3_components_disappear() {
    console.log("gate45_components_disappear now");
    TweenLite.to(newCircle4, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle5, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle10, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle14, 0, { autoAlpha: 0 });


}
function gate4_components_appear() {
    console.log("gate67_components_appear now");

    TweenLite.to(textS1, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle6, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 1 });
}
function gate4_components_disappear() {
    console.log("gate67_components_disappear now");
    TweenLite.to(newCircle6, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle7, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle11, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle15, 0, { autoAlpha: 0 });
}
function gate5_components_appear() {
    console.log("gate78_components_appear now");

    TweenLite.to(textS2, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle12, 0, { autoAlpha: 1 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 1 });
}
function gate5_components_disappear() {
    console.log("gate78_components_disappear now");
    TweenLite.to(newCircle12, 0, { autoAlpha: 0 });
    TweenLite.to(newCircle16, 0, { autoAlpha: 0 });
    TweenLite.to(textC4, 0, { autoAlpha: 1 });
    TweenLite.to(textS3, 0, { autoAlpha: 1 });
    
}



tl.add(gate1_components_appear, 0);
tl.add(gate1_components_disappear, 2);
tl.add(gate2_components_appear, 2);
tl.add(gate2_components_disappear, 4);
tl.add(gate3_components_appear, 4);
tl.add(gate3_components_disappear, 6);
tl.add(gate4_components_appear, 6);
tl.add(gate4_components_disappear, 8);
tl.add(gate5_components_appear, 8);
tl.add(gate5_components_disappear, 10);
tl.add(output_handle, 0);
tl.add(output_setter, 10);
tl.eventCallback("onComplete", observation);
tl.to(newCircle, {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
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

    duration: 2,
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

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 2);
tl.to(newCircle3, {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 2);
tl.to(newCircle4, {
    motionPath: {
        path: "#path5",
        align: "#path5",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    
    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 4);
tl.to(newCircle5, {
    motionPath: {
        path: "#path6",
        align: "#path6",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 4);

tl.to(newCircle6, {
    motionPath: {
        path: "#path7",
        align: "#path7",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 6);
tl.to(newCircle7, {
    motionPath: {
        path: "#path8",
        align: "#path8",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle8, {
    motionPath: {
        path: "#path9",
        align: "#path9",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 0);

tl.to(newCircle9, {
    motionPath: {
        path: "#path10",
        align: "#path10",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 2);

tl.to(newCircle10, {
    motionPath: {
        path: "#path11",
        align: "#path11",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 4);

tl.to(newCircle11, {
    motionPath: {
        path: "#path12",
        align: "#path12",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle12, {
    motionPath: {
        path: "#path13",
        align: "#path13",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 8);

tl.to(newCircle13, {
    motionPath: {
        path: "#path14",
        align: "#path14",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 2);

tl.to(newCircle14, {
    motionPath: {
        path: "#path15",
        align: "#path15",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 4);

tl.to(newCircle15, {
    motionPath: {
        path: "#path16",
        align: "#path16",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 6);

tl.to(newCircle16, {
    motionPath: {
        path: "#path17",
        align: "#path17",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 2,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,
}, 8);


tl.pause();
All_disappear();