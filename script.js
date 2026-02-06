// const doButton = document.getElementById("do");
// const reButton = document.getElementById("re");
// const miButton = document.getElementById("mi");
// const faButton = document.getElementById("fa");
// const soButton = document.getElementById("so");
// const laButton = document.getElementById("la");
// const tiButton = document.getElementById("ti");
// const do2Button = document.getElementById("do2");

// doButton.addEventListener("click", () => {
//     let doSound = new Audio("./sounds/do.mp3");
//     doSound.play();
// });
// reButton.addEventListener("click", () => {
//     let reSound = new Audio("./sounds/re.mp3");
//     reSound.play();
// });
// miButton.addEventListener("click", () => {
//     let miSound = new Audio("./sounds/mi.mp3");
//     miSound.play();
// });
// faButton.addEventListener("click", () => {
//     let faSound = new Audio("./sounds/fa.mp3");
//     faSound.play();
// });
// soButton.addEventListener("click", () => {
//     let soSound = new Audio("./sounds/so.mp3");
//     soSound.play();
// });
// laButton.addEventListener("click", () => {
//     let laSound = new Audio("./sounds/la.mp3");
//     laSound.play();
// });
// tiButton.addEventListener("click", () => {
//     let tiSound = new Audio("./sounds/ti.mp3");
//     tiSound.play();
// });
// do2Button.addEventListener("click", () => {
//     let do2Sound = new Audio("./sounds/do2.mp3");
//     do2Sound.play();
// });



let piano = document.querySelector('.mypiano');
piano.addEventListener("click", (event) => {
    let key = event.target.getAttribute('id');
    let sound = new Audio(`./sounds/${key}.mp3`);
    key.style.backgroundColour = 'orange';
    sound.play();
    console.log(key);
    
})

piano.addEventListener('keydown', (event) =>{
    if(event.key === 'a'){
        let doSound = new Audio(`./sounds/do.mp3`);
        doSound.play();
    }
    else if(event.key === 's'){
        let reSound = new Audio(`./sounds/re.mp3`);
        reSound.play();
    }
    else if(event.key === 'd'){
        let miSound = new Audio(`./sounds/mi.mp3`);
        miSound.play();
    }
    else if(event.key === 'f'){
        let faSound = new Audio(`./sounds/fa.mp3`);
        faSound.play();
    }
    else if(event.key === 'h'){
        let soSound = new Audio(`./sounds/so.mp3`);
        soSound.play();
    
    }
    else if(event.key === 'j'){
        let laSound = new Audio(`./sounds/la.mp3`);
        laSound.play();
    }
    else if(event.key === 'k'){
        let tiSound = new Audio(`./sounds/ti.mp3`);
        tiSound.play();
    }
    else if(event.key === 'l'){
        let do2Sound = new Audio(`./sounds/do2.mp3`);
        do2Sound.play();
    }
})
