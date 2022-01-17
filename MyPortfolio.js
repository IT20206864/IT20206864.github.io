var counter = document.getElementById("webC");
var visitCount = localStorage.getItem("page_view");
console.log("Shit Works");

if(visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view" , visitCount);
}

else {
    visitCount = 1;
    localStorage.setItem("page_view" ,1 );
}

counter.innerHTML = visitCount;

