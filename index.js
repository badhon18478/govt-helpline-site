// State variables for the counters
// let coinCount = 100;
// let copyCount = 0;
// let heartCount = 0;

// DOM elements
// nav element-seletion

const totalLikesElement = document.getElementById('heart-count');
const likeButtons = document.querySelectorAll('.heart-count-icon');

let totalHeart = 0;

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    totalHeart = totalHeart + 1;

    totalLikesElement.innerText = totalHeart;
  });
});

const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');

// card button selection
const callButtons = document.querySelectorAll('.call-btn');
const copyButtons = document.querySelectorAll('.copy-btn');

// call history and clear btn
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let coins = parseInt(coinCountElement.innerText);
let copyCount = 0;

callButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (coins >= 20) {
      coins -= 20;
      coinCountElement.innerText = coins;

      const cardElement = button.closest('.card');
      const cardTitle = cardElement.querySelector('.card-title').innerText;
      const cardNumber = cardElement.querySelector('.card-number').innerText;

      let now = new Date().toLocaleDateString();

      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      historyEntry.innerHTML = `
                
          <div class="flex items-center bg-gray-100 mb-1 ">
            
            <div>
              <h4 class="font-semibold text-sm">${cardTitle}</h4>
              <p class="text-xs text-gray-500">${cardNumber}</p>
              <p class="text-xs text-gray-500">${now}</p>
            </div>
          </div>
            `;

      callHistoryContainer.prepend(historyEntry);

      alert(`Calling: ${cardTitle} ${cardNumber}`);
    } else {
      alert('Not Enough Coin');
    }
  });
});

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const numberToCopy = button
      .closest('.card')
      .querySelector('.card-number').innerText;

    navigator.clipboard.writeText(numberToCopy);

    copyCount += 1;
    copyCountElement.innerText = copyCount;
  });
});

clearHistoryBtn.addEventListener('click', () => {
  callHistoryContainer.innerHTML = '';
});
