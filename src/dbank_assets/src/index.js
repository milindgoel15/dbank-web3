import { dbank } from "../../declarations/dbank";

window.addEventListener('load', async () => {
   // console.log('loaded');
   update();
})

document.querySelector('form').addEventListener('submit', async (e) => {
   e.preventDefault();
   // e.stopImmediatePropagation();
   // console.log('submitted');
   let button = e.target.querySelector('#submit-btn');
   let inputValue = document.getElementById('input-amount').value;
   let outputValue = document.getElementById('withdrawal-amount').value;

   let inputAmount = parseFloat(inputValue);
   let outputAmount = parseFloat(outputValue);

   button.setAttribute('disabled', true);
   if (inputValue.length != 0) {
      await dbank.topUp(inputAmount);
   }
   if (outputValue.length != 0) {
      await dbank.withDraw(outputAmount);
   } 
   await dbank.compound();

   update();
   inputValue = '';
   outputValue = '';
   button.removeAttribute('disabled');
});

async function update() {
   const currentAmount = await dbank.checkBalance();
   document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
};