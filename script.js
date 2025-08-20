function reverseString(text){
    return text.split("").reverse().join("");
}

document.getElementById("reverseBtn").addEventListener("click", function () {
    const inputText = document.getElementById("textInput").value;
    const result = reverseString(inputText);
    document.getElementById("output").textContent = result;
});





//Using split(), reverse() and join() Methods

// let s = "ShraddhaThorat";
// const ans = s.split('').reverse().join('');
// console.log(ans);


//Using Spread Operator

// let s = "ShraddhaThorat";
// const ans = [...s].reverse().join("");
// console.log(ans);