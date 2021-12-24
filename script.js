"use strict";

const learnMore = document.querySelectorAll(".project__link");

const projectImg = document.querySelectorAll(".project__img");
/* projectImg contains all images within a project that serve as links */

const expandBtns = [...learnMore].concat([...projectImg]);
/* expandBtns contains all links that direct to a full-view project */

const collapseBtns = document.querySelectorAll(".collapse");
/* collapseView contains all links that collaps a full-view project */

const formContainer = document.querySelector(".contact__form-container");

// Find the Target ID
const findTarget = function (e) {
  console.log("E.TARGET:");
  console.log(e.target);
  const temp = e.target.dataset.target;

  const target = document.getElementById(temp);
  console.log(target);
  return target;
  /* The returned target is the div that the link's href points to */
};

// Expand View
const expandView = function (e) {
  const target = findTarget(e);
  target.classList.add("active");
};

// Collapse View
const collapseView = function (e) {
  const target = findTarget(e);
  target.classList.remove("active");
};

// Scroll to Target
expandBtns.forEach((btn) => btn.addEventListener("click", expandView));
collapseBtns.forEach((btn) => btn.addEventListener("click", collapseView));

/* ******************************** */
/* REVEAL FORM CONTAINER ON SCROLL */

/* Add .hidden class to __form-container */
formContainer.classList.add("hidden");

//Once the __form-container passes 20% through the viewport, reveal the container by removing the .hidden class.  Then unobserve the container.

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  console.log(entry);
  // observer.unobserve(entry.target);
};
const obsOptions = {
  root: null,
  threshold: 0.2,
};
const formObserver = new IntersectionObserver(obsCallback, obsOptions);
console.log(formObserver);

formObserver.observe(formContainer);

/* ********************************************* */
//For mobile
// Once a project is ?px from the top of the viewport, change background?
