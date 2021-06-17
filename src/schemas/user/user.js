const mongoose = require('mongoose')
const { composeWithMongoose } = require('graphql-compose-mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  avatar: { type: String, required: false },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
})

module.exports = {
  userSchema: mongoose.model('users', User),
  UserTC: composeWithMongoose(mongoose.model('users', User)),
}
