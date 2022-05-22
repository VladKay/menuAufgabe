import { MenuItem } from "./MenuItem.js"
import { Separator } from "./Separator.js";
export class Menu{
    name;
    separationLines = new Map();
    menuItems= new Map(); 

    constructor (name){
        this.name = name;
    }

    addItem(content, handler){
        console.log("AddItem: "+content);
        let menuItem = new MenuItem(content, handler);
        this.menuItems.set(content,menuItem);
        console.log("Alle Items der Menu");
        this.menuItems.forEach((key,value) => {
            console.log(key);
        });
    }
     addItems(items){

     }
     show(x, y){

     }
     hide(){

     }

     addSeparator(itemName){
        let separationLine = new Separator("separator"+itemName,this.name);
        this.separationLines.set(separationLine.name,separationLine);
     }

     render(){return new MenuItem;}

}