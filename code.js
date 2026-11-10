
let loanInput = document.getElementById('loanAmount');
let yearsInput = document.getElementById('loanTerm');
let rateInput = document.getElementById('interestRate');   
let calculateButton =
document.getElementById('calculateBtn');
let resultParagraph = document.getElementById('result');

//interest
function calculateMortgage() {
    let principal = loanInput.valueAsNumber;
    //amount
    let years = yearsInput.valueAsNumber;
    //borrowed
    let annualRate = rateInput.valueAsNumber;    

    if (isNaN(principal) || isNaN(years) || isNaN(annualRate)) {
        resultParagraph.innerHTML = 'Please enter valid positive numbers.';
        return;
    }

    let monthlyRate = annualRate / 100 / 12;
    let totalPayments = years * 12;
    let monthlyPayment;

    if (monthlyRate === 0) {
        monthlyPayment = principal / totalPayments;
    } else {
        let factor = Math.pow(1 + monthlyRate, totalPayments);
        monthlyPayment = principal * (monthlyRate * factor) / (factor - 1);
    }

    let totalPayment = monthlyPayment * totalPayments;
    let totalInterest = totalPayment - principal;

    resultParagraph.innerHTML = 
    'The monthly payment is: $' + monthlyPayment.toFixed(2) + '<br>' +
    'The total payment is: $' + totalPayment.toFixed(2) + '<br>' +
    'The total interest paid is: $' + totalInterest.toFixed(2);

}

calculateButton.addEventListener('click', calculateMortgage);