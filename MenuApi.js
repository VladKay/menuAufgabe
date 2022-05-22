import {Menu} from "./Menu.js";
/*import { MenuItem } from "./MenuItem.js";
import { Separator } from "./Separator.js";*/
export class MenuApi{
    menus = new Map();

    show(name,x,y){
        console.log("Show Menu: "+name);
        let menu = this.menus.get(name);
        this.createMenuDOM(name);
        console.log(menu);
        let menuDOM = document.getElementById(menu.name); 
        menuDOM.style.position = 'absolute';
        menuDOM.style.top = x + "px";
        menuDOM.style.left = y + "px";
        menuDOM.style.display = "block";
    }

    createMenu(name) {
        console.log("Create Menu");
        let menu = new Menu(name);
        this.menus.set(name,menu);
        // let menuDOM = document.createElement("div");
        // let container = document.getElementById("main");
        // menuDOM.setAttribute("id",name);
        // menuDOM.style.borderColor = "coral";
        // menuDOM.setAttribute( "height", "2000px");
        // menuDOM.setAttribute("width","2000px");
        // let listDOM = document.createElement("ul");
        // listDOM.setAttribute("id","menu"+name)
        // let listElem = document.createElement("li");
        // listElem.setAttribute("value",name);
        // listElem.textContent += name;
        // listDOM.appendChild(listElem);
        // menuDOM.appendChild(listDOM);
        // container.appendChild(menuDOM);
        //return menu;
    }

    addMenuItem(menuName, itemContent){
        let menu = new Menu();
        menu = this.menus.get(menuName)
        menu.addItem(itemContent,null);
    }



    print(){
        for(var i=0; i< this.menus.length; i++){
            console.log(this.menus[i]);
           }
    }

    hide(menuName){
        console.log("Hide Menu: "+ menuName);
        let menuDOM = document.getElementById(menuName);
        menuDOM.style.display="none"; 
        console.log(menuDOM);
        //menuDOM.setAttribute("hide", true);
    }
    createMenuItem(){

    }
    createSeparator(){

    }

    createMenuDOM(menuName){
        let menu = this.menus.get(menuName);
        let menuDOM = document.createElement("div");
        let container = document.getElementById("main");
        menuDOM.setAttribute("id",menu.name);
        menuDOM.style.borderColor = "coral";
        menuDOM.setAttribute( "height", "2000px");
        menuDOM.setAttribute("width","2000px");
        let listDOM = document.createElement("ul");
        listDOM.setAttribute("id","menu"+menu.name);
        menuDOM.appendChild(listDOM);
        container.appendChild(menuDOM);
        menu.menuItems.forEach((key,value) => {
            console.log("Current iteration on: "+value.content);    
            let listElem = document.createElement("li");
            listElem.setAttribute("id",value.content);
            listElem.style.display="block";
            listElem.setAttribute("value",value.content);
            listElem.textContent += value.content;
            let listDOM = document.getElementById("menu"+menuName);
            listDOM.appendChild(listElem);
        });
    }
}