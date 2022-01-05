"use strict";
/* What this script does:
1.) Sets up functionality for expanding/collapsing .project-fv sections through their respective buttons.
2.) Sets up IntersectionsObserver to reveal Contact Form on scroll.
 */

/* ******************************************************************* */
/* QUERY SELECTORS */
const learnMore = document.querySelectorAll(".project__link");

const projectImg = document.querySelectorAll(".project__img");
/* projectImg contains all images within a .project that serve as links */

const expandBtns = [...learnMore].concat([...projectImg]);
/* expandBtns contains all links that direct to a full-view project */

const collapseBtns = document.querySelectorAll(".collapse");
/* collapseView contains all links that collaps a full-view project */

const formContainer = document.querySelector(".contact__form-container");

/* ********************************************************************** */
/* FUNCTIONALITY FOR REVEALING .PROJECT-FV SECTIONS */

// Find the Full-View ID
const findFullView = function (e) {
  // Links in .project and .project-fv contain a data-target attribute, pointing to the ID of the .project-fv section that should be expanded/collapsed when button is clicked.  Store the id in fullViewID.
  const fullViewID = e.target.dataset.target;
  // Find the full-view section via ID and return.
  const fullView = document.getElementById(fullViewID);
  return fullView;
};

// Expand View
const expandView = function (e) {
  // asks findFullView() to determine the .project-fv to expand.
  const fullView = findFullView(e);
  // adds .active class to fullView, expanding and revealing the .project-fv.
  fullView.classList.add("active");
};

// Collapse View
const collapseView = function (e) {
  //asks findFullView() to determine the .project-fv to collapse.
  const fullView = findFullView(e);

  // removes .active class from fullView, collapsing and hiding the .project-fv.
  fullView.classList.remove("active");
};

// Setting up Event Listeners for Expand and Collapse Btns.  expandBtns will now reveal their respective .project-fv and collapseBtns will do the opposite.
expandBtns.forEach((btn) => btn.addEventListener("click", expandView));
collapseBtns.forEach((btn) => btn.addEventListener("click", collapseView));

/* ************************************************************************* */
/*FUNCTIONALITY FOR REVEALING FORM CONTAINER ON SCROLL */

/* Add .hidden class to __form-container */
formContainer.classList.add("hidden");

//Once the __form-container passes 20% through the viewport, reveal the container by removing the .hidden class.  Then unobserve the container.  Transition animations are handled through CSS.

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  //Once target passes the root threshold, the .hidden class will be removed.
  observer.unobserve(entry.target);
  //Removing observer for performance.
};
const obsOptions = {
  root: null,
  // null = viewport
  threshold: 0.2,
  // threshold = 20%
};

const formObserver = new IntersectionObserver(obsCallback, obsOptions);
formObserver.observe(formContainer);

/* ********************************************* */
//For mobile
// Once a project is ?px from the top of the viewport, change background?
