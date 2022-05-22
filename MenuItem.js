export class MenuItem{
    content;
    handler;
    MenuItem(content,handler){
        this.content=content;
        this.handler=handler;
    }

    render(){return new MenuItem;}
}