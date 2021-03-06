window.Register = function(config) {
    /*
    {
        'name': 'epi',
        'showName': 'EPI',
        'orientation': {
            'x': 150,
            'y': 10
        },
        'bus': 'em'
    }
    */
    this.attributes = {
        'el': config.name,
        'l': config.css.left,
    }
    this.bus = config.bus
    if(config.size!=undefined){
        this.attributes['size']=config.size
    }
    this.name = config.showName
    this.css = config.css
    this.store=new Storage(this.name,config.size);
    return this;
}
Register.prototype.render= function(selector){
    this.regObj = $('<div>').attr(this.attributes).addClass('registrador draggable').css(this.css);
    this.store.render(this.regObj);    

    this.selector = selector;
    $(selector).append(this.regObj);
}
Register.prototype.select=function(hide){
    $(this.regObj).highlight(hide);
}
Register.prototype.read=function(){
    return this.store.read();
}
Register.prototype.write=function(value){
    this.store.write(value);
}