var singleton = (function () {
    var instance;
    function init() {
        function privateMethod() {
            console.log("i'm a private method")
        }
        var privateVariable = "I'm also provate";
        var privateRandomNumber = Math.random();
        return {
            publicMethod: function () {
                console.log("public can see me")
            },
            publicProperty: "I'm also public",
            getRandomNumber: function () { return privateRandomNumber }
        }
    }
    return {
        getInstance: function () { 
            if (!instance) { 
                instance = init();
            }
            return instance;
        }
    }
})();

var singleA = singleton.getInstance();
var singleB = singleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber()===singleB.getRandomNumber())