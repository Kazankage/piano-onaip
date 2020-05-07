const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const black_keys = ['s', 'd', 'g', 'h', 'j' ]

window.addEventListener("load", () =>{
    const sounds = document.querySelectorAll(".sound");
    const keys = document.querySelectorAll(".keys div");

    keys.forEach((key,index) => {
        key.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
        
    });
});

