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

    if (recipeReq[0].hasOwnProperty("inShape")) {
      return recipeReq[0].inShape;
    }
  },
  getCrafts: (parent, args, context) => {
    const inShapeArr = recipes.map((recipe) => {
      return {
        inShape: recipe[0].inShape
          ? recipe[0].inShape.map((arr) => {
              return arr.map((element) => {
                if (
                  items[element - 1] &&
                  mcAssets.textureContent[items[element - 1].name].texture
                )
                  return mcAssets.textureContent[items[element - 1].name]
                    .texture;
              });
            })
          : undefined,
        resultedItemId: recipe[0].result.id,
        resultedItem:
          mcAssets.textureContent[items[recipe[0].result.id - 1].name].texture,
      };
    });
    console.log(inShapeArr[34]);

    return inShapeArr;
  },
};
