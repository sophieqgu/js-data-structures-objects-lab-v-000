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

function deleteFromDriverByKey(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  delete newDriver.key;
}

function destructivelydeleteFromDriverByKey(driver, key, value) {
  delete driver.key;
}
