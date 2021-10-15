db.connect = () =>
  new Promise(async (resolve, reject) => {
    const connection = await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useFindAndModify: false,
      })
      .then(() => console.log(`connected to ${process.env.MONGODB_URL}`))
      .catch((err) => reject(`Error on db connection:  ${err.message}`));

    const db = mongoose.connection;

    resolve({ connection, db });
  });

db.disconnect = () => new Promise(async () => mongoose.disconnect());

module.exports = db;
