# Simple Web Worker Demo

This is a bare bones demo of a web worker and its usage.

I've added a normal script (fibo), and a complimentary web worker (fibo.worker.js).
The two files can communicate with one another by postingMessages, similar to what you
would see with iframes talking to one another.  Nifty!

I've mocked out asynchronous behavior by adding a setTimeout to the Web Worker's response
back.

## Helpful Links

[](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)