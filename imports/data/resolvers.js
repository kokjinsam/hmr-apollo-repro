import {
  Counts,
  Todos,
} from '../libs/collections';

const resolvers = {
  Query: {
    async counts() {
      return Counts.findOne({}, {
        fields: {
          _id: 1,
          count: 1,
        },
      });
    },

    async todos() {
      return Todos.find({});
    },
  },
  Mutation: {
    async incrementCount(_, { id }) {
      return Counts.update({ _id: id }, {
        $inc: {
          count: 1,
        },
        $set: {
          updatedAt: new Date(),
        },
      });
    },

    async addTodo(_, { todo }) {
      return Todos.insert({
        todo,
      });
    },
  },
};

export default resolvers;
