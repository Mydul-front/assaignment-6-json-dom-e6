function loadButton() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    });
}
//  {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

function showData(btn) {
  //   console.log(btn.data)
  for (let i = 0; i < btn.data.length; i++) {
    console.log(btn.data[i]);
    const mainButton = btn.data[i];
    const buttonContainer = document.getElementById("button-container");
    const button = document.createElement("div");
    button.classList.add("buttonDesign");
    button.innerHTML = `
<button onclick="loadBtn('${mainButton.level_no}')" class="btn "> <img src="fa-book-open.png" > Lesson-${mainButton.level_no}</button>
`;
    buttonContainer.appendChild(button);
  }
}

const loadBtn = (categoryName) => {
  console.log(categoryName);
  fetch(`https://openapi.programming-hero.com/api/level/${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      displayBtn(data.data);
    });
};

const displayBtn = (btns) => {
  // console.log(btns)
  btns.forEach((singleButton) => {
    console.log(singleButton);
    const btnContainer = document.getElementById("btnContainer");
    btnContainer.innerHTML='';
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card w-96 bg-base-100 card-md shadow-sm">
            <div class="card-body">
              <h2 class="card-title mx-auto">${singleButton.word}</h2>
              <p class="text-center">
                ${singleButton.meaning} / ${singleButton.pronunciation}
              </p>
              <div class="text-center">
                <p>Meaning</p>
              </div>
              <div class="flex items-center justify-between">
                <div><i class="fa-solid fa-circle-info"></i></div>
                <div><i class="fa-solid fa-volume-low"></i></div>
              </div>
            </div>
          </div>
          `;
    btnContainer.appendChild(div);
  });
};

// login section

document.getElementById("loginForm").addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username =="" || password == "") {
    alert("Username and password are required");
    return;
  }

  if (password !== "123456") {
    alert("Incorrect password");
    return;
  }

  alert("Login Successful");
  
});


loadBtn("level_no");
loadButton();
