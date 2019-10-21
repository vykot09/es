"use strict";

let mozgat = function () {};

function pattog(elem){
    let pos = 0;
    mozgat=window.setInterval(frame, 1);

    function frame(){
        if(pos < 350){
            pos++;
            elem.style.top = `${pos}px`;
        }else if(pos < 500){
            pos++;
            elem.style.top = `${700 - pos}px`
        }else if(pos < 650){
            pos++;
            elem.style.top = `${pos - 300}px`
         }else if(pos < 700){
            pos++;
            elem.style.top = `${1000 - pos}px`
        }else if(pos < 750){
            pos++;
            elem.style.top = `${pos - 400}px`
        }
    }


}