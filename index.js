// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const changes = {
    key: 'value'
  };

  Object.assign({}, driver, changes);
}

function destructivelyupdateDriverWithKeyAndValue(driver, key, value) {
  driver['key'] = 'value';
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const changes = {
    key: 'value'
  };

  Object.assign({}, driver, changes);
}
