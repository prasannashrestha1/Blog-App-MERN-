import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ImCross} from 'react-icons/im';


function CreatePosts() {
const [cat, setCat] = useState("");
const [cats, setCats] = useState([]);

const addCategory = () => {
let updatedCats = [...cats];
updatedCats.push(cat);
// setCat("");
setCats(updatedCats)
}

const deleteCategory = () => {
    let updatedCats = [...cats]
    updatedCats.splice(cat)
    setCats(updatedCats)
}


  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text xl mt-8"> Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
            <input type="text" placeholder="Enter Post Title" className="px-4 py-2 outline-none " />
            <input type="file" placeholder="Enter Post Title" className="px-4" />
            <div className="flex flex-col ">
                <div className="flex items-center space-x-4 md:space-x-8">
                    <input value={cat} onChange={(e)=>setCat(e.target.value)} type="text" placeholder="Enter post Category" className="px-4 py-2 outline-none" />
                    <div onClick={addCategory} className="bg-black text-sm text-white px-4 py-2 font-semibold cursor-pointer rounded-md">Add</div>
                </div>

                {/* categories */}
                <div className="flex px-4 mt-3">
                    {cats?.map((a,i) => {
                        <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                        <p>{a}</p>
                        <p onClick={deleteCategory} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"><ImCross /></p>
                    </div>
                    })}
                </div>
            </div>
            <textarea className="px-4 py-2 outline-none bg-slate-100 rounded-sm" placeholder="Enter the Post Descripition" cols="30" rows="15"></textarea>
            <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg ">Create a Post</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreatePosts;
