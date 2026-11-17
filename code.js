document.querySelector("#btn").addEventListener("click", onclick)

function onclick() {
    let normal_hours = document.getElementById("normal_Hours").valueAsNumber
    let normal_rate = document.getElementById("normal_Rate").valueAsNumber
    let overtime_rate = document.getElementById("overtime_Rate").valueAsNumber
    let hours_worked = document.getElementById("hours_Worked").valueAsNumber

    let result 
    if (hours_worked > normal_hours) {
        result = (hours_worked - normal_hours) * overtime_rate + normal_hours * normal_rate
    } else {
        result = hours_worked * normal_rate;
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + " dollars"
}