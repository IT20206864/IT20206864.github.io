// var counter = document.getElementById("webC");
// var visitCount = localStorage.getItem("page_view");
// console.log("Shit Works");

// if(visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem("page_view" , visitCount);
// }

// else {
//     visitCount = 1;
//     localStorage.setItem("page_view" ,1 );
// }

// counter.innerHTML = visitCount;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll" , reveal);

