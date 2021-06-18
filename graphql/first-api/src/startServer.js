import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({typeDefs, resolvers}){
  mongoose.connect('mongodb+srv://Thais:teddy@cluster0.lbgku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const server = new ApolloServer({typeDefs, resolvers});
  server.listen().then(({url}) => console.log(`Server started at ${url}`));
}

export default startServer;