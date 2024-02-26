const arrayOfObjects = [
    {
      id: 1,
      fontFamily: "Roboto",
      fontSize: 16,
    },
  
    {
      id: 2,
      fontFamily: "Arial",
      fontSize: 20,
    },
    {
      id: 3,
      fontFamily: "cursive",
      fontSize: 25,
      
    },
    {
      id: 4,
      fontFamily: "fantasy",
      fontSize: 30,

    },
  ];



let fontFamily=document.getElementById("fontFamily");
let fontSize=document.getElementById("fontSize");
let color=document.getElementById("color");
let input=document.getElementById("input");
let firCon=document.getElementById("firCon");
let inputText=document.getElementById("inputText");
let addButton=document.getElementById("addButton");
let newElementsContainer=document.getElementById("newElementsContainer");
let newTextAddCon=document.getElementById("newTextAddCon")

input.addEventListener("change",(event)=>{
    input.setAttribute("value",event.target.value);
    inputText.textContent=event.target.value;
})

for(let i of arrayOfObjects){
    let option=document.createElement("option");
    //option.value="1";
    option.id=i.id;   
    option.textContent=i.fontFamily;
    fontFamily.appendChild(option);
}

fontFamily.addEventListener("change",(e)=>{
    inputText.style.fontFamily=e.target.value;
});

for(let i of arrayOfObjects){
    let option=document.createElement("option");
    //option.value="1";
    option.id=i.id;   
    option.textContent=i.fontSize;
    fontSize.appendChild(option);
}

fontSize.addEventListener("change",(e)=>{
    inputText.style.fontSize=e.target.value+"px";
})

color.addEventListener("change",(e)=>{
    inputText.style.color=e.target.value;
});

addButton.addEventListener("click",()=>{
    let newInputEle=document.createElement("input");
    newInputEle.addEventListener("change",(event)=>{
        newInputEle.setAttribute("value",event.target.value);
        let newText=document.createElement("p");
        newText.textContent=event.target.value;
        newTextAddCon.appendChild(newText);
    });
    newElementsContainer.appendChild(newInputEle);
   
})