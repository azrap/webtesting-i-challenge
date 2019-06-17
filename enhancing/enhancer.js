module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement<20){
    item.enhancement++
  }
  return { ...item};
}

function fail(item) {
  return { ...item };
}

// - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
