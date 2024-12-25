
const parallaxH1 = document.getElementById('parallaxH1');
const Asteroid1 = document.getElementById('Asteroid1');
const Asteroid2 = document.getElementById('Asteroid2');
const Asteroid3 = document.getElementById('Asteroid3');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let newLeft = 50 - scrollPosition / 10;
    let rotate = 50 - scrollPosition ;

    // Set the limit so that the left value doesn't go below 30%
    if (newLeft < 30) {
        newLeft = 30;
    }

    parallaxH1.style.left = newLeft + '%';
    Asteroid1.style.rotate = rotate + 'deg';
    Asteroid2.style.rotate = rotate + 'deg';
    Asteroid3.style.rotate = rotate + 'deg';
});
let menu = document.querySelector('.menu')
let navmenu = document.querySelector('.navmenucount')
menu.onclick = function (){
  navmenu.classList.toggle('active')
}
// Mouse konumunu ve dot/ball pozisyonlarını tutan değişkenler
var mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }; // Başlangıçta mouse pozisyonunu merkeze al
  var dotPos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }; // Dot başlangıç pozisyonu
  var ballPos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }; // Ball başlangıç pozisyonu
  
  // Hız ayarı için değişken
  var speed = 1; // 1 ile 10 arasında bir değer ile hız ayarı yapabilirsiniz
  
  // Dot ve ball elementlerinin hareket oranlarını belirleyen değişkenler
  var dotRatio = 0.3 * speed;
  var ballRatio = 0.35 * speed;
  
  // DOM'dan dot ve ball elementlerini seç
  var dot = document.getElementById("dot");
  var ball = document.getElementById("ball");
  
  // Dot ve ball elementlerini başlangıçta ortala
  gsap.set(dot, {
    xPercent: -50,
    yPercent: -50,
  });
  gsap.set(ball, {
    xPercent: -50,
    yPercent: -50,
  });
  
  // Fare hareketini algılayan fonksiyon
  document.addEventListener("mousemove", (e) => {
    // Mouse konumunu güncelle
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  });
  
  // GSAP ticker ile her frame'de dot ve ball pozisyonlarını güncelle
  gsap.ticker.add(() => {
    // Dot elementinin pozisyonunu yumuşak bir şekilde güncelle
    dotPos.x += (mouse.x - dotPos.x) * dotRatio;
    dotPos.y += (mouse.y - dotPos.y) * dotRatio;
  
    gsap.set(dot, {
        x: dotPos.x,
        y: dotPos.y,
    });
  
    // Ball elementinin dot'u yumuşak bir şekilde takip etmesini sağla
    ballPos.x += (dotPos.x - ballPos.x) * ballRatio;
    ballPos.y += (dotPos.y - ballPos.y) * ballRatio;
    gsap.set(ball, {
        x: ballPos.x,
        y: ballPos.y,
    });
  });
