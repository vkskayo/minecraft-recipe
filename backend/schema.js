export const typeDefs = `#graphql
  type Query {
    recipes: [String]
    getOneItem(id: ID!): Item
    items: [Item!]!
    getOneRecipe(id: ID!): [[Int]]
    getCrafts: [Recipe]
  },

  type Recipe {
    resultedItemId: ID!
    resultedItem: String
    inShape: [[String]]
  }

  type Item {
    id: ID!,
    name: String!,       
    displayName: String!,
    stackSize: Int!,
  }
`;
