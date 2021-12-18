"use strict";

const learnMore = document.querySelectorAll(".project__link");
const projectImg = document.querySelectorAll(".project__img");
const expandBtns = [...learnMore].concat([...projectImg]);
/* expandBtns contains all links that direct to a full-view project */

const collapseBtns = document.querySelectorAll(".collapse");
/* collapseView contains all links that collaps a full-view project */

console.log(collapseBtns);

// Find the Target ID

const findTarget = function (e) {
  console.log("E.TARGET:");
  console.log(e.target);
  const temp = e.target.dataset.target;

  const target = document.getElementById(temp);
  console.log(target);
  return target;
};

// Expand View
const expandView = function (e) {
  const parent = e.target.closest(".project");
  console.log(parent);
  //   parent.style.backgroundPosition = "100%";
  //   console.log(parent.children);
  //   [...parent.children].forEach(
  //     (child) => (child.style.backgroundPosition = "100%")
  //   );
  const target = findTarget(e);
  target.classList.add("active");
};

const collapseView = function (e) {
  const target = findTarget(e);
  target.classList.remove("active");
};

// Collapse View

// Scroll to Target

// learnMore.forEach.addEventlistener("click", expandView);
expandBtns.forEach((btn) => btn.addEventListener("click", expandView));
collapseBtns.forEach((btn) => btn.addEventListener("click", collapseView));
