let projects, links, des;

projects = document.querySelector(".projects");
links = document.querySelector(".links-container");

function getProjects() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const sorted = JSON.parse(this.response);
      const response = sorted.sort((a, b) => b.id - a.id);
      response.map((project) => {
        projects.innerHTML += `
          <div class='card'>
            <a href='${project.export}' target='_blank' class='card-image' style='background-image: url("${project.image}")'></a>
            <section class='card-body'>
              <span>${project.name}</span>
            </section>
          </div>
        `;
      });
    }
  };
  xhr.open("GET", "../../projects.json", true)
  xhr.send();
}

function getLinks() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.response);
      response.map((link) => {
        if (link.description) des = link.description;
        else des = "";
        links.innerHTML += `
          <li class='link-item'>
            <a href='${link.href}' target='_blank' class='link'>${link.name}</a>
            <span class='description'>${link.description}</span>
          </li>
        `;
      });
    }
  };
  xhr.open("GET", "../../links.json", true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", getProjects);
document.addEventListener("DOMContentLoaded", getLinks);