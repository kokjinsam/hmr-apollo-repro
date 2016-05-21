## HMR Apollo Repro

1. **Installation**

```
npm install
meteor
```

2. **Verify that Apollo is working with `ecmascript`**

Then go to `http://localhost:4000/graphql`.

On the left column, do this:
```
mutation {
  addTodo(todo: "todo test")
}
```

On the right column, you should see something like this:
```
{
  "data": {
    "addTodo": "7Javohqx7imdtYPW3"
  }
}
```

3. **Verify that Apollo is not working with `ecmascript-hot`**

```
meteor remove ecmascript && meteor add gadicc:ecmascript-hot
```

Repeat step 2. On the right colummn, you should see something like this:

```
{
  "data": {
    "incrementCount": null
  },
  "errors": [
    {
      "message": "Meteor code must always run within a Fiber. Try wrapping callbacks that you pass to non-Meteor libraries with Meteor.bindEnvironment.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ]
    }
  ]
}
```
