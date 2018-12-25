let tempData = "";

module.exports = {

    set: function(msg){
        tempData = msg;
    },
    get: function(){
        return tempData;
    },

    doIt: function(){
        console.log("Did it!");
    },
    doSomething: function(){
        console.log("Did something!");
    },
    getItDone: function(){
        console.log("Go it done!");
    }
}