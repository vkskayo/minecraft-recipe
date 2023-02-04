import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Item } from "./resolvers/Item.js";
import { Recipe } from "./resolvers/Recipe.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Item,
    Recipe,
  },

  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
