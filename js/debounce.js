let timer;
const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", () => {
  // mocking a expensive api call with out debounce
  const elemnent = document.getElementById("with-out-debounce-counter");
  let apiCallCount = elemnent.innerHTML || 0;
  apiCallCount = parseInt(apiCallCount) + 1;
  elemnent.innerHTML = apiCallCount;

  // with debounce
  debounce(makeAPiCallWithDebounce, 200);
});

const debounce = (func, delay) => {
  clearTimeout(timer);
  timer = setTimeout(func, delay);
};

const makeAPiCallWithDebounce = () => {
  const elemnent = document.getElementById("with-debounce-counter");
  var throttleCount = elemnent.innerHTML || 0;

  elemnent.innerHTML = parseInt(throttleCount) + 1;
};
