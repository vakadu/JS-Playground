(function(global) {
    
    function jquery(selector) {
        return new MiniQuery(selector)
    }
    
    function MiniQuery(selector) {
        this.elements = document.querySelectorAll(selector)
    }

    MiniQuery.prototype.text = function(content) {
        this.elements.forEach((element) => { 
            element.textContent = content           
        })
        return this
    }

    MiniQuery.prototype.on = function(eventType, cb) {
        this.elements.forEach((element) => {
            element.addEventListener(eventType, cb)            
        })  
        return this              
    }

    global.jquery = jquery
    
})(window);
