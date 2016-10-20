'use strict';

var getItems = function getItems(taco) {
  $.ajax({
    url: 'http://api.icndb.com/jokes/15',
    success: function successHandler(resp) {
      taco(resp);
    }
  });
};

function useData(data) {
  console.log(data);
}

$('form').on('submit', function (e) {
  e.preventDefault();
  getItems(useData);
});

function sum(numbers) {
  var sum = 0;
  numbers.forEach(function (num) {
    sum += num;
  });
  return sum;
}

function checkNumber(num) {
  if (num >= 5) {
    return true;
  } else {
    return false;
  }
}

checkNumber(2);

sum([1, 2, 3]);