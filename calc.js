

function sumUp() {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;

    let op = document.querySelector("#operation").selectedOptions[0].value;

    if (num1 !== "" && num2 !== "" && op !== "") {
        let result = eval(`${num1} ${op} ${num2}`);
        
        console.log(`${num1} ${op} ${num2}`);
        console.log(result);
    
        document.getElementById("answer").textContent = "= " + result;
    } else {
        document.getElementById("answer").textContent = "Input each field";
    }
}