// Load SVG content into the placeholder
function loadSVG(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        callback(xhr.responseXML.documentElement);
      }
    }
  };
  xhr.send(null);
}

// Load SVG file
loadSVG("/Manoline-git.github.io/assets/svg/walker.svg", function (svgContent) {
  var svgPlaceholder = document.getElementById("svg");
  svgPlaceholder.setAttribute("transform", "translate(50,0)");
  svgPlaceholder.appendChild(svgContent);

  // Once SVG content is loaded, animate the objects
  animateObjects();
});

// Animate objects using GSAP
function animateObjects() {
  var walker = document.getElementById("walker");
  document.getElementById("svg").appendChild(walker);
  walker.setAttribute("transform", "translate(100, 0)");
  walker.setAttribute("opacity", 0);
  var walkers = [];
  var num = 7;
  var inx = 100;
  var shift = 100;

  // Create walker clones
  for (var i = 0; i < num; i++) {
    var w = walker.cloneNode(true);
    w.removeAttribute("id");
    walkers.push(w);
    document.getElementById("svg").appendChild(walkers[i]);
    walkers[i].setAttribute("x", inx);
    walkers[i].setAttribute("opacity", 1);
  }

  // Define the animation timeline
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  // Add animations to the timeline
  tl.to(
    walkers[0],
    1,
    { x: inx, y: 0, opacity: 0.33, ease: Power1.easeInOut },
    0
  )
    .to(
      walkers[1],
      1,
      { x: inx + shift, y: 0, opacity: 0.33, ease: Power1.easeInOut },
      0
    )
    .to(
      walkers[2],
      1,
      { x: inx - shift, y: 0, opacity: 0.33, ease: Power1.easeInOut },
      0
    )
    .to(
      walkers[3],
      1,
      { x: inx + shift, y: 0, opacity: 0, ease: Power1.easeInOut },
      0
    )
    .to(
      walkers[4],
      1,
      { x: inx - shift, y: 0, opacity: 0, ease: Power1.easeInOut },
      0
    )
    .to(
      walkers[5],
      1,
      { x: inx + shift, y: 0, opacity: 0, ease: Power1.easeInOut },
      0
    )
    .to(
      walkers[6],
      1,
      { x: inx - shift, y: 0, opacity: 0, ease: Power1.easeInOut },
      0
    )
    .call(secondMove); // Call secondMove function after the main animation completes

  // Define secondMove function
  function secondMove() {
    tl.to(
      walkers[3],
      1,
      { x: inx + 2 * shift, y: 0, opacity: 0.2, ease: Power1.easeInOut },
      1
    )
      .to(
        walkers[4],
        1,
        { x: inx - 2 * shift, y: 0, opacity: 0.2, ease: Power1.easeInOut },
        1
      )
      .to(
        walkers[5],
        1,
        { x: inx, y: 0, opacity: 0.2, ease: Power1.easeInOut },
        1
      )
      .to(
        walkers[6],
        1,
        { x: inx, y: 0, opacity: 0.2, ease: Power1.easeInOut },
        1
      )
      .to({ onComplete: restartAnimation }, "+1");
    //   .call(restartAnimation); // Call restartAnimation function after secondMove completes
    // document.getElementById('svg').addEventListener('click', restartAnimation);
  }

  // Define restartAnimation function
  function restartAnimation() {
    tl.restart(); // Restart the animation timeline
  }
}
