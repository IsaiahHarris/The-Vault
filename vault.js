'use strict';
module.exports = function() {
    var vault = {}
    return{
        setValue: function(key, value){
            vault[key] = value
        },
        getValue: function(key){
            if (!key || !vault.hasOwnProperty(key)){
                return null
            } else {
                return vault[key]
            }
        }
    }
}

        
            