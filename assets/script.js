var n_stars = 200
var colors = [ '#287194', '#287194']
for ( let i = 0; i < 100; i++) {
  colors.push( '#A38182')
}

var canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

addEventListener( 'resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
  stars = []
  init()
})

canvas.style.background = '#287194'
var c = canvas.getContext('2d')

const randomInt = ( max, min) => Math.floor( Math.random() * (max - min) + min)

var bg = c.createRadialGradient( canvas.width/ 2, canvas.height * 3, canvas.height ,canvas.width/ 2,canvas.height , canvas.height * 4);
bg.addColorStop(0,"#023246");
bg.addColorStop(.4,"#023246");
bg.addColorStop(.8,"#023246");
bg.addColorStop(1,"#023246");

class Star {
  constructor( x, y, radius, color) {
    this.x = x || randomInt( 0, canvas.width)
    this.y = y || randomInt( 0, canvas.height)
    this.radius = radius || Math.random() * 1.1
    this.color = color || colors[randomInt(0, colors.length)]
    this.dy = -Math.random() * .3
  }
  draw () {
    c.beginPath()
    c.arc( this.x, this.y, this.radius, 0, Math.PI *2 )
    c.shadowBlur = randomInt( 3, 15)
    c.shadowColor = this.color
    c.strokeStyle = this.color
    c.fillStyle = 'rgba( 255, 255, 255, .5)'
    c.fill()
    c.stroke()
    c.closePath()
  }
  update( arrayStars = [] ) {
    if ( this.y - this.radius < 0 ) this.createNewStar( arrayStars )
    
    this.y += this.dy
    this.draw()
  }
  createNewStar( arrayStars = [] ) {
    let i = arrayStars.indexOf( this )
    arrayStars.splice( i, 1)
    arrayStars.push( new Star( false, canvas.height + 5))
  }
}
var stars = []
function init() {
  for( let i = 0; i < n_stars; i++ ) {
    stars.push( new Star( ) )
  }
}
init()

function animate() {
  requestAnimationFrame( animate)
  c.clearRect( 0, 0, canvas.width, canvas.height)
  c.fillStyle = bg
  c.fillRect(0, 0, canvas.width, canvas.height)
  stars.forEach( s => s.update( stars ))
}
animate()
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    init(); 
});


document.addEventListener("DOMContentLoaded", function () {
    const Hamburger = document.getElementById("Hamburger");
    const links = document.querySelector(".link");

    Hamburger.addEventListener("click", function () {
       
        links.classList.toggle("active");
    });
});


const typed = new Typed('#typed', {
    strings: [
        'Web Developer.',
        'Wordpress Developer.',
        'React J.S Developer.',
        ''
    ],
    typeSpeed: 80,
    backSpeed: 60   ,
    smartBackspace: true,
    loop: true,
    contentType: 'html' 
});

