export class MenuItem{
    content;
    handler;
    constructor(content,handler){
        this.content=content;
        this.handler=handler;
    }

    render(){return new MenuItem;}
}