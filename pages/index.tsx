import type { NextPage } from "next";
import Navbar from "../components/common/common-navbar";

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar />
      Hello world! Tailwind working properly ...
    </h1>
  );
};

export default Home;
