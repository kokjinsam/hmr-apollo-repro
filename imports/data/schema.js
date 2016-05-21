const schema = [`
  type Todos {
    _id: String
    todo: String
  }
  type Count {
    _id: String
    count: String
    updatedAt: String
  }
  type Query {
    counts: Count
    todos: Todos
  }
  type Mutation {
    incrementCount(id: String): String
    addTodo(todo: String): String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

export default schema;
