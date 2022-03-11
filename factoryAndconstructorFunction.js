let address = giveAddress("a", "b", "c");

console.log(address);

function giveAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new ShowAddress("a", "b", "c");

console.log(address1);
