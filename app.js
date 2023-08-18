
//? ---------------------------------------------------------------SLIDER SET-UP---------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  


  // ? ---------------------------------------------------------------PARTICLE SET-UP---------------------------------------------------------------
  particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 10,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
  });




  //? ---------------------------------------------------------------SIDE MENU TOGGELS---------------------------------------------------------------
  const leftMenuIcon = document.querySelector('#leftIcon');
  const RightMenuIcon = document.querySelector('#rightIcon');

  leftMenuIcon.addEventListener('click',openLeft)
  RightMenuIcon.addEventListener('click',openRight)


  //? TAB MENU OPTIONS

const tabformBtn = document.querySelector('#tabformBtn');
const tabtextBtn = document.querySelector('#tabtextBtn');
const tabimageBtn = document.querySelector('#tabimageBtn');
const tabvideoBtn = document.querySelector('#tabvideoBtn');

const contentContainer = document.querySelector('.content');

tabformBtn.addEventListener('click',()=>{
  contentContainer.innerHTML = formHTML;
})
tabtextBtn.addEventListener('click',()=>{
  contentContainer.innerHTML = textHTML;
})
tabimageBtn.addEventListener('click',()=>{
  contentContainer.innerHTML= imageHTML;
})
tabvideoBtn.addEventListener('click', ()=>{
  contentContainer.innerHTML = videoHTML;
})


//? ---------------------------------------------------------------TAB BTN FUCTION---------------------------------------------------------------

const leftTabBtn = document.querySelector('#leftTab');
const rightTabBtn = document.querySelector('#rightTab')

leftTabBtn.addEventListener('click',()=>{
  window.open('https://www.youtube.com/embed/m-i2JBtG4FE', '_blank');
})
rightTabBtn.addEventListener('click',()=>{
  window.open('https://www.youtube.com/embed/dl00fOOYLOM', '_blank');
})



// ?---------------------------------------------------------------FUNCTIONS--------------------------------------------------------------- 

  function openLeft(){
      const sideMenu = document.querySelector(".left-menu");
      leftMenuIcon.classList.toggle('fa-xmark')
      sideMenu.classList.toggle('left-hide');
  }
  function openRight(){
      const sideMenu = document.querySelector(".right-menu");
      RightMenuIcon.classList.toggle('fa-xmark')
      sideMenu.classList.toggle('right-hide');
  }


  // ? ---------------------------------------------------------------STATIC VARIABLES---------------------------------------------------------------


  const formHTML = `<div class="form">
  <form action="">
      <input type="text" placeholder="name">
      <input type="text" placeholder="email">
      <input type="text" placeholder="phone">
      <input type="text" placeholder="message">
      <button class="tab">submit</button>
  </form>
</div>`;

const textHTML = `<div class="text">
                <h2>Heading for the text</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo molestias corporis explicabo sapiente enim nihil, quae dolore, numquam aperiam laborum quod qui quos voluptatibus cupiditate voluptas saepe et hic. Ducimus est sapiente amet omnis totam! Magni quisquam, asperiores eligendi ea ipsum tenetur incidunt aliquam quasi natus illo itaque voluptas saepe ipsam nihil temporibus excepturi adipisci ducimus minus. Adipisci earum rem sunt, aliquid porro, minima facere vel, amet fuga eveniet quidem blanditiis repellendus. Consequatur porro architecto quibusdam itaque quae hic cumque placeat autem odio in, neque, nihil, esse dolorem magnam asperiores praesentium. Voluptatum velit quasi eaque laborum nesciunt, natus cum repudiandae doloribus? Adipisci architecto, quia aspernatur asperiores minus vero deleniti ad quaerat numquam, totam sapiente aliquid pariatur officiis error animi illo repellat possimus quo. Laboriosam obcaecati aut modi officiis voluptatem, vitae, neque, laborum repellat doloribus repellendus suscipit pariatur repudiandae ipsam. Maiores aliquid suscipit perspiciatis! A quia ullam adipisci inventore error.</p>
</div>`;

const imageHTML = `<div class="image">
<img src="https://picsum.photos/400" alt="">
</div>`;

const videoHTML = `<div class="video">
<iframe width="930" height="523" src="https://www.youtube.com/embed/m-i2JBtG4FE" title="setup a FREE VPN server in the cloud (AWS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>`;