var assert = chai.assert; // Tell Chai we want to use `assert` style
var expect = chai.expect;

suite('Jakes App for testing!!', function() {
// This "suite" block is a container for our tests on this whole module

  suite('sum', function() {
      // This "suite" block is nested and thus is a container for tests on the "sum" function within my-app

      // Here is our first test:
      test('hopefully this function returns an sum of an array of numbers', function() {

          assert.strictEqual(sum([1, 2, 3]), 6, 'sum should be correct with 3 numbers');
          assert.strictEqual(sum([1, 2]), 3, 'sum should be correct with 2 numbers');
          //assert.isArray(sum([1,2]), "is this an array?");

          expect(true).to.be.true;

      });
  });


  suite('checkNumber', function() {

      test('Checks if a number is greater than 5 should return true', function() {

          expect(checkNumber(10)).to.be.true;

      });

      test('Checks if a number is greater is five should return true', function() {

          expect(checkNumber(5)).to.be.true;

      });
  });

  suite('API Testing', function() {

    test('Test our API', function(done) {

      getItems(theData);

      function theData(data){
        console.log(JSON.stringify(data));
        let testedData = '{"type":"success","value":{"id":15,"joke":"When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.","categories":[]}}';
        testedData = JSON.parse(testedData);
        assert.deepEqual( data, testedData);
        done();
      }

    });
  });


});
