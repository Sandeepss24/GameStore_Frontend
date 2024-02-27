import React, { useState } from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditGames() {
  const { id } = useParams();
  const { gameTitle, developer, imageURL, category, gameDescription, gamePrice } = useLoaderData();

  const gameCategories = ["Action", "Adventure", "Sports", "Kids", "Horror"];
  const [selectedGameCategory, setSelectedGameCategory] = useState(category);
  const navigate = useNavigate();

  const handleChangeSelectedValue = (event) => {
    setSelectedGameCategory(event.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updateGamesObj = {
      gameTitle: form.gameTitle.value,
      developer: form.developer.value,
      imageURL: form.imageURL.value,
      category: selectedGameCategory,
      gameDescription: form.gameDescription.value,
      gamePrice: form.gamePrice.value,
    };

    fetch(`http://localhost:7000/game/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateGamesObj),
    })
      .then((res) => {
        if (res.ok) {
          toast.success('Game is updated successfully!',{
            onClose: ()=>{
              navigate('/admin/dashboard/manage')
            }
          });
          // Navigate('/admin/dashboard/manage')
        } else {
          throw new Error('Failed to update game');
        }
      })
      .catch((error) => {
        console.error('Error updating game:', error);
        toast.error('Failed to update game');
      });
  };

  return (
    <div className="px-4 my-12" style={{ overflowX: 'hidden',backgroundImage:"linear-gradient(to right,#BCE7FC, #C491B1)" }}>
      <h2 className="mb-8 text-3xl font-bold">Edit the Game Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
          {/* game title */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="gameTitle" value=" Game Title " />
            </div>
            <TextInput id="gameTitle" type="text" name="gameTitle" placeholder="Game name" required defaultValue={gameTitle} />
          </div>

          {/* developer name */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="developer" value=" Developer Name " />
            </div>
            <TextInput id="developer" type="text" name="developer" placeholder="Developer Name" required defaultValue={developer} />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* gameimg */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value=" Game URL " />
            </div>
            <TextInput id="imageURL" type="text" name="imageURL" placeholder="Game url" required defaultValue={imageURL} />
          </div>

          {/* category name */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Game Category" />
            </div>

            <Select id="inputState" name="categoryName" className="rounded" value={selectedGameCategory} onChange={handleChangeSelectedValue}>
              {gameCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row */}
        <div className="flex gap-8">
          {/* Game overview */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="gamePrice" value="Game Price" />
            </div>
            <TextInput id="gamePrice" type="text" name="gamePrice" placeholder="Game Price" required defaultValue={gamePrice} />
          </div>

          {/* Game description */}
          <div className="md:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="gameDescription" value=" Game Description " />
            </div>
            <Textarea id="gameDescription" name="gameDescription" placeholder="Write your game description" required row={5} defaultValue={gameDescription} />
          </div>
        </div>

        <Button type="submit" className="mt-5 w-2/3">
          Update Game
        </Button>
      </form>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
}

export default EditGames;
