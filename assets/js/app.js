Array.from(document.querySelectorAll('a')).forEach((el) => {
    el.setAttribute('href','#');
})

const menuBtn = document.getElementById('menu-btn');
const backdrop = document.getElementById('backdrop');
const sidemenu = document.getElementById('sidemenu');

const connectBtn = document.querySelectorAll('.connectButton');

Array.from(connectBtn).forEach(el => {
    el.addEventListener('click', (e) => {
        // alert('Connect')
    })
})

menuBtn.addEventListener('click', (e) => {
    toggleMenu();
});


backdrop.addEventListener('click', (e) => {
    toggleMenu();
});

function toggleMenu() {
    backdrop.classList.toggle('show');
    sidemenu.classList.toggle('open');
}

// Get the element you want to detect swipe gestures on
const element = document.getElementById('touch-zone');

// Initialize variables to track touch movement
let initialX = null;
let initialY = null;
let currentX = null;
let currentY = null;
let xDiff = null;
let yDiff = null;
let gestureZone = null;

// Function to handle touchstart event
function gestureStart(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  currentX = initialX;
  currentY = initialY;
  gestureZone = e.target;
}

// Function to handle touchmove event
function gestureMove(e) {
  if (initialX === null) {
    return;
  }

  currentX = e.touches[0].clientX;
  currentY = e.touches[0].clientY;

  xDiff = initialX - currentX;
  yDiff = initialY - currentY;
}

// Function to handle touchend event
function gestureEnd(e) {
  if (initialX === null) {
    return;
  }

  // Determine the gesture direction
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // Horizontal swipe
    if (xDiff > 0) {
      // Left swipe
      toggleMenu();
      // Trigger a custom event for left swipe
      element.dispatchEvent(new CustomEvent('swipe-left', { detail: { target: gestureZone } }));
    } else {
      // Right swipe
      toggleMenu();
      // Trigger a custom event for right swipe
      element.dispatchEvent(new CustomEvent('swipe-right', { detail: { target: gestureZone } }));
    }
  }

  // Reset the initial touch coordinates
  initialX = null;
  initialY = null;
  currentX = null;
  currentY = null;
  xDiff = null;
  yDiff = null;
  gestureZone = null;
}

// Add event listeners to the element
element.addEventListener('touchstart', gestureStart);
element.addEventListener('touchmove', gestureMove);
element.addEventListener('touchend', gestureEnd);