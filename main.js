document.addEventListener("scroll", function () {
  const featureBoxes = document.querySelectorAll(".dig_featureBox");
  const windowHeight = window.innerHeight;

  featureBoxes.forEach((box, index) => {
    const rect = box.getBoundingClientRect();
    const nextBox = featureBoxes[index + 1];

    let opacity = 1;

    if (nextBox) {
      const nextRect = nextBox.getBoundingClientRect();

      if (nextRect.top < rect.bottom) {
        const overlap = rect.bottom - nextRect.top;
        opacity = Math.max(1 - overlap / windowHeight, 0);
      }
    }

    const titleDiv = box.querySelector(".dig_featureTitle");
    if (titleDiv) {
      titleDiv.style.opacity = opacity;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const target1 = document.getElementById("firstCard");
  const target2 = document.getElementById("secondCard");
  const target3 = document.getElementById("thirdCard");
  const target4 = document.getElementById("fourthCard");
  const target5 = document.getElementById("fifthCard");
  const target6 = document.getElementById("sixthCard");

  let lastScrollTop = 0;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const currentScrollTop = window.scrollY || window.pageYOffset;
        const isScrollingUp = currentScrollTop < lastScrollTop;

        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "firstCard":
              break;
            case "secondCard":
              target1.classList.add("one");
              break;
            case "thirdCard":
              target1.classList.remove("one");
              target1.classList.add("two");
              target2.classList.add("one");
              break;
            case "fourthCard":
              target1.classList.remove("two");
              target2.classList.remove("one");
              target1.classList.add("three");
              target2.classList.add("two");
              target3.classList.add("one");
              break;
            case "fifthCard":
              target1.classList.remove("three");
              target2.classList.remove("two");
              target3.classList.remove("one");
              target1.classList.add("four");
              target2.classList.add("three");
              target3.classList.add("two");
              target4.classList.add("one");
              break;
            case "sixthCard":
              target1.classList.remove("four");
              target2.classList.remove("three");
              target3.classList.remove("two");
              target4.classList.remove("one");
              target1.classList.add("five");
              target2.classList.add("four");
              target3.classList.add("three");
              target4.classList.add("two");
              target5.classList.add("one");
              break;
            default:
              break;
          }
        } else if (isScrollingUp) {
          // Reverse the classes only when scrolling up
          switch (entry.target.id) {
            case "sixthCard":
              target1.classList.remove("five");
              target2.classList.remove("four");
              target3.classList.remove("three");
              target4.classList.remove("two");
              target5.classList.remove("one");
              target1.classList.add("four");
              target2.classList.add("three");
              target3.classList.add("two");
              target4.classList.add("one");
              break;
            case "fifthCard":
              target1.classList.remove("four");
              target2.classList.remove("three");
              target3.classList.remove("two");
              target4.classList.remove("one");
              target1.classList.add("three");
              target2.classList.add("two");
              target3.classList.add("one");
              break;
            case "fourthCard":
              target1.classList.remove("three");
              target2.classList.remove("two");
              target3.classList.remove("one");
              target1.classList.add("two");
              target2.classList.add("one");
              break;
            case "thirdCard":
              target1.classList.remove("two");
              target2.classList.remove("one");
              target1.classList.add("one");
              break;
            case "secondCard":
              target1.classList.remove("one");
              break;
            case "firstCard":
              break;
            default:
              break;
          }
        }
      });
      lastScrollTop = window.scrollY || window.pageYOffset;
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  observer.observe(target1);
  observer.observe(target2);
  observer.observe(target3);
  observer.observe(target4);
  observer.observe(target5);
  observer.observe(target6);
});

const myButton = document.getElementById("toggleHeader");
const myDiv = document.getElementById("secondHeader");
const line = document.getElementById("line");

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  myDiv.classList.toggle("closed");
  line.classList.toggle("headerChanged");
});
