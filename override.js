document.getElementById("bub3").addEventListener("click", quote);
function quote() {
    var arr = ["You've got this!", "You gonna ace today!", "Make the most of your 86,400!!"];
    var num = Math.floor((arr.length)*Math.random());
    var hey = arr[num];
    document.getElementById("bub3").innerHTML = hey;
}
