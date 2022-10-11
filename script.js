const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
  slider.addEventListener('input', calculateTip);
});

const billInput = document.getElementById('bill');
billInput.addEventListener('change', calculateTip);

function calculateTip() {
  let bill = parseFloat(billInput.value);
  let tipPercent = document.getElementById('tip').value;
  let noOfPeople = document.getElementById('no-of-people').value;

  billInput.value = bill.toFixed(2);

  let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));

  let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
  let totalPerPerson = (total / noOfPeople).toFixed(2);

  document.getElementById('tip-amount').textContent = `\$ ${totalTip}`;
  document.getElementById('total-amount').textContent = `\$ ${total}`;

  document.getElementById('tip-percent').textContent = `${tipPercent}%`;
  document.getElementById('split-num').textContent = noOfPeople;

  document.getElementById('tip-per-person').textContent = `\$ ${tipPerPerson}`;
  document.getElementById(
    'total-per-person'
  ).textContent = `\$ ${totalPerPerson}`;
}
calculateTip();

//dark mode toggle
const togdark = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.querySelector('.container');
// lbl and val not working!
const lbls = document.querySelectorAll('.lbl');
const vals = document.querySelectorAll('.val');
const pSocial = document.querySelector('.social p');
const findSocial = document.querySelector('.fa-facebook');
const fbIcon = document.querySelector('.fa-facebook');
const twitterIcon = document.querySelector('.fa-twitter');
const ytIcon = document.querySelector('.fa-youtube');

togdark.addEventListener('change', () => {
  body.classList.toggle('dark');
  container.classList.toggle('dark');
  pSocial.classList.toggle('dark');
  fbIcon.classList.toggle('dark');
  twitterIcon.classList.toggle('dark');
  ytIcon.classList.toggle('dark');

  lbls.forEach(el => {
    el.classList.toggle('dark');

    const text = el.classList.contains('dark');
    text === true ? (el.style.color = '#fff') : (el.style.color = '#44475b');
  });

  vals.forEach(el => {
    el.classList.toggle('dark');
  });
});
