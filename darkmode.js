let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let curr = "light";
btn.addEventListener("click", () => {
    if (curr === "light") {
        curr = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        curr = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    };

    console.log(curr);
    
});

// btn.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor=("white");
//     btn.innerText = "Dark Theme";
// });