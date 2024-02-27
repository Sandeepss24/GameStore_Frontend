import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UploadGames() {
  const gameCategories = [
    "Action",
    "Adventure",
    "Sports",
    "Kids",
    "Horror"
  ]

  const [selectedGameCategory,setSelectedGameCategory] = useState(gameCategories[0])

  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value);
    setSelectedGameCategory()
  }
  
  // handle game submission
  const handleGameSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
  
    const gameTitle = form.gameTitle.value;
    const developer = form.developer.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const gameDescription = form.gameDescription.value;
    const gamePrice = form.gamePrice.value;
  
    const gamesObj = {
      gameTitle,
      developer,
      imageURL,
      category,
      gameDescription,
      gamePrice,
    };
    console.log(gamesObj);
  
    try {
      const response = await fetch("http://localhost:7000/upload-game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([gamesObj]),
      });
      const data = await response.json();
      // console.log(data);
      toast.success("Game uploaded successfully!!!");
      form.reset();
    } catch (error) {
      console.error("Error uploading game:", error);
    }
  };
  
  return (
    <div>
    <table>
    <thead>
      <tr>
        <th>User ID</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Pinkman</td>
          <td>Dustin</td>
        </tr>
    </tbody>
  </table>
</div>
  )
}

export default UploadGames