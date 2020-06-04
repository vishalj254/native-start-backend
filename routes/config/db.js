const mongoose=require('mongoose');

module.exports= () => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
  };
  // mongoose.connect(`mongodb://nodeTut:${process.env.MONGO_PASS}@meetupme-shard-00-00-5nald.mongodb.net:27017,meetupme-shard-00-01-5nald.mongodb.net:27017,meetupme-shard-00-02-5nald.mongodb.net:27017/test?ssl=true&replicaSet=meetupME-shard-0&authSource=admin&retryWrites=true`, options);

  mongoose.connect(`mongodb://vishal:${process.env.MONGO_PASS}@mycluster-shard-00-02-pi5hk.mongodb.net:27017,mycluster-shard-00-02-pi5hk.mongodb.net:27017,mycluster-shard-00-02-pi5hk.mongodb.net:27017/taskapp?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true`, options);

  // mongoose.connect("mongodb://localhost:27017/taskapp")
  mongoose.connection
    // eslint-disable-next-line no-console
    .once('open', () => console.log('MongoDb running'))
    // eslint-disable-next-line no-console
    .on('error', err => console.log(err));
  mongoose.set('debug', true);
};
