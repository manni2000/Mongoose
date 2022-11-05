const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mannikart');
}
const kittySchema = new mongoose.Schema({
    name: String
  });
 
const Kitten = mongoose.model('Kitten', kittySchema);

const Manniwith = new Kitten({ name: 'Manniwith' });
console.log(Manniwith.name); 

kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};