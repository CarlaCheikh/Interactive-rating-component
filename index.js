let submit = document.getElementById("btn");
let submitComponent =  document.getElementById("submit");

let rate = document.getElementById("rate");
let numbers = document.querySelectorAll(".active");

let rateNumber = document.getElementById("nb");

submit.addEventListener("click",() => {
    rate.classList.remove("hidden");
    submitComponent.style.display = "none";
});


numbers.forEach((number) => {
      number.addEventListener("click" , () => {
        rateNumber.innerHTML = number.innerHTML;
      })
})

