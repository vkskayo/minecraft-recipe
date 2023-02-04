import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

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
      <h1 className="mb-4 title">Minecraft - Recipes</h1>
      <div className="d-flex flex-wrap">
        {recipes
          ? recipes.map((recipeUrl) => {
              if (recipeUrl) {
                return (
                  <div className="iventory-bg d-flex justify-content-center align-items-center">
                    <img className="item-img" src={recipeUrl} />
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
