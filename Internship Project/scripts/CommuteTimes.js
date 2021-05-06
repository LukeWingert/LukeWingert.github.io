//This method will be triggered by the button
function getDistance(){
    //get the input from the text fields
    let distance = document.getElementById("distance").value; 
    let pricePerGallon = document.getElementById("pricePerGallon").value; 
    let milesPerGallon = document.getElementById("milesPerGallon").value;
    let salary = document.getElementById("salary").value;
     
    //Calculations
    var gallons = distance / milesPerGallon;
    var dailyCommute = gallons * pricePerGallon * 2;
    var monthlyCommute = dailyCommute * 21 //The average workdays in a month is about 21
    var netMonthlySalary = salary - monthlyCommute;

    //Outputting to the text block
    document.getElementById("commuteCost").innerHTML = dailyCommute;
    document.getElementById("commuteCostMonthly").innerHTML = monthlyCommute;
    document.getElementById("netIncome").innerHTML = netMonthlySalary;
}

function numCommutes(){
    let distance = document.getElementById("distance").value * 2; 
    let milesPerGallon = document.getElementById("milesPerGallon").value;
    let tankSize = document.getElementById("tankSize").value;

    //Calculations: number of commutes is rounded down because commutes can't be decimals 
    var gallonsPerCommute = distance / milesPerGallon;    
    var numCommutes = Math.floor(tankSize / gallonsPerCommute);  

    //Outputting to text block
    document.getElementById("totalCommutes").innerHTML = numCommutes;
}