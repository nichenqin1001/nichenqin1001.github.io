function toArray(dom) {
  return Array.prototype.slice.call(dom);
}

(function () {
  var wallOptions = {
    sectionAnimateDuration: 0.6
  }
  var resume = new Wall('#main', wallOptions);

  var welcomeMain = document.querySelector('.welcome__main');
  var welcomeNext = document.querySelector('.welcome__next');

  welcomeNext.addEventListener('click', function () {
    resume.nextSection()
  });

  setTimeout(function () {
    welcomeMain.classList.add('showcase');
    welcomeNext.classList.add('showcase');
  }, 1500)

  var nextArrows = toArray(document.getElementsByClassName('arrow'));
  nextArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      resume.nextSection();
    })
  })
})()
