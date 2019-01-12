"use strict";

// let globalVariable = 0;
//IIFE - Immediately Involed Function Execution
(function(){

    function Start(){
        let startVariable = 0;
        console.log(`%cApp Stared... ${startVariable}`, "color: blue; font-size:15px;");
    }

    window.addEventListener("load", Start);

})();