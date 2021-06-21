const ul = document.getElementById("links");

function callAPI() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.response);
      response.map(function (item) {
        links.innerHTML +=
          "<li class='li'><a href=" +
          item.url +
          " class='link' target='_blank'>" +
          item.name +
          "</a></li>";
      });
    }
  };
  xhr.open("GET", "../../api.json", true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", callAPI());
