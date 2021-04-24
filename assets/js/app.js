let app = document.getElementById('app');

let typewriter = new Typewriter (app, {
    loop : true,
    delay: 125,
});

typewriter
  .pauseFor(2000)
  .typeString('WEB')
  .pauseFor(2000)
  .deleteChars(3)
  .typeString('<strong><span style="color: yellow;">JavaScript</span></strong>')
  .pauseFor(2000)
  .deleteChars(11)
  .typeString('<strong><span style="color: green;">NodeJs</span></strong>')
  .pauseFor(2000)
  .start();


// Modale video 

const btn = document.querySelector('.btn')
const btnSix = document.querySelector('.btn-six')
const btnSeven = document.querySelector('.btn-seven')
const videoContainer = document.querySelector('.video-container')
const closeShow = document.querySelector('.close')
const video = document.querySelector('video')

btn.addEventListener('click', ()=>{
	videoContainer.classList.add('show')
  videoContainer.insertAdjacentHTML("afterbegin", `<video id="video-show" src="videos/orinoco.mp4" controls></video>`)
})

btnSix.addEventListener('click', ()=>{
	videoContainer.classList.add('show')
  videoContainer.insertAdjacentHTML("afterbegin", `<video src="videos/soPekocko.mp4" controls></video>`)
})

btnSeven.addEventListener('click', ()=>{
	videoContainer.classList.add('show')
  videoContainer.insertAdjacentHTML("afterbegin", `<video src="videos/groupomania.mp4" controls></video>`)
})

closeShow.addEventListener('click', ()=>{
	window.location.reload()
})