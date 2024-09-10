console.log(`hello`);

function calculate() {
    let veggieAmountSmall= document.getElementById('veggie-amount-small').value;
    let veggieAmountMedium= document.getElementById('veggie-amount-medium').value;
    let veggieAmountLarge= document.getElementById('veggie-amount-large').value;
    let classicAmountSmall= document.getElementById('classic-amount-small').value;
    let classicAmountMedium= document.getElementById('classic-amount-medium').value;
    let classicAmountLarge= document.getElementById('classic-amount-large').value;
    let italianAmountSmall= document.getElementById('italian-amount-small').value;
    let italianAmountMedium= document.getElementById('italian-amount-medium').value;
    let italianAmountLarge= document.getElementById('italian-amount-large').value;
    let amountElement = document.getElementById('total-amount');
    let total = parseInt(veggieAmountSmall) + parseInt(veggieAmountMedium) + parseInt(veggieAmountLarge) + parseInt(classicAmountSmall) + parseInt(classicAmountMedium) + parseInt(classicAmountLarge) + parseInt(italianAmountSmall) + parseInt(italianAmountMedium) + parseInt(italianAmountLarge);
    amountElement.innerText = `Total Amount: ${total}`;

}

calculate()