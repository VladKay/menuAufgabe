import { MenuItem } from "./MenuItem.js"
export class Menu{
    name;
    separationLines = [];
    menuItems= new Map(); 

    constructor (name){
        this.name = name;
    }

    addItem(content, handler){
        console.log("AddItem: "+content);
        let menuItem = new MenuItem(content, handler);
        this.menuItems.set("content",menuItem);
        // let listElem = document.createElement("li");
        // listElem.style.display="none";
        // listElem.setAttribute("value",content);
        // listElem.setAttribute("value",content);
        // listElem.textContent += content;
        // let listDOM = document.getElementById("menu"+this.name);
        // listDOM.appendChild(listElem);
    }
     addItems(items){

     }
     show(x, y){

     }
     hide(){

     }

     render(){return new MenuItem;}

}