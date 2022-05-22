import { MenuApi } from "./MenuApi.js";
    const createBTN = document.getElementById('createBTN');
    const addItemBTN = document.getElementById('addItemBTN');
    const showBTN = document.getElementById('showBTN');
    const hideBTN = document.getElementById('hideBTN');
    const menuName = document.getElementById("menuName");
    const itemContent = document.getElementById("itemContent");
    let menuApi = new MenuApi;
    showBTN.addEventListener("click",showMenu);
    addItemBTN.addEventListener("click",addItem);
    hideBTN.addEventListener("click",hideMenu);
    createBTN.addEventListener("click",createMenu);

    function createMenu(e){
        console.log("create Menu: "+menuName.value);
        menuApi.createMenu(menuName.value)
    }

    function addItem(e){
        console.log("Add Item: "+itemContent.value);
        menuApi.addMenuItem(menuName.value,itemContent.value)
    }


    function showMenu(e){
        menuApi.createMenu("Show menu: "+menuName.value);
        //menuApi.print();
        menuApi.show(menuName.value,250,125)
    }

    function hideMenu(e){
        console.log("Hide menu: "+menuName.value);
        menuApi.hide(menuName.value)
    }
