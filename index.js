const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mannikart');
}
const kittySchema = new mongoose.Schema({
    name: String,
    age: Number 
  });
 
  const Kitten = mongoose.model('Kitten', kittySchema);
 
async function start() {
  const user1 = new Kitten({
    name: 'Manish',
    age: 20
  })
  user1.save().then(async (doc) => {
    if (doc) {
      console.log("\nThe data is saved successfully!\n Check-out MongoDb Server");
    }
  });
  let user2 = await Kitten.findOneAndUpdate({ name: 'Manish' }, { name: 'Manni' });
  console.log(user2)
  console.log(await Kitten.findOne({ name: 'Manni' }))
}
start();
