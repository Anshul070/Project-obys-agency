var counterSpan = document.querySelector("#loading-counter span");
var count = 0;
var a = 0;


var fader1 = document.getElementById("fader1")
var fader2 = document.getElementById("fader2")

gsap.from("#loader h1" , {
    y:100,
    delay:0.5,
    duration:0.5,
    stagger:0.2
});


gsap.from("#loader h2 , #loader span",{
    opacity:0,
    delay:0.8,
    duration:0.5,
    onStart:function (){
        var counter = setInterval(()=>{
            if(count<100){
                counterSpan.textContent = count;
                count++;
            }
            else{
                counterSpan.textContent = count;
                clearInterval(counter);
            }
        },27);
        setInterval(()=>{
                console.log(a);
                if(a === 0){
                    fader1.style.opacity = 0;
                    fader2.style.opacity = 1;
                    a++
                }
                else{
                    fader1.style.opacity = 1;
                    fader2.style.opacity = 0;
                    a = 0;
                }
            },800)
    },
});



