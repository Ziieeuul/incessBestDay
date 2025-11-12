/* ======== Card pages content (HTML blocks) ======== */
/* We'll inject pages into the card inner element and animate a 'page flip' effect between them. */

const pages = [
  // Page 0: Cover
  `
  <div class="page cover">
    <div class="content">
      <img class="cup-icon" src="matchaCup.png" alt="matcha cup">
      <h1>Happy Birthday Princess</h1>
      <div class="tag">hey matcha girl 💚</div>
      <div style="margin-top:12px; color:#275033; opacity:0.95;">Born in 2005 • soft & cozy matcha vibes</div>
    </div>
  </div>
  `,
  // Page 1: About
  `
  <div class="page inner-page">
    <div class="content">
      <h2>💌  My Wishes To You</h2>
      <p>✨🍵Hye incess!! Happy Birthday to pretty princes Iffah Syafiqah!! This is your 20th birthday, and we are aware that most of life's challenges will arise at that age. I pun pernah berumur 20, jadi I faham apa yang akan u alami nanti. Tapi jangan risau sbb Ill never leave u. Sempena Birthday you yang ke 20 ni, i doakan you agar dipermudahkan segala urusan, diperluaskan lagi pintu rezeki, diperkukuhkan lagi iman dalam diri, dan sentiasa cantik dan manja. Karanglah jalan cerita hidup you dengan baik dan kemas dan cantik. Enjoy your best day princess!!🍵✨</p>
    </div>
  </div>
  `,
  // Page 2: Gallery
  `
<div class="page inner-page">
  <div class="content">
    <h2>✨ Gallery</h2>
    <div class="gallery-container">
<div class="gallery-grid">
  <img src="p1.jpg" alt="Matcha Moment 1">
  <img src="p2.jpg" alt="Matcha Moment 2">
  <img src="p3.jpg" alt="Matcha Moment 3">
  <img src="p4.jpg" alt="Matcha Moment 4">
  <img src="p5.jpg" alt="Matcha Moment 5">
  <img src="p6.jpg" alt="Matcha Moment 6">
  <img src="p7.jpg" alt="Matcha Moment 7">
  <img src="p8.jpg" alt="Matcha Moment 8">
  <img src="p9.jpg" alt="Matcha Moment 9">
  <img src="p10.jpg" alt="Matcha Moment 10">
  <img src="p11.jpg" alt="Matcha Moment 11">
  <img src="p12.jpg" alt="Matcha Moment 12">
  <img src="p13.jpg" alt="Matcha Moment 13">
  <img src="p14.jpg" alt="Matcha Moment 14">
  <img src="p15.jpg" alt="Matcha Moment 15">
  <img src="p16.jpg" alt="Matcha Moment 16">
  <img src="p17.jpg" alt="Matcha Moment 17">
  <img src="p18.jpg" alt="Matcha Moment 18">
  <img src="p19.jpg" alt="Matcha Moment 19">
  <img src="p20.jpg" alt="Matcha Moment 20">
  <img src="p21.jpg" alt="Matcha Moment 21">
  <img src="p22.jpg" alt="Matcha Moment 22">
  <img src="p23.jpg" alt="Matcha Moment 23">
  <img src="p24.jpg" alt="Matcha Moment 24">
  <img src="p25.jpg" alt="Matcha Moment 25">
  <img src="p26.jpg" alt="Matcha Moment 26">
  <img src="p27.jpg" alt="Matcha Moment 27">
  <img src="p29.jpg" alt="Matcha Moment 29">
  <img src="p30.jpg" alt="Matcha Moment 30">
  <img src="p31.jpg" alt="Matcha Moment 31">
  <img src="p32.jpg" alt="Matcha Moment 32">
  <img src="p33.jpg" alt="Matcha Moment 33">
  <img src="p34.jpg" alt="Matcha Moment 34">
  <img src="p35.jpg" alt="Matcha Moment 35">
  <img src="p36.jpg" alt="Matcha Moment 36">
  <img src="p37.jpg" alt="Matcha Moment 37">
  <img src="p39.jpg" alt="Matcha Moment 39">
  <img src="p40.jpg" alt="Matcha Moment 40">
  <img src="p41.jpg" alt="Matcha Moment 41">
  <img src="p42.jpg" alt="Matcha Moment 42">
  <img src="p44.jpg" alt="Matcha Moment 44">
  <img src="p45.jpg" alt="Matcha Moment 45">
  <img src="p46.jpg" alt="Matcha Moment 46">
  <img src="p47.jpg" alt="Matcha Moment 47">
  <img src="p48.jpg" alt="Matcha Moment 48">
  <img src="p49.jpg" alt="Matcha Moment 49">
  <img src="p50.jpg" alt="Matcha Moment 50">
</div>
</div>

    <!-- Lightbox -->
    <div id="lightbox" class="lightbox">
      <span id="lightboxClose">&times;</span>
      <img id="lightboxImg" src="" alt="">
    </div>
  </div>
</div>


  `,
  // Page 3: Fun Zone (contains all mini-games)
  `
  <div class="page inner-page">
    <div class="content">
      <h2>🍵 Matcha Fun Zone</h2>
      <p>Play a few tiny games for Incess!</p>
      <div class="fun-buttons">
        <button id="openGameBtn">🍵 Find the Matcha Cup</button>
        <button id="complimentBtn">💬 Compliment Me</button>
        <button id="wishBtn">🎂 Make a Wish</button>
        <button id="openWishBoardBtn">💌 Wish Board</button>
      </div>

      <div class="game-pane">
      <div id="timer">Time: 30s</div>
        <div id="gameArea"></div>
        <div id="score">Score: 0</div>
      </div>

      <div style="margin-top:6px;">
        <input id="wishInput" placeholder="Write a wish..." style="padding:8px 12px; border-radius:12px; border:1px solid #e8f3ea; width:60%;" />
        <button id="sendWishSmall" style="padding:8px 12px; border-radius:12px; border:none; background:var(--matcha); color:var(--deep-matcha); font-weight:700;">Send</button>
        <div id="wishArea"></div>
      </div>
    </div>
  </div>
  `,
  // Page 4: Wishes / Closing
// Page 4: Confess Page
`
<div class="page inner-page">
  <div class="content" style="text-align:center; padding-top:40px;">
    <h2>💚 A Question for You...</h2>
    <p style="font-size:1.1em; margin:20px 0;">Would you be my girlfriend?</p>
    <div style="margin-top:30px;">
      <a id="yesLink" href="#" target="_blank">
        <button class="confessBtn yesBtn">
          Yes 💖
        </button>
      </a>
      <a id="noLink" href="#" target="_blank">
        <button class="confessBtn noBtn">
          No 😢
        </button>
      </a>
    </div>
  </div>
</div>


`

];


/* ======== Page Flip & Fun Zone Optimized ======== */
const cardInner = document.getElementById('cardInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

let currentPage = 0;
const totalPages = pages.length;
let flipping = false;
let spawnInterval = null;
let score = 0;

function renderPage(pageIndex){
  cardInner.innerHTML = pages[pageIndex];
  pageIndicator.textContent = `Page ${pageIndex + 1} / ${totalPages}`;
  wirePageInteractive();
  // start/stop cup spawning
  if(pageIndex === 3) startSpawningCups();
  else stopSpawningCups();
}

// initial render
renderPage(currentPage);

// Page flip with rotation animation
function flipTo(pageIndex){
  if(flipping || pageIndex === currentPage || pageIndex < 0 || pageIndex >= totalPages) return;
  flipping = true;

  cardInner.style.transition = 'transform .45s cubic-bezier(.2,.9,.2,1)';
  cardInner.style.transform = 'rotateY(90deg)';

  setTimeout(()=>{
    renderPage(pageIndex);

    cardInner.style.transition = 'none';
    cardInner.style.transform = 'rotateY(-90deg)';

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        cardInner.style.transition = 'transform .45s cubic-bezier(.2,.9,.2,1)';
        cardInner.style.transform = 'rotateY(0deg)';
      });
    });

    currentPage = pageIndex;
    setTimeout(()=> flipping = false, 500);
  }, 470);
}

prevBtn.addEventListener('click', ()=> flipTo(currentPage-1));
nextBtn.addEventListener('click', ()=> flipTo(currentPage+1));
document.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowLeft') flipTo(currentPage-1);
  if(e.key === 'ArrowRight') flipTo(currentPage+1);
});

/* ======== Fun Zone Cup Spawning ======== */
function startSpawningCups(){
  if(spawnInterval) return; // already running
  spawnInterval = setInterval(()=> {
    const gameArea = document.getElementById('gameArea');
    if(gameArea) spawnCup();
  }, 1200);
}


function stopSpawningCups(){
  if(spawnInterval){
    clearInterval(spawnInterval);
    spawnInterval = null;
  }
}

let gameTime = 30; // total seconds
let gameTimerInterval;
let gameActive = false;

function startGame() {
  // reset score and timer
  score = 0;
  gameTime = 30;
  gameActive = true;

  const scoreEl = document.getElementById('score');
  const timerEl = document.getElementById('timer');
  if(scoreEl) scoreEl.textContent = "Score: 0";
  if(timerEl) timerEl.textContent = "Time: 30s";

  // clear any existing intervals
  clearInterval(gameTimerInterval);

  // start countdown
  gameTimerInterval = setInterval(() => {
    if(!gameActive) return;
    gameTime--;
    if(timerEl) timerEl.textContent = `Time: ${gameTime}s`;

    if(gameTime <= 0){
      endGame();
    }
  }, 1000);
}

function endGame() {
  gameActive = false;
  clearInterval(gameTimerInterval);
  alert(`⏰ Time's up! Your score: ${score}`);
}

// Modify spawnCup to check if game is active
function spawnCup(){
  if(!gameActive) return; // don't spawn if game ended
  const gameArea = document.getElementById('gameArea');
  if(!gameArea) return;
  const cup = document.createElement('img');
  cup.src = "matchaCup.png";
  cup.style.left = Math.random() * (gameArea.clientWidth - 60) + "px";
  cup.style.top = Math.random() * (gameArea.clientHeight - 60) + "px";
  cup.style.width = "56px";
  cup.style.transform = "scale(0.95)";
  cup.style.position = "absolute";

  cup.onclick = (e) => {
    if(!gameActive) return;
    score++;
    const scoreEl = document.getElementById('score');
    if(scoreEl) scoreEl.textContent = "Score: " + score;
    cup.style.transform = "scale(1.2)";
    setTimeout(()=> { if(cup.parentNode) cup.parentNode.removeChild(cup); }, 140);
  };

  gameArea.appendChild(cup);

  // auto remove after 1.2s if not clicked
  setTimeout(()=> { if(cup.parentNode) cup.parentNode.removeChild(cup); }, 1200);
}

function flashGameBorder(){
  const ga = document.getElementById('gameArea');
  if(!ga) return;
  ga.style.boxShadow = '0 12px 28px rgba(59,94,64,0.12)';
  setTimeout(()=> ga.style.boxShadow='', 800);
}

/* ======== Compliments & Wishes ======== */
const compliments = [
  "You’re glowing today 💚",
  "Matcha queen energy ✨",
  "Stay cozy and kind 🌸",
  "Soft vibes, strong heart 💕",
  "You’re as sweet as matcha latte 🍵"
];

const wishes = [
  "May your days be filled with warm matcha and joy 🍵✨",
  "You deserve all the soft and good things 💚",
  "Keep blooming beautifully 🌸",
  "Your smile brightens everything 💫"
];

function showCompliment(){
  const text = compliments[Math.floor(Math.random()*compliments.length)];
  const toast = document.createElement('div');
  toast.textContent = text;
  toast.style.position = 'fixed';
  toast.style.left = '50%';
  toast.style.top = '14%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = 'linear-gradient(90deg,#ffffff,#f6fff5)';
  toast.style.padding = '10px 14px';
  toast.style.borderRadius = '999px';
  toast.style.boxShadow = '0 12px 26px rgba(59,94,64,0.12)';
  toast.style.color = '#2b5930';
  toast.style.fontWeight = '700';
  toast.style.zIndex = 60;
  document.body.appendChild(toast);
  setTimeout(()=> toast.style.opacity = '0', 1400);
  setTimeout(()=> toast.remove(), 1800);
}

function makeWish(){
  const w = wishes[Math.floor(Math.random()*wishes.length)];
  const bubble = document.createElement('div');
  bubble.textContent = "🎂 " + w;
  bubble.style.position='fixed';
  bubble.style.left='50%';
  bubble.style.top='38%';
  bubble.style.transform='translateX(-50%)';
  bubble.style.background='linear-gradient(90deg,#fff8fb,#f0fff2)';
  bubble.style.padding='12px 18px';
  bubble.style.borderRadius='14px';
  bubble.style.boxShadow='0 18px 40px rgba(0,0,0,0.09)';
  bubble.style.zIndex=60;
  bubble.style.fontWeight='700';
  bubble.style.color='#355b42';
  document.body.appendChild(bubble);
  setTimeout(()=> bubble.remove(), 3000);
}

function sendWishFromSmall(){
  const inp = document.getElementById('wishInput');
  if(!inp) return;
  const text = inp.value.trim();
  if(!text) return;
  sendWish(text);
  inp.value = '';
}

function sendWish(text){
  const wishArea = document.getElementById('wishArea');
  if(!wishArea) return;
  const el = document.createElement('div');
  el.className = 'wish';
  el.textContent = text;
  el.style.left = (10 + Math.random()*70) + '%';
  el.style.bottom = '-10px';
  wishArea.appendChild(el);
  el.animate([{transform:'translateY(0)', opacity:1},{transform:'translateY(-120px)', opacity:0}], {duration:4200, easing:'ease-in-out'});
  setTimeout(()=> el.remove(), 4300);
}

/* ======== Wire interactive elements per page render ======== */
function wirePageInteractive(){
  const page = cardInner.querySelector('.inner-page');
  if(!page) return;

  const openGameBtn = page.querySelector('#openGameBtn');
  const complimentBtn = page.querySelector('#complimentBtn');
  const wishBtn = page.querySelector('#wishBtn');
  const openWishBoardBtn = page.querySelector('#openWishBoardBtn');
  const sendWishSmall = page.querySelector('#sendWishSmall');
  const confettiBtn = page.querySelector('#confettiBtn');

  if(openGameBtn) openGameBtn.onclick = () => { 
  startGame();          // start timer & reset score
  spawnCup();           // spawn first cup immediately
  flashGameBorder(); 
};

  if(complimentBtn) complimentBtn.onclick = showCompliment;
  if(wishBtn) wishBtn.onclick = makeWish;
  if(sendWishSmall) sendWishSmall.onclick = sendWishFromSmall;
  if(openWishBoardBtn) openWishBoardBtn.onclick = ()=> {
    const inp = page.querySelector('#wishInput');
    if(inp) inp.focus();
  };
  if(confettiBtn) confettiBtn.onclick = fireConfetti;

  // gallery lightbox
  const galleryImgs = page.querySelectorAll('.gallery-grid img');
  const lightbox = page.querySelector('#lightbox');
  const lightboxImg = page.querySelector('#lightboxImg');
  const lightboxClose = page.querySelector('#lightboxClose');

  galleryImgs.forEach(img=>{
    img.onclick=()=>{
      if(!lightbox) return;
      lightbox.style.display='flex';
      lightboxImg.src = img.src.replace('/360x240/','/720x480/');
      lightboxImg.alt = img.alt;
    }
  });
  if(lightboxClose) lightboxClose.onclick=()=>{ lightbox.style.display='none'; };
  if(lightbox) lightbox.onclick=(e)=>{ if(e.target===lightbox) lightbox.style.display='none'; };

const yesLink = page.querySelector('#yesLink');
const noLink = page.querySelector('#noLink');

if(yesLink){
  yesLink.onclick = (e) => {
    e.preventDefault();
    // WhatsApp romantic message
    const msg = encodeURIComponent("Yes… I would love to be your boyfriend 💚💫 Forever yours, my matcha princess.");
    window.open("https://wa.me/+601133184685?text=" + msg, "_blank");
  }
}

if(noLink){
  const noBtn = noLink.querySelector('button');
  noBtn.onmouseover = () => {
    // move button randomly inside the parent container
    const parentWidth = noBtn.parentElement.clientWidth - noBtn.offsetWidth;
    const parentHeight = noBtn.parentElement.clientHeight - noBtn.offsetHeight;

    const randX = Math.random() * parentWidth;
    const randY = Math.random() * parentHeight;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
  };

  noLink.onclick = (e) => {
    e.preventDefault();
    // fallback if somehow clicked
    window.open("https://youtu.be/zfT60dky4oo?si=madDXPkvIb1o_A4o", "_blank");
  };
}



}




