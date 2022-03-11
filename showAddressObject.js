function showAddress(address) {
  for (let key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

const address = {
  street: "2nd Main Road",
  city: "Chennai",
  zipcode: 600088,
};

showAddress(address);
