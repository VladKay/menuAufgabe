export class Separator{
    name;
    menuName;
    constructor(name,menuItem){
        this.name=name;
        this.menuName = menuItem;
  }
    render(){
        let separationLineElem = document.createElement("li");
        console.log("Separator Id:" +"separator"+this.menuName);
            separationLineElem.setAttribute("id","separator"+this.name);
            separationLineElem.style.display="block";
            separationLineElem.setAttribute("value","___________________________");
            separationLineElem.textContent += "___________________________";
            let menuItemToAppend = document.getElementById("menu"+this.menuName);
            menuItemToAppend.appendChild(separationLineElem);    
    }
}