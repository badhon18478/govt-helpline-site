// State variables for the counters
// let coinCount = 100;
// let copyCount = 0;
// let heartCount = 0;

// DOM elements
// nav element-seletion
const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');

// card button selection
const callButtons = document.querySelectorAll('.call-btn');
const copyButtons = document.querySelectorAll('.copy-btn');

// call history and clear btn
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// ৪. প্রাথমিক কয়েন এবং কপি সংখ্যা সেট করা
let coins = parseInt(coinCountElement.innerText);
let copyCount = 0;

// ৫. প্রতিটি Call বোতামে ইভেন্ট লিসনার যোগ করা
callButtons.forEach(button => {
  button.addEventListener('click', () => {
    // ২০ কয়েন কমানো
    if (coins >= 20) {
      coins -= 20;
      coinCountElement.innerText = coins;

      // কার্ডের টাইটেল এবং নম্বর বের করা
      const cardElement = button.closest('.card');
      const cardTitle = cardElement.querySelector('.card-title').innerText;
      const cardNumber = cardElement.querySelector('.card-number').innerText;

      // বর্তমান সময় নেওয়া
      let now = new Date().toLocaleDateString();

      // হিস্টরি এন্ট্রি তৈরি করা
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry'; // স্টাইলের জন্য একটি ক্লাস যোগ করা হয়েছে
      historyEntry.innerHTML = `
                <li class="flex items-center justify-between py-2 border-b border-gray-200 bg-gray-100">
          <div class="flex items-center">
            
            <div>
              <h4 class="font-semibold text-sm">${cardTitle}</h4>
              <p class="text-xs text-gray-500">${cardNumber}</p>
              <p class="text-xs text-gray-500">${now}</p>
            </div>
          </div>
            `;

      // নতুন হিস্টরি এন্ট্রি কন্টেইনারে যোগ করা (সবার উপরে)
      callHistoryContainer.prepend(historyEntry);

      // alert মেসেজ দেখানো
      alert(`Calling: ${cardTitle}`);
    } else {
      alert('আপনার কাছে পর্যাপ্ত কয়েন নেই।');
    }
  });
});

// ৬. প্রতিটি Copy বোতামে ইভেন্ট লিসনার যোগ করা
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

// ৭. Clear বোতামে ইভেন্ট লিসনার যোগ করা
clearHistoryBtn.addEventListener('click', () => {
  // callHistoryContainer-এর ভেতরের সব HTML মুছে ফেলা
  callHistoryContainer.innerHTML = '';
});
