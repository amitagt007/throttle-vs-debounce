let timerId;

const makeApiCall = () => {
  const elemnent = document.getElementById("with-throttle-counter");
  var throttleCount = elemnent.innerHTML || 0;

  elemnent.innerHTML = parseInt(throttleCount) + 1;
};

// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
var throttle = (func, delay) => {
  // If setTimeout is already scheduled, no need to do anything
  if (timerId) {
    return;
  }

  // Schedule a setTimeout after delay seconds
  timerId = setTimeout(function () {
    func();

    // Once setTimeout function execution is finished, timerId = undefined so that in <br>
    // the next scroll event function execution can be scheduled by the setTimeout
    timerId = undefined;
  }, delay);
};

window.addEventListener("resize", () => {
  // mockinh a normla api call with out throttle
  const elemnent = document.getElementById("with-out-throttle-counter");
  let apiCallCount = elemnent.innerHTML || 0;
  apiCallCount = parseInt(apiCallCount) + 1;
  elemnent.innerHTML = apiCallCount;

  // with throttle
  throttle(makeApiCall, 200);
});
