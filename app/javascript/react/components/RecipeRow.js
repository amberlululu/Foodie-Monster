import React from "react";

const RecipeRow = ({ id, label, url, image, updatedRecipes, index }) => {
  // debugger;
  const deleteRecipe = (event) => {
    fetch(`/api/v1/recipes/${id}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.recipes) {
          updatedRecipes(body.recipes);
        } else {
          updatedRecipes(body);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };
  return (
    <tr key={id}>
      <th scope="row">{index + 1}</th>
      <td>{label}</td>
      <td>{url}</td>
      <td>
        <div onClick={deleteRecipe}>delete</div>
      </td>
    </tr>
  );
};

export default RecipeRow;
