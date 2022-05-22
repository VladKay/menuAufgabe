import { MenuApi } from "./MenuApi.js";
    const createBTN = document.getElementById('createBTN');
    const addItemBTN = document.getElementById('addItemBTN');
    const renderBTN = document.getElementById('renderBTN');
    const showBTN = document.getElementById('showBTN');
    const hideBTN = document.getElementById('hideBTN');
    const addSeparatorBTN = document.getElementById('addSeparatorBTN');
    const menuName = document.getElementById("menuName");
    const itemContent = document.getElementById("itemContent");
    const positionX = document.getElementById("positionX");
    const positionY = document.getElementById("positionY");
    const menuApi = new MenuApi;
    showBTN.addEventListener("click",showMenu);
    addItemBTN.addEventListener("click",addItem);
    renderBTN.addEventListener("click",renderMenu)
    hideBTN.addEventListener("click",hideMenu);
    createBTN.addEventListener("click",createMenu);
    addSeparatorBTN.addEventListener("click",addSeparator);

    function addSeparator(e){
        let menu = menuApi.menus.get(menuName.value);
        menu.addSeparator(itemContent.value);
    }

    function createMenu(e){
        console.log("create Menu: "+menuName.value);
        menuApi.createMenu(menuName.value);
    }

    function renderMenu(e){
        console.log("Render Menu: "+menuName.value);
        menuApi.createMenuDOM(menuName.value);
    }

    function addItem(e){
        console.log("Add Item: "+itemContent.value);
        menuApi.addMenuItem(menuName.value,itemContent.value)
    }


    function showMenu(e){
        menuApi.createMenu("Show menu: "+menuName.value);
        menuApi.show(menuName.value,positionX.value,positionY.value)
    }

    function hideMenu(e){
        console.log("Hide menu: "+menuName.value);
        menuApi.hide(menuName.value)
    }
