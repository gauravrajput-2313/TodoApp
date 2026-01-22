const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const value = inputBox.value.trim();
  if (value === "") {
    alert("You must write something");
    return;
  }

  let li = document.createElement("li");
  li.innerText = value;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.setAttribute("aria-label", "delete");
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.tagName === "SPAN") {
    li.remove();
    saveData();
    return;
  }

  li.classList.toggle("checked");
  saveData();
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  listContainer.innerHTML = data ? data : "";
}

showTask();
