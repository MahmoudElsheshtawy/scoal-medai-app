import React from 'react'
import "./Stores.css"
import profile from '../../stories/profile.jpg'


const Stores = () => {
  const Sdata = [
    {
      id: 1,
      name: "Ahmed",
      img: "https://images.pexels.com/photos/4412516/pexels-photo-4412516.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
    },
    {
      id: 2,
      name: "Syed",
      img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
    },
    {
      id: 3,
      name: "Gamal",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
    },
    {
      id: 4,
      name: "lebleba",
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

  ];

  return (
 <>

 <div className="stories" id="top" >
 <div className="story">
               <img src={profile} alt="" />
                <span>Owner</span> 
               <button className='blus'>+</button>
             </div> 
       
             
           {Sdata.map((val)=>{
                      return(
                          <div className="story" key={val.id}>
                             <img src={val.img} alt="" />
                              <span>{val.name}</span>
                           </div>
                      )
            
                      })
                    }
           
</div>
 
 
 </>
    

  )
}

export default Stores

// import React from "react";
// import "./stories.css"
// const Stories = () => {
//   const stories = [
//     {
//       id: 1,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/4412516/pexels-photo-4412516.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
//     },
//     {
//       id: 4,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600lazy=load",
//     },
//   ];

//   return (
//     <div className="stories">
//       <div className="story">
//           {/* <img src={currentUser.profilePic} alt="" /> */}
//           {/* <span>{currentUser.name}</span> */}
//           <button>+</button>
//         </div>
//       {stories.map(story=>(
//         <div className="story" key={story.id}>
//           <img src={story.img} alt="" />
//           <span>{story.name}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Stories
