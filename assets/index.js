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
<button onclick="loadBtn('${mainButton.level_no}')" class="btn hover:bg-blue-600 hover:text-white"> <img src="fa-book-open.png" > Lesson-${mainButton.level_no}</button>
`;
    buttonContainer.appendChild(button);
  }
}

const loadBtn = (categoryName) => {
  console.log(categoryName);
spiner.style.display = "block";
  fetch(`https://openapi.programming-hero.com/api/level/${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.data){
        displayBtn(data.data);
        spiner.style.display = "none";
      }
    });
};

const displayBtn = (btns) => {
  // console.log(btns)

  const btnContainer = document.getElementById("btnContainer");
  const noDataSection = document.getElementById("noDataSection");
  const spiner = document.getElementById("spiner");
  btnContainer.innerHTML = "";
  if (btns.length === 0) {

    btnContainer.style.display = "none"; 
    noDataSection.style.display = "block";
     
  } else {
   btnContainer.style.display = "flex"; 
   btnContainer.style.flexWrap = "wrap"; 
   btnContainer.style.gap = "10px"; 
   noDataSection.style.display = "none";
  }
  btns.forEach((singleButton) => {
    console.log(singleButton);

    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card w-96 bg-base-100 card-md shadow-sm">
            <div class="card-body">
              <h2 class="card-title text-bolder text-2xl mx-auto">${singleButton.word}</h2>
              <p class="text-center font-bold text-sm">
                Meaning / Pronounciation
              </p>
              <div class="text-center text-xl font-bold">
                <p>${singleButton.meaning} / ${singleButton.pronunciation}</p>
              </div>
              <div class="flex items-center justify-between">
                <div onclick="handleDetails('singleButton.id')"><i class="fa-solid fa-circle-info"></i></div>
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

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const loginSection = document.getElementById("loginSection"); // লগইন সেকশন
  const navbar = document.getElementById("display"); // Navbar
  const buttonContainer = document.getElementById("button-container"); // Vocabulary Section

  if (username === "") {
    alert("⚠️ Username is required!");
    return;
  }

  if (password !== "123456") {
    alert("❌ Incorrect Password! Try Again.");
    return;
  }

  alert("✅ Login Successful! Welcome, " + username);

  // লগইন সফল হলে, লগইন সেকশন লুকাবে এবং Navbar দেখাবে
  loginSection.style.display = "none";
  navbar.style.display = "block";

  // Vocabulary Section স্ক্রল করবে
  buttonContainer.scrollIntoView({ behavior: "smooth" });
});



function showSection2() {
  const section2 = document.getElementById("section2");
  section2.scrollIntoView({ behavior: "smooth" });
}

const handleDetails=(id)=>{
  console.log(id)
}

loadBtn("level_no");
loadButton();
