import "./App.css";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { CraftingTable } from "../components/CraftingTable";
import { SiMinecraft } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function App() {
  const [recipes, setRecipes] = useState([]);

  const RECIPES = gql`
    query {
      recipes
    }
  `;

  const { loading, error, data } = useQuery(RECIPES, {
    onCompleted: (queryData) => {
      setRecipes(queryData.recipes);
    },
  });

  console.log(recipes);

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light mb-5">
        <div class="container col-10">
          <a
            class="navbar-brand"
            href="https://pt.wikipedia.org/wiki/Minecraft"
            target="_blank"
          >
            <SiMinecraft size={120} />
          </a>
          <a
            class="navbar-brand"
            href="https://github.com/vkskayo/minecraft-recipe"
            target="_blank"
          >
            <BsGithub size={50} />
          </a>
        </div>
      </nav>

      <CraftingTable />

      <h1 className="my-4 title">- Recipes</h1>

      <div className="d-flex flex-wrap col-10 mx-auto">
        {recipes
          ? recipes.map((recipeUrl) => {
              if (recipeUrl) {
                return (
                  <div className="mx-auto">
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={recipeUrl} />
                    </div>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
}

export default App;
