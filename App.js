const headContainer = document.querySelector(".headImageContainer");
const nameText = document.querySelector(".nameText");
const jobTitle = document.querySelector(".jobTitles");
const jobTitles2 = document.querySelector(".jobTitles2");
const laptopImg = document.querySelector(".laptopImg");
const gitText = document.querySelector(".gitText");
const githubImage = document.querySelector(".githubImage");
window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  console.log(offset);
  headContainer.style.transform = `translate(${offset * 0.4}px, ${
    offset * 0.4
  }px)`;
  nameText.style.transform = `translateX(calc(50vw - ${offset * 0.8}px))`;
  jobTitle.style.transform = `translateX(calc(-30vw + ${offset * 0.4}px))`;
  jobTitles2.style.transform = `translateX(calc(100vh - ${offset * 0.4}px))`;
  laptopImg.style.transform = `translateY(calc(150vh - ${offset * 0.5}px))`;
  gitText.style.transform = `translateX(calc(150vh - ${offset * 0.8}px))`;
  githubImage.style.transform = `translateX(calc(150vh - ${offset * 0.8}px))`;
});
