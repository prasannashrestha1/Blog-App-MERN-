import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function PostDetails() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligene in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-4 ">
          <p>@Prasanna Shrestha</p>
          <div className="flex space-x-2">
            <p>12/12/12</p>
            <p>16:45 am</p>
          </div>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*i3hzpSEiEEMTuWIYviYweQ.png"
          className="w-full mt-8 mx-auto"
        />
        <p className="mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold ">Comments</h3>
            {/* comment */}
            <div className="px-2 py-2 bg-gray-200 rounded-lg">
                
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails;
