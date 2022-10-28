import mongoose from "mongoose";

mongoose.connect("mongodb://topsoft:12345@ac-mh7g8et-shard-00-00.j88ieve.mongodb.net:27017,ac-mh7g8et-shard-00-01.j88ieve.mongodb.net:27017,ac-mh7g8et-shard-00-02.j88ieve.mongodb.net:27017/?ssl=true&replicaSet=atlas-us31ix-shard-0&authSource=admin&retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;