import User from '../../../models/User'

export default {
  Query: {
    users: () => Usr.find(),
    user: (_, {id}) => User.findById(id)
  },
  Mutation: {
    createUser: (_, {data}) => User.create(data),
    updateUser: (_, {id, data}) => User.findByIdAndUpdate(id, data, {new : true})
  }
}