// List of comics
document.addEventListener('DOMContentLoaded', () => {

  const comics = window.comics || [];

  // New user
  let hasNavigated = false;

  // Track button clicks / events
  function trackEvent(eventName, params = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }
  function trackNavigation(method) {
  // track navigation method
    trackEvent("comic_navigation", { method });

    // Only fire once per intial page load
    if (!hasNavigated) {
      trackEvent("multi_comic_session", {
        triggered_by: method
      });
      hasNavigated = true;
    }
  }
  // Optional captions - cba doing this atm
  const captions = { };

  // Start at top of the list
  let currentIndex = 0;

  // Elements
  const comicImg    = document.getElementById("comic");
  const captionText = document.getElementById("caption");
  const prevBtn     = document.getElementById("prev-btn");
  const nextBtn     = document.getElementById("next-btn");
  const oldestBtn   = document.getElementById("oldest-btn");
  const newestBtn   = document.getElementById("newest-btn");
  const randomBtn   = document.getElementById("random-btn");

  if (!comicImg || !captionText || !prevBtn || !nextBtn || !randomBtn) {
    console.error("Missing required elements (#comic, #caption, #prev-btn, #next-btn, #random-btn).");
    return;
  }

  // Helper: file base name without extension
  function fileBase(path) {
    return path.split("/").pop().replace(/\.[^.]+$/, "");
  }

 function updateButtons() {
  nextBtn.disabled = currentIndex === 0;
  prevBtn.disabled = currentIndex === comics.length - 1;
  newestBtn.disabled = currentIndex === 0;
  oldestBtn.disabled = currentIndex === comics.length - 1; 
}

function showComic(index) {
  if (index < 0 || index >= comics.length) return;

  currentIndex = index;

  const currentFile = comics[currentIndex];
  comicImg.src = currentFile;
  comicImg.alt = captions[currentFile] || `Comic ${currentIndex + 1}`;
  captionText.textContent = captions[currentFile] || "";

  const slug = encodeURIComponent(fileBase(currentFile));
  const newHash = `#${slug}`;

  if (window.location.hash !== newHash) {
    history.replaceState(null, "", newHash);
  }

  updateButtons();
}

function prevComic() {
  if (currentIndex >= comics.length - 1) return;
  trackNavigation("previous");
  showComic(currentIndex + 1);
}

function nextComic() {
  if (currentIndex <= 0) return;
  trackNavigation("previous");
  showComic(currentIndex - 1);
}

function randomComic() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * comics.length);
  } while (randomIndex === currentIndex && comics.length > 1);

  trackNavigation("random");
  showComic(randomIndex);
}

function newestComic() {
  trackNavigation("newest");
  showComic(0);
}

function oldestComic() {
  trackNavigation("oldest");
  showComic(comics.length - 1);
}

  // Event listeners
  nextBtn.addEventListener("click", nextComic);
  prevBtn.addEventListener("click", prevComic);
  randomBtn.addEventListener("click", randomComic);
  newestBtn.addEventListener("click", newestComic);
  oldestBtn.addEventListener("click", oldestComic);

  // Swipe gestures
  let startX = 0, startY = 0;
  document.addEventListener("touchstart", e => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", e => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - startX;
    const dy = endY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 60) {
      if (dx < 0) nextComic(); else prevComic();
    }
  }, { passive: true });

  // Keyboard controls
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextComic();
    if (e.key === "ArrowLeft")  prevComic();
  });

  // --- CHANGED: hash -> index via filename (no extension) ---
  function getComicFromHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#")) {
      const slug = decodeURIComponent(hash.slice(1));
      const idx = comics.findIndex(p => fileBase(p) === slug);
      if (idx !== -1) return idx;
    }
    return null;
  }

  // React to hash changes (for shared links)
  window.addEventListener("hashchange", () => {
    const idx = getComicFromHash();
    if (idx !== null && idx !== currentIndex) showComic(idx);
  });

  // Init
  const hashIndex = getComicFromHash();
  if (hashIndex !== null) showComic(hashIndex);
  else showComic(currentIndex);




});
