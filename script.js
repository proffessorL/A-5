
// HEart button functionality

let heartCount = 0;


const heartButtons = document.getElementsByClassName("heart-btn");


for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function () {
        heartCount++;
        document.getElementById("heartCount").textContent = heartCount;
    });
}




// call button and coin functionality

let currentCoins = 100;
let callHistory = [];

// COpY FunCtion

function updateCoinDisplay() {
    document.getElementById('coinCount').textContent = currentCoins;
}


function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        // Update copy count
        const copyCountElement = document.getElementById('copyCount');
        let currentCopyCount = parseInt(copyCountElement.textContent);
        copyCountElement.textContent = currentCopyCount + 1;


        alert(`Number ${number} copied to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert(`Number ${number} copied!`);
    });
}

//    call and history add howar function


function handleCall(serviceName, serviceNumber) {

    if (currentCoins < 20) {
        alert('Insufficient coins! You need at least 20 coins to make a call.');
        return;
    }


    alert(`Calling ${serviceName} at ${serviceNumber}`);


    currentCoins -= 20;
    updateCoinDisplay();


    addToCallHistory(serviceName, serviceNumber);
}


function addToCallHistory(serviceName, serviceNumber) {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const historyItem = {
        name: serviceName,
        number: serviceNumber,
        time: currentTime
    };


    callHistory.unshift(historyItem);


    updateHistoryDisplay();
}


function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');

    if (callHistory.length === 0) {
        historyList.innerHTML = '<li class="text-gray-500 text-center py-4">No call history yet</li>';
        return;
    }

    historyList.innerHTML = callHistory.map(item => `
                <li class="border-b border-gray-100 pb-2 mb-2 last:border-b-0">
                   <div class="h-[100px] w-full   p-4 bg-gray-100 rounded-2xl">
                    <div class= " flex justify-between items-center">
                     <div class="font-bold text-[23px]">${item.name}</div>
                     <div class=" text-[20px] font-semi-bold text-xs mt-1">${item.time}</div>
                    
                     </div>

                     <div class="text-gray-500 text-[18px]">${item.number}</div></div>
                    
                </li>
            `).join('');
}


function clearCallHistory() {
    callHistory = [];
    updateHistoryDisplay();
}


function initializePage() {

    const callButtons = document.querySelectorAll('.call-btn');

    callButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // Find the parent card
            const card = this.closest('.service-card');
            const serviceName = card.querySelector('.service-name').textContent;
            const serviceNumber = card.querySelector('.service-number').textContent;

            handleCall(serviceName, serviceNumber);
        });
    });


    const clearHistoryBtn = document.getElementById('clearHistory');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearCallHistory);
    }


    updateHistoryDisplay();
}

document.addEventListener('DOMContentLoaded', initializePage);