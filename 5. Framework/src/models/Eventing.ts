type Callback = () => void;

export class Eventing{
    events: {[key:string]:Callback[]}={}

    on(eventName:string, callback: Callback){
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers
    }
    trigger(eventName:string){
        const handlers = this.events[eventName];
        if(!handlers || handlers.length<1){
            return;
        }else{
            handlers.forEach(callback=>{
                callback()
            })
        }
    }
}