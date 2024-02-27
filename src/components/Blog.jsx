import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Blog() {
  return (
    <div className='mt-28 px-4 lg:px-24' style={{backgroundImage:"linear-gradient(to right,#0172AF ,#74FEBD)"}}>
      <h2 className='text-5xl font-bold text-center'>  TRAILERS  </h2>

      <div className='d-flex justify-content-between grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 ms:grid-cols1'>
       <Card
            className="max-w-sm"
            >
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/y6vWl-8_0QI" title="(PS5) Spider-Man 2 Sandman Full Boss Fight | ULTRA Realistic Graphics Gameplay [4K 60FPS HDR]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Spider-Man 2 Sandman Full Boss Fight
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
          </Card>

          <Card
            className="max-w-sm"
            style={{backgroundColor:"yellow",marginLeft:"20rem"}}>
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/G-1evpoTzWU" title="Avatar: Frontiers of Pandora - Features Trailer | PS5 Games" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             Avatar
            </h5>
          </Card>
          
      </div>



      <div className='d-flex justify-content-between grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 ms:grid-cols1'>
       <Card
            className="max-w-sm"
           >
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/QkkoHAzjnUs" title="Grand Theft Auto V Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Grand Theft Auto VI Trailer 1
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
          </Card>

          <Card
            className="max-w-sm"
            style={{backgroundColor:"yellow",marginLeft:"20rem"}}>
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/z2XS_RryJGk" title="THE LAST OF US 2 PS5 Gameplay 4K 60FPS HDR ULTRA HD (Upgrade Patch)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            LASTOFUS
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
          </Card>
          
      </div>


      <div className='d-flex justify-content-between grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 ms:grid-cols1'>
       <Card
            className="max-w-sm">
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/basLDO2bj2k" title="Marvel’s Blade | Announcement Trailer | The Game Awards 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Marvel’s Blade
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
          </Card>

          <Card
            className="max-w-sm"
            style={{marginLeft:"20rem"}}>
            {/* <img src={game.imageURL} alt='' className='h-70'/> */}
            <iframe width="501" height="383" src="https://www.youtube.com/embed/Lq594XmpPBg" title="Horizon Forbidden West - Announcement Trailer | PS5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            HorizonForbiddenWest
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
            </p>
          </Card>
          
      </div>
    </div>
  );
}

export default Blog;