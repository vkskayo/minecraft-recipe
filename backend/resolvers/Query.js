import { recipes, items } from "../db.js";
import mcAssetss from "minecraft-assets";
import * as dotenv from "dotenv";
dotenv.config();

const mcAssets = mcAssetss(process.env.MINECRAFT_VERSION);

export const Query = {
  recipes: () => {
    const recipesItems = recipes.map((recipe) => {
      if (
        items[recipe[0].result.id] &&
        mcAssets.findItemOrBlockByName(items[recipe[0].result.id - 1].name) !==
          undefined
      ) {
        if (recipe[0].result.id - 1 == 749) {
          console.log(recipe[0].inShape);
        }
        return mcAssets.textureContent[items[recipe[0].result.id - 1].name]
          .texture;
      }
    });

    return recipesItems;
  },
  items: () => items,
  getOneItem: (_, { id }) => {
    return items.find((item) => item.id == id);
  },
  getOneRecipe: (parent, { id }, context) => {
    const recipeReq = recipes.find((recipe) => recipe[0].result.id == id);
    console.log(recipeReq);

    if (recipeReq[0].hasOwnProperty("inShape")) {
      return recipeReq[0].inShape;
    }
  },
};
