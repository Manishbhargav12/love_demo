document.addEventListener('DOMContentLoaded', function() {

    const welcomeBtn = document.getElementById('welcome-btn');
    const buttons = [
                document.getElementById('music-btn'),
                document.getElementById('photos-btn'),
                document.getElementById('message-btn'),
                document.getElementById('letter-btn'),
                document.getElementById('video-btn'),
                document.getElementById('smile-btn')
            ];
             const messageBtn = document.getElementById('message-btn');
  const shayariContainer = document.getElementById('shayari-container');

  messageBtn.addEventListener('click', () => {
    if (shayariContainer.classList.contains('hidden')) {
      shayariContainer.classList.remove('hidden');
      shayariContainer.classList.add('revealed');
    //   messageBtn.textContent = '❤️ Hide Message';
    } else {
      shayariContainer.classList.remove('revealed');
      shayariContainer.classList.add('hidden');
    //   messageBtn.textContent = '💌 My Message';
    }
  });

 const purpose = document.getElementById('smile-btn');
const msgContainer = document.getElementById('letter-container');

buttons[3].addEventListener('click', () => {
  if (msgContainer.classList.contains('revealed')) {
    msgContainer.classList.remove('revealed');
    msgContainer.classList.add('hidden');
    // msgBtn.textContent = '💌 My Message';
  } else {
    msgContainer.classList.remove('hidden');
    msgContainer.classList.add('revealed');
  }
});

buttons[4].addEventListener('click', () => {
    document.querySelector('#video-container').style.zIndex = '9999';
    document.querySelector('#video-container').style.display = 'block';
    if (!bgMusic.paused){
        bgMusic.pause();
        a=1
    }
    video.play();

    
    // document.body.style.overflow = 'hidden';
  
});

function handleYesClick() {
window.location.href = "purpose.html";
}
purpose.addEventListener('click', () => {
    handleYesClick();
});
video = document.querySelector("#my-video")
closeVideoBtn = document.querySelector('#close-video');
closeVideoBtn.addEventListener('click', function() {
       document.querySelector('#video-container').style.zIndex = '-1';

    document.querySelector('#video-container').style.display = 'none';
    video.currentTime = 0; 
    video.pause();
    if (a==1){
        bgMusic.play();
        a=0
    }   

    
})


// buttons[4].addEventListener('click', () => {

//   videoBtn.addEventListener('click', () => {
//   });
// });
// Uncomment if you want background music functionality
const musicToggle = document.querySelectorAll(".music-toggle");
const bgMusic = document.getElementById("bg-music")
if (!bgMusic) {
    console.error("❌ bgMusic element not found!");
    return;
}

if (musicToggle.length === 0) {
    console.error("❌ No buttons found with class .music-toggle");
    return;
}

                            
                            welcomeBtn.addEventListener('click', () => {
                                welcomeBtn.classList.add('hidden');
                                buttons.forEach((btn, i) => {
                                    setTimeout(() => {
                                        btn.classList.remove('hidden');
                                        btn.classList.add('revealed');
                                    }, i * 250);
                                });
                            });
                            
                            // Button functionality
                            const musicbtn=document.getElementById("music-btn")
                            var x=0
                            musicbtn.addEventListener('click', () => {
                                
                                if (bgMusic.paused) {
                                    bgMusic.play();
                                    buttons[0].textContent = '🎶 Playing song...';
                                    
                                    
                                }
                                
                                else{
                                    bgMusic.pause();
                                    buttons[0].textContent = '🎶 Paused song...';
                                }
                                // buttons[0].textContent = '🎶 Playing song...';
                            });
                            var x=0;
                            buttons[1].addEventListener('click', () => {
                // Photo carousel would activate here
                // document.querySelector('.carousel').style.zIndex = '0';
                // document.querySelector('.carousel').style.display = 'flex';
                
                if (x==0) {
                    document.querySelector('.carousel').style.zIndex = '2';
                    document.querySelector('.carousel').style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    setTimeout(() => {
                        carousel.style.opacity = "1";
                        carousel.style.visibility = "visible";
                    }, 5); // small delay to trigger transition
                    // buttons[1].textContent = '✨ Showing  memories';
                    
                    
                }
                // else{
                    //     document.querySelector('.carousel').style.zIndex ='-2';
                    //     document.querySelector('.carousel').style.display = 'none';
                    //     x=0
                    //     buttons[1].textContent = '📸 Our Memories'
                    
                    // }
                });
            });
            const carousel = document.getElementById("carouselExampleControls");
            const closeBtn = document.getElementById('btn-close');
            
            closeBtn.addEventListener("click", ()=> {
                carousel.style.opacity = "0";
                carousel.style.visibility = "hidden";
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    carousel.style.display = "none";
                }, 250); // matches CSS transition
                
                
                // closeBtn.addEventListener("click", () => {
                    //     // carouselContainer.classList.add("hidden");
                    //     document.querySelector('.carousel').style.display = 'none';
                    //     // document.body.style.overflow = "auto"; // restore vertical scroll
                    // });
                    // Uncomment if you want floating hearts
                    
                    // setInterval(createHeart, 300);
                    
        });
