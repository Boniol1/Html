const btn = document.getElementById("przycisk");
btn.addEventListener("click",funkcja);
const color = ["red","blue","black","white","zielone","green"]

     function funkcja (){
        document.body.style.backgroundColor = color[coca()]; 

    }
    function coca(){
        return Math.floor(Math.random()*color.length);
    } 