const { UserTC } = require('../schemas/user/user')
const userQuery = {
  userFindById: UserTC.getResolver('findById'),
  UserFindOne: UserTC.getResolver('findOne'),
  UserFindMany: UserTC.getResolver('findMany'),
  UserCount: UserTC.getResolver('count'),
}

const userMutation = {
  UserCreate: UserTC.getResolver('createOne'),
  UserCreateMany: UserTC.getResolver('createMany'),
  UserUpdateById: UserTC.getResolver('updateById'),
  UserUpdateOne: UserTC.getResolver('updateOne'),
  UserRemoveById: UserTC.getResolver('removeById'),
}

module.exports = { userQuery, userMutation }
