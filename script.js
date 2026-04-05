document.addEventListener('DOMContentLoaded', () => {
  const comics = [
    "Images/Comics/260302-birdinthehand.jpg",
    "Images/Comics/260316-brazilian.jpg",
    "Images/Comics/260225-jumpon.jpg",
    "Images/Comics/260225-mutton.jpg",
    "Images/Comics/260306-doomscroll.jpg",
    "Images/Comics/260205-prelaugh.jpg",
    "Images/Comics/260215-cannibal.jpg",
    "Images/Comics/251208-canteloupe.jpg",
    "Images/Comics/260202-conjure.jpg",
    "Images/Comics/260127-pool.jpg",
    "Images/Comics/260118-tooold.jpg",
    "Images/Comics/260901-wurst.jpg",
    "Images/Comics/251224-forgot.jpg",
    "Images/Comics/251224-wingus.jpg",
    "Images/Comics/250925-grandma.jpg",
    "Images/Comics/251212-advent.jpg",
    "Images/Comics/251118-bulking.jpg",
    "Images/Comics/251107-holeinone.jpg",
    "Images/Comics/251118-allergies.jpg",
    "Images/Comics/251005-birthday.jpg",
    "Images/Comics/251107-latte.jpg",
    "Images/Comics/251025-cgull.jpg",
    "Images/Comics/250913-gambling.jpg",
    "Images/Comics/251014-emtea.jpg",
    "Images/Comics/250920-scuff.jpg",
    "Images/Comics/250926-jimmyfalcon.jpg",
    "Images/Comics/250821-bottlecap.jpg",
    "Images/Comics/220725-crossing.jpg",
    "Images/Comics/250903-globe.jpg",
    "Images/Comics/250826-hamsterz.jpg",
    "Images/Comics/250827-bwarehouse.jpg",
    "Images/Comics/250802-tweetboxing.jpg",
    "Images/Comics/050725-onthefence.jpg",
    "Images/Comics/270625-takingcontrol.jpg",
    "Images/Comics/210625spacewing.jpg",
    "Images/Comics/280625hammertime.jpg",
    "Images/Comics/020625-game.jpg",
    "Images/Comics/270125-snaked.jpg",
    "Images/Comics/300525-goodknightsleep.jpg",
    "Images/Comics/080425-quack.jpg",
    "Images/Comics/020125-featherforecast.jpg",
    "Images/Comics/201224-bunsout.jpg",
    "Images/Comics/080225-rats.jpg",
    "Images/Comics/300125-drumsticks.jpg",
    "Images/Comics/230125-bread.jpg",
    "Images/Comics/300125-exorcism.jpg",
    "Images/Comics/010125-opposite.jpg",
    "Images/Comics/130125-doctor.jpg",
    "Images/Comics/121224-bluesky.jpg",
    "Images/Comics/311224-stoneage.jpg",
    "Images/Comics/281124-selfacceptance.jpg",
    "Images/Comics/051224-meta.jpg",
    "Images/Comics/241204-milk.jpg",
    "Images/Comics/241024-clearmind.jpg",
    "Images/Comics/091124-cloud.jpg",
    "Images/Comics/221024-encouragemint.jpg",
    "Images/Comics/230524-birthday.jpg",
    "Images/Comics/050624-seesaw.jpg",
    "Images/Comics/261024-wednesday.jpg",
    "Images/Comics/260824-ibs.jpg",
    "Images/Comics/1801_yoursong.jpg",
    "Images/Comics/251223-jhammer.jpg",
    "Images/Comics/151223_backpain.jpg",
    "Images/Comics/301123-lion.jpg",
    "Images/Comics/291223-newear.jpg",
    "Images/Comics/221223_xmas.jpg",
    "Images/Comics/081223-plots.jpg",
    "Images/Comics/161123-doc.jpg",
    "Images/Comics/231023-killingtime.jpg",
    "Images/Comics/251123-notice.jpg",
    "Images/Comics/091123-parrot.jpg",
    "Images/Comics/paper230923.jpg",
    "Images/Comics/071023-caw.jpg",
    "Images/Comics/torcher300923.jpg",
    "Images/Comics/051023dumbbells.jpg",
    "Images/Comics/kernel180923.jpg",
    "Images/Comics/tomato.jpg",
    "Images/Comics/ajar.jpg",
    "Images/Comics/drawn.jpg",
    "Images/Comics/roast.jpg",
    "Images/Comics/vr.jpg",
    "Images/Comics/margville.jpg",
    "Images/Comics/cube.jpg",
    "Images/Comics/falsesalaam.jpg",
    "Images/Comics/library.jpg",
    "Images/Comics/atom.jpg",
    "Images/Comics/swimming.jpg",
    "Images/Comics/nutrigainz.jpg",
    "Images/Comics/parameds.jpg",
    "Images/Comics/school.jpg",
    "Images/Comics/robbery.jpg",
    "Images/Comics/sentience.jpg",
    "Images/Comics/talonshow.jpg",
    "Images/Comics/arabic.jpg",
    "Images/Comics/gasbill.jpg",
    "Images/Comics/fowlplay.jpg",
    "Images/Comics/yerasausage.jpg",
    "Images/Comics/chirp.jpg",
    "Images/Comics/hawkward.jpg",
    "Images/Comics/football.jpg",
    "Images/Comics/shredded.jpg",
    "Images/Comics/fountain.jpg",
    "Images/Comics/techsupport2.jpg",
    "Images/Comics/mywing.jpg",
    "Images/Comics/may2nd.jpg",
    "Images/Comics/comedihen.jpg",
    "Images/Comics/thebill.jpg",
    "Images/Comics/fitr.jpg",
    "Images/Comics/baddream.jpg",
    "Images/Comics/flamingo.jpg",
    "Images/Comics/nesthog.jpg",
    "Images/Comics/ramadan.jpg",
    "Images/Comics/shower.jpg",
    "Images/Comics/wronghouse.jpg",
    "Images/Comics/Drawinggame.jpg",
    "Images/Comics/aprilfools.jpg",
    "Images/Comics/parrot.jpg",
    "Images/Comics/mothersday.jpg",
    "Images/Comics/flightschool.jpg",
    "Images/Comics/Beesknees.jpg",
    "Images/Comics/T-shirt.jpg",
    "Images/Comics/tennis.jpg",
    "Images/Comics/Gymspot.jpg",
    "Images/Comics/Guitar.jpg",
    "Images/Comics/DrDoctor.jpg",
    "Images/Comics/Qubits.jpg",
    "Images/Comics/Echo.jpg",
    "Images/Comics/Chips.jpg",
    "Images/Comics/MeetingRobin.jpg",
    "Images/Comics/SausageBirdAnatomy1.jpg",
    "Images/Comics/MilitarySausage.jpg",
    "Images/Comics/Robinfeatherlife_fullcomic.jpg",
    "Images/Comics/ITSausageBird.jpg",
    "Images/Comics/SausageBirdBread1.jpg"
  ].map(p => p.trim());

  // Optional captions
  const captions = { };

  let currentIndex = 0;

  // Elements
  const comicImg    = document.getElementById("comic");
  const captionText = document.getElementById("caption");
  const prevBtn     = document.getElementById("prev-btn");
  const nextBtn     = document.getElementById("next-btn");
  const randomBtn   = document.getElementById("random-btn");

  if (!comicImg || !captionText || !prevBtn || !nextBtn || !randomBtn) {
    console.error("Missing required elements (#comic, #caption, #prev-btn, #next-btn, #random-btn).");
    return;
  }

  // assumes you already have: const comics = [ "Images/Comics/....jpg", ... ];

  // Helper: file base name without extension
  function fileBase(path) {
    return path.split("/").pop().replace(/\.[^.]+$/, "");
  }

  function showComic(index) {
    if (index < 0) index = comics.length - 1;
    if (index >= comics.length) index = 0;
    currentIndex = index;

    const currentFile = comics[currentIndex];
    comicImg.src = currentFile;
    comicImg.alt = captions[currentFile] || `Comic ${currentIndex + 1}`;
    captionText.textContent = captions[currentFile] || "";

    // --- CHANGED: put filename (no extension) in the hash ---
    const slug = encodeURIComponent(fileBase(currentFile));
    const newHash = `#${slug}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, "", newHash); // avoids scroll jumps
    }
  }

  function nextComic() { showComic(currentIndex - 1); }  // array is newest-first
  function prevComic() { showComic(currentIndex + 1); }

  function randomComic() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * comics.length);
    } while (randomIndex === currentIndex && comics.length > 1);
    showComic(randomIndex);
  }

  // Event listeners
  nextBtn.addEventListener("click", nextComic);
  prevBtn.addEventListener("click", prevComic);
  randomBtn.addEventListener("click", randomComic);

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
