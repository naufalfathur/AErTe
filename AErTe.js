const style = document.createElement("style");
style.innerHTML = `
body {
    font-weight: 600;
    margin: 0;
    font-family: Poppins;
}

.topnav {
    height: 54px;
    background-color: #333;
    z-index: -1;
}

.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.logo {
    background-color: #04AA6D;
    color: white;
}

.allScriptBtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }
  
  .allScript {
    position: relative;
    display: inline-block;
  }
  
  .allScriptMenu {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .allScriptMenu a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .allScriptMenut a:hover {background-color: #ddd;}
  
  .allScript:hover .allScriptMenu {display: block;}
  
  .allScript:hover .allScriptBtn {background-color: #3e8e41;}
`;
const topnav = document.createElement("div");
topnav.className = "topnav";
const logo = document.createElement("a");
logo.className = "logo";
logo.innerText = "AErTe";
logo.href = "#home";

document.head.appendChild(style);
document.body.prepend(topnav);
topnav.appendChild(logo);

let allScripts = [
  {
    name: "Get Schedule Email",
    funct: getScheduleEmail,
  },
  {
    name: "EC Form Filler+",
    funct: ecFormFiller,
  },
  {
    name: "AutoPIN",
    funct: autoPIN,
  },
];

let externalMenu = [
  {
    name: "Get Schedule Email",
    funct: getScheduleEmail,
  },
  {
    name: "EC Form Filler+",
    funct: ecFormFiller,
  },
  {
    name: "AutoPIN",
    funct: autoPIN,
  },
];

const allScript = document.createElement("a");
allScript.className = "allScript";
allScript.innerText = "All Script V";
const allScriptBtn = document.createElement("button");
allScriptBtn.className = "allScriptBtn";
const allScriptMenu = document.createElement("div");
allScriptMenu.className = "allScriptMenu";
allScriptBtn.appendChild(allScriptMenu);
allScript.appendChild(allScriptBtn);
topnav.appendChild(allScript);

for (let i = 0; i < allScripts.length; i++) {
    let menu = document.createElement("a");
    menu.className = "menu";
    menu.innerText = externalMenu[i].name;
    menu.onclick = externalMenu[i].funct;
    allScriptMenu.appendChild(menu);
    if(i == allScripts.length-1 ){
        console.log("e")
        addExternal()
    }
}

function addExternal(){
    for (let i = 0; i < externalMenu.length; i++) {
        let menu = document.createElement("a");
        menu.className = "menu";
        menu.innerText = externalMenu[i].name;
        menu.onclick = externalMenu[i].funct;
        topnav.appendChild(menu);
      }
}



function getScheduleEmail() {
  console.log("Yes");
}

function ecFormFiller() {
  console.log("Yes");
}

function autoPIN() {
  console.log("Yes");
}
