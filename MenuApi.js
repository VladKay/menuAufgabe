import {Menu} from "./Menu.js";
export class MenuApi{
    menus = new Map();

    show(name,x,y){
            console.log("Show Menu: "+name);
            let menuDOM = document.getElementById(name); 
            menuDOM.style.position = 'absolute';
            menuDOM.style.top = x + "px";
            menuDOM.style.left = y + "px";
            menuDOM.style.display = "block";
        }

    createMenu(name) {
        console.log("Create Menu");
        let menu = new Menu(name);
        this.menus.set(name,menu);
    }

    addMenuItem(menuName, itemContent){
        let menu = this.menus.get(menuName)
        console.log("AddMenuItem: "+itemContent);
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
    }

    addSeparator(){

    }

    createMenuDOM(menuName){
        let oldMenu = document.getElementById(menuName); 
        if(oldMenu!==null){
            oldMenu.remove();
        }
        let menu = this.menus.get(menuName);
        console.log("Menu: "+menu.name);    
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
        let menuItems = menu.menuItems;
        let separationLines = menu.separationLines.values;
        console.log(separationLines.length)
        
        menuItems.forEach((values,keys) => {
            console.log("Key "+keys);
            console.log("Value "+values.content);
            console.log("Current iteration on: "+values.content);    
            let listElem = document.createElement("li");
            listElem.setAttribute("id",values.content);
            //listElem.style.display="block";
            listElem.setAttribute("value",values.content);
            listElem.textContent += values.content;
            let listDOM = document.getElementById("menu"+menuName);
            listDOM.appendChild(listElem);
            let separator = menu.separationLines.get("separator"+keys);
            console.log("separator"+keys);
            if(separator!==undefined){
                console.log(separator.name);
                separator.render();
            }
        });
        
        menuDOM.style.display="none"; 
    }
}