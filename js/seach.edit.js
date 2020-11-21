var div = document.getElementById("result");

var inputEl = document.querySelectorAll("input");

var pEl = document.createElement("p");
var btnEl = document.getElementById("btn-submit");

var tableEl = document.createElement("table");
var th = document.createElement("th");
var td = document.createElement("td");



btnEl.addEventListener("click", function() {
    div.style.display = "block";
    // for (i of inputEl)
    // pEl.innerHTML += i.value;

    // div.appendChild(pEl);
})
