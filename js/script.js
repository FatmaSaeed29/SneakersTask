window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.opacity = "0.8";
  } else {
    document.getElementById("navbar").style.opacity = "1";
  }
}

var allproducts = document.querySelectorAll(".list h4")
var content = document.querySelector("#content")
var button1 = document.querySelector("#addToCart")
var final = document.querySelector("#totall")
var totalprice = 0;

allproducts.forEach(function(item){
    item.addEventListener("click", myFunction)
    function myFunction(){
        totalprice += parseInt (item.getAttribute("price"))
        content.innerHTML += item.textContent +" , " +"\n";
    }
    button1.onclick = function(){
        final.innerHTML= "Total Price Is :" + totalprice;
    }
})

