var costItem = [1.75,   //item0
                1.50,   //item1 
                2.00,   //item2
                2.00,   //item3
                2.00,   //item4
                2.00,   //item5
                2.00,   //item6
                2.00,   //item7
                2.00,   //item8
                2.00,   //item9          
                2.00,   //item10
                2,00,   //item11
                2.00];  //item12
var cashBalance = document.getElementById("display_text_balance");
var cashBalanceNumber = parseFloat(cashBalance.innerHTML);
cashBalanceNumber = 0;
var selectedItem ;

function buttonPressed(numberPressed) {
    var productName;
    var productNumber = document.getElementById("display_product_number");
    var productCost = document.getElementById("display_text_cost");

    switch (numberPressed) {
        case 0:
            productName = document.getElementById("item0").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;            
        case 1:
            productName = document.getElementById("item1").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 2:
            productName = document.getElementById("item2").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 3:
            productName = document.getElementById("item3").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 4:
            productName = document.getElementById("item4").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 5:
            productName = document.getElementById("item5").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 6:
            productName = document.getElementById("item6").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 7:
            productName = document.getElementById("item7").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 8:
            productName = document.getElementById("item8").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 9:
            productName = document.getElementById("item9").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 10:
            productName = document.getElementById("item10").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 11:
            productName = document.getElementById("item11").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
        case 12:
            productName = document.getElementById("item12").getAttribute("value");
            productNumber.innerHTML = numberPressed + "." + productName;
            productCost.innerHTML = costItem[numberPressed].toFixed(2);
            selectedItem = numberPressed;
            break;
    }
}

function addBalance(){
    cashBalanceNumber += 2;
    cashBalance.innerHTML = cashBalanceNumber;
}

function substractBalance(){
    if(checkBalance() == true){
    cashBalanceNumber -= parseFloat(costItem[selectedItem]);
    cashBalance.innerHTML = cashBalanceNumber;
    } else {
        alert("not enough balance");
    }
}

function checkBalance(){
    if(cashBalanceNumber < parseFloat(costItem[selectedItem])){
        return false;
    } else{
        return true;
    }
}

