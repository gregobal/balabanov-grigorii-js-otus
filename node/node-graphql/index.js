const
  {ApolloServer} = require('apollo-server'),
  {GraphQLScalarType} = require('graphql'),
  {readFileSync} = require('fs'),
  typeDefs = readFileSync('./typeDefs.graphql', 'utf-8'),
  {manufacturers, categories, products, users, orders} = require('./init-data');

const resolvers = {
  Query: {
    getProduct: (parent, {id}) => products.find(item => item.id === id),
    getProducts: () => products,
    getProductsByCategory: (parent, {categoryId}) => products.filter(item => item.categoryId === categoryId),
    getProductsByManufacturer: (parent, {manufacturerId}) => products.filter(item => item.manufacturerId === manufacturerId),

    getUser: (parent, {id}) => users.find(item => item.id === id),
    getUsers: () => users
  },

  Mutation: {
    addProduct(parent, args) {
      const newProduct = {
        id: String(products.length + 1),
        ...args
      };
      products.push(newProduct);
      return newProduct;
    },

    addOrder(parent, args) {
      const newOrder = {
        id: String(orders.length + 1),
        ...args,
        created: new Date()
      };
      orders.push(newOrder);
      return newOrder
    }
  },

  Manufacturer: {
    products: ({id}) => products.filter(item => item.manufacturerId === id)
  },

  Category: {
    products: ({id}) => products.filter(item => item.categoryId === id)
  },

  Product: {
    manufacturer: ({manufacturerId}) => manufacturers.find(item => item.id === manufacturerId),
    category: ({categoryId}) => categories.find(item => item.id === categoryId)
  },

  User: {
    orders: ({id}) => orders.filter(({userId}) => userId === id)
  },

  Order: {
    customer: ({userId}) => users.find(item => item.id === userId),
    products: ({productIds}) => productIds.map(productId => products.find(({id}) => id === productId))
  },

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Значение даты и времени',
    parseValue: value => new Date(value),
    serialize: value => new Date(value).toISOString(),
    parseLiteral: ast => ast.value
  })
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen()
  .then(({url}) => console.log(`GraphQL Server Playground доступен на ${url}`));
