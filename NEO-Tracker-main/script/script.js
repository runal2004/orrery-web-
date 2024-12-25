
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
  /////////////////////////////////////////
  
  
  
  let rain = document.querySelector(".i-me")
  
  function meteor() {
    let amount = 40;
    let body = document.querySelector("body");
    let count = 0;
  
    while (count < amount) {
      let drop = document.createElement("i");
      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;
  
  
      drop.style.width = `${0.1 + size}px`;
      drop.style.left = `${posX}px`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${4 + duration}s`;
  
      rain.appendChild(drop);
      count++;
    }
  }
  
  
  
  
  
  
  function marginTopSpans() {
    // Select all span elements
    const spans = document.querySelectorAll('.headline h1 div');
    
    // Loop through each span and apply the margin-top
    spans.forEach((span, index) => {
        // Calculate the margin-top value based on the index
        const marginTopValue = index * 30; // 3 pixels for each span
        // Apply the margin
        span.style.marginTop = `${marginTopValue}px`;
    });
  }
  
  // Call the function to apply the margin changes
  marginTopSpans();
  
  
  
    
      
    function textanimation (){
      const spans = document.querySelectorAll('.headline h1 div');
    
      // Loop through each span and apply the margin-top
      spans.forEach((span, index) => {
          // Calculate the margin-top value based on the index
         
          // Apply the margin
          span.classList.add('active')
    })
  
  }
  setInterval(textanimation, 500);
  
  
  
  // Define the function for the mouseover event
  document.getElementById('solarsysstem').addEventListener('mouseover', function() {
    // Get both elements by their IDs
    var solarSystem = document.getElementById('solarsysstem');
    var ball = document.getElementById('ball');
    var dot = document.getElementById('dot');
    
    // Set their display style to none
   
    ball.style.display = 'none';
    dot.style.display = 'none';
  });
  document.getElementById('solarsysstem').addEventListener('mouseleave', function() {
    // Show the ball when mouse leaves 'solarsysstem'
    var ball = document.getElementById('ball');
    var dot = document.getElementById('dot');
    ball.style.display = 'block'; // Or 'inline-block' if it was inline before
    dot.style.display = 'block'; // Or 'inline-block' if it was inline before
  });
  let menu = document.querySelector('.menu')
  let navmenu = document.querySelector('.navmenucount')
  menu.onclick = function (){
    navmenu.classList.toggle('active')
  }
  