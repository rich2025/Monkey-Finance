const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const uri = "mongodb://localhost:27017/MonkeyFinance";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("MonkeyFinance"); //Database
    const users = database.collection("users"); //Collection

    // Perform operations here, for example, find a document
    const user = await users.findOne({});
    console.log(user);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);