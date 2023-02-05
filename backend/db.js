import minecraftData from "minecraft-data";
import mcAssetss from "minecraft-assets";
import * as dotenv from "dotenv";
dotenv.config();
const mcAssets = mcAssetss(process.env.MINECRAFT_VERSION);
const mcData = minecraftData(process.env.MINECRAFT_VERSION);

export const recipes = Object.values(mcData.recipes);
export const items = Object.values(mcData.items);

console.log(mcData.itemsByName["diamond_helmet"]);
console.log(items[749]);
console.log(recipes[31]);
