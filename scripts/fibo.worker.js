/**
 * HI!  I'm a Web Worker.
 *
 * I have access to "self", "XMLHttpRequest", "fetch", "location",
 * and a small handful of other stuff.
 */

function getFibo(n) {
  var prev = 0, cur = 1, total = 0, temp;
  while(n--) {
    prev = cur;
    temp = total;
    total += cur;
    cur = temp;
  }
  return total;
}

self.addEventListener('message', function(message) {

  var inputValue = message.data;
  var outputValue = getFibo(inputValue);

  self.postMessage(outputValue);
});

