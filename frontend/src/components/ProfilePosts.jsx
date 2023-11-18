

function ProfilePosts() {
  return (
    <div>
       <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
      <img src="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg" alt="" className="h-full w-full object-cover" />
    </div>

    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        10 Uses of Artificial Intelligene in Day to Day Life
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@Prasanna Shrestha</p>
        <div className="flex space-x-2">
          <p>12/12/12</p>
          <p>16:45 am</p>
        </div>
      </div>
      <p className="text-sm md:text-lg "> Dummy Datas alll aboutejlajfdlkjafkljlajf  this is the afjklajfkljalkf  jklafjdlajfkl a adfjalsj</p>
    </div>
  </div>
    </div>
  )
}

export default ProfilePosts
