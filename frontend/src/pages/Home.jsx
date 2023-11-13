import React from "react";
import HomePosts from "../components/HomePosts";

function Home() {
  return (
    <div className="px-8 md:px-[200px]">
      <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts />
    </div>
  );
}

export default Home;
