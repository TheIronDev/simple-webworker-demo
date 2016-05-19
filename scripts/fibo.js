

var fiboWorker = new Worker('./scripts/fibo.worker.js');
var fiboForm = document.getElementById('fibo');
var fiboInput = document.getElementById('fiboInput');
var fiboOutput = document.getElementById('fiboOutput');

fiboWorker.addEventListener('message', function(workerMessage) {
  fiboForm.classList.remove('loading');
  fiboOutput.value = workerMessage.data;
});

fiboForm.addEventListener('submit', function(event) {
  event.preventDefault();
  fiboForm.classList.add('loading');
  fiboOutput.setAttribute('placeholder', 'loading...');
  fiboOutput.value = '';
  fiboWorker.postMessage(fiboInput.value);
});