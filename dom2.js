


 
const h2 = document.querySelector(".h2")
h2.innerText = "Hello Nishat and Welcome to this Field  " // modify korte parcen 
h2.classList.add("taufik") /// class o add korte parece 
h2.style.backgroundColor = "red" // css o add korte parcen
h2.classList.remove("taufik") // class del o korte parcen 

// jodi id add korte hoto tokon 

h2.setAttribute("id","taufik")  // id attribute taufik nam e add hoi gese h2 te 
h2.setAttribute("class","taufiks")  // class attribute taufiks nam e add hoi gese h2 te 
h2.setAttribute("type","taufik")  // type attribute taufik nam e add hoi gese h2 te 

// class dia o add kora jai // set attribute dia o kora jai 
// abr apni chan h2 te id add howwar sate sate setar css apply hok

const h3 = document.querySelector(".h3")
h3.setAttribute("id","heading")
h3.setAttribute("class","text")
h3.setAttribute("style","color:blue")

// tag e css korte ciele dom dea koren 
// arr jodi id/class e css korte chan taile css e jan 

// ciele console "element" o crete kora jai mane tag lekar moto 


const h1 = document.createElement("h1")
h1.innerHTML = "MahmudurNishatIs"
h1.setAttribute("class","Nishat")
console.log(h1); //  <h1 class="Nishat">MahmudurNishatIs</h1>


// body manne jekane amra sobkicu deki sekan kemne createElemnet kore dekano jai 
// body te create kora element show korate parcen 
//Ex-1
const body = document.body
const h1 = document.createElement("h1")
h1.innerHTML = " Hello MahmudurNishat"
h1.setAttribute("class","Nishat")
body.appendChild(h1)
console.log(h1);
//Ex-2
const h2 = document.createElement("h2")
h2.innerHTML = " Welcome This Arena"
h2.setAttribute("id","heading")
body.appendChild(h2)
console.log(h2);