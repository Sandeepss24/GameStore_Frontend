import React, { useEffect, useState } from 'react'
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ManageGames() {
  const [allGames,setAllGames] = useState([]);
  // useEffect( () =>{
  //   fetch("http://localhost:7000/all-game").then(res => res.json()).then(data=>setAllGames(data))
  // }, [])
  useEffect(() => {
    fetch("http://localhost:7000/all-game")
      .then(res => res.json())
      .then(data => {
        console.log("Data received from API:", data);
        setAllGames(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  // delete a game
  // const handleDelete = (id) =>{
  //   console.log(id);
  //   fetch(`http://localhost:7000/game/${id}`,{
  //     method:"DELETE"
  //   }).then(res => res.json()).then(data=>{
  //     toast.success("Game is deleted successfully")
  //     setAllGames(data)
  //   })
  // }
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:7000/game/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        // Filter out the deleted game from the allGames array
        setAllGames(prevGames => prevGames.filter(game => game._id !== id));
        toast.success("Game is deleted successfully");
      } else {
        console.error("Failed to delete game. Server response:", res.status);
      }
    })
    .catch(error => {
      console.error("Error deleting game:", error);
    });
  };
  
  
  return (
    <div className='px-4 my-12' style={{}}>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Games</h2>

      {/* table */}
      <Table className='lg:w-[1030px]'>
        <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Game name</Table.HeadCell>
          <Table.HeadCell>Developer</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allGames.map((game,index)=> <Table.Body className="divide-y" key={game._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
           {index+1}
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {game.gameTitle}
            </Table.Cell>
            <Table.Cell>
              {game.developer}
            </Table.Cell>
            <Table.Cell>
              {game.category}
            </Table.Cell>
            <Table.Cell>
              {game.gamePrice}
            </Table.Cell>
            <Table.Cell className='d-flex justify-content-between'>
              <Link to={`/admin/dashboard/edit-games/${game._id}`} className="font-medium text-cyan-600 hover: dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <Button onClick={()=>handleDelete(game._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-blue-600 w-16 h-7 font-medium '>Delete</Button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        
      </Table>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}  />
    </div>
    
  )
}

export default ManageGames