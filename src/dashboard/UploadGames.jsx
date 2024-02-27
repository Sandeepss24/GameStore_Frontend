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
    <div className='px-4 my-12' style={{overflowX:'hidden'}}>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Game</h2>

      <form onSubmit={handleGameSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
        {/* game title */}
      <div className='md:w-1/3'>
        <div className="mb-2 block">
          <Label htmlFor="gameTitle" value=" Game Title " />
        </div>
        <TextInput id="gameTitle" type="text" name='gameTitle' placeholder="Game name" required />
      </div>

      {/* developer name */}
      <div className='md:w-1/3'>
        <div className="mb-2 block">
          <Label htmlFor="developer" value=" Developer Name " />
        </div>
        <TextInput id="developer" type="text" name='developer' placeholder="Developer Name" required />
      </div>
      </div>

     
         {/* second row */}
      <div className='flex gap-8'>
        {/* gameimg */}
      <div className='md:w-1/3'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value=" Game URL " />
        </div>
        <TextInput id="imageURL" type="text" name='imageURL' placeholder="Game url" required />
      </div>

      {/* category name */}
      <div className='md:w-1/3'>
        <div className='mb-2 block'>
          <Label htmlFor='inputState' value='Game Category'/>
        </div>

        <Select id='inputState' name='categoryName' className='rounded' value={selectedGameCategory} onChange={handleChangeSelectedValue}>
          {
            gameCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </Select>

      </div>
      </div>

       {/*third row  */}
      <div className='flex gap-8'>
        {/* Game Price */}
        <div className='md:w-1/3'>
          <div className="mb-2 block">
            <Label htmlFor="gamePrice" value="Game Price $" />
          </div>
          <TextInput  id="gamePrice" type="text" placeholder="Game Price" required />
        </div>

        {/* Game description */}
        <div className='md:w-1/3'>
          <div className='mb-2 block'>
          <Label htmlFor="gameDescription" value=" Game Description " />
          </div>
          <Textarea id="gameDescription"  name='gameDescription' placeholder="Write your game description" required row={5}/>
        </div>
      </div>

      <Button type="submit" className='mt-5 w-2/3'>Upload Game</Button>
    </form>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}  />
    </div>
  )
}

export default UploadGames