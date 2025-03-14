function loadButton(){
fetch("https://openapi.programming-hero.com/api/levels/all")
.then(response =>response.json())
.then(data=>{
     showData(data);
})
}

function showData(btn){
     // console.log(btn.data)
     for(let i=0; i<btn.length; i++){
          console.log(btn[i])
     }

}
loadButton()

