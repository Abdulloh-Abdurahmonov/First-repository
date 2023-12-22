const links = document.querySelectorAll(".article-header-list-link");
const headline = document.querySelector(".article-headline");
const overlay = document.querySelector(".overlay");
const stages = document.querySelectorAll("#stage");
const projectBox = document.querySelector(".portfolio-container");
const clock = document.querySelector('.clock')


function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active-item");
  });
}

const tech_list = [
  '<i class="fa-brands fa-html5" style="color: #039bdd;"></i>',
  '<i class="fa-brands fa-css3-alt" style="color: #039bdd;"></i>',
  '<i class="fa-brands fa-js" style="color: #039bdd;"></i>',
  '<i class="fa-brands fa-react" style="color: #039bdd;"></i>',
  '<i class="fa-brands fa-angular" style="color: #039bdd;"></i>',
  '<i class="fa-brands fa-bootstrap" style="color: #039bdd;"></i>',
];
const tech_list_tech = ['html','css','js','react','angular','bootstrap']

// function articleClear(){
//     stages.forEach(stage=>{

//   })
// }

links.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active-item");
    headline.textContent = link.textContent;
    // if()
  });
});



projects.forEach((project) => {
  let techs = ``
  project.in_tech.forEach(tech=>{
    techs += `<p class="project-in-tech">${
      tech_list[tech_list_tech.indexOf(tech.toLowerCase())]
    } ${tech}</p>`;
  })
  projectBox.innerHTML += `
  <a href="${project.href}" target="_blank" class="project">
              <div class="project-img-box">
              <img src="${project.src}" alt="" class="project-img">
              </div>
              <div class="project-info">
                <h4 class="project-name">
                  ${project.name}
                </h4>
                <div class='tech-box'>
                  ${techs}
                  </div>
                
                <span class="project-date">29.10.2023</span>
              </div>
              <img src="./img/eye.png" class="eye hidden">
            </a>
  `;
  const projectList = document.querySelectorAll(".project");
  projectList.forEach((project) => {
    project.addEventListener("mousemove", () => {
      project.children[0].children[0].style.height = "350px";
      project.children[0].children[0].style.filter = "blur(3px)";
      project.children[2].classList.remove("hidden");
    });
    project.addEventListener("mouseout", () => {
      project.children[0].children[0].style.height = "250px";
      project.children[0].children[0].style.filter = "blur(0px)";
      project.children[2].classList.add("hidden");
    });
  });
});

// console.log(HTMLCollection(stages));
