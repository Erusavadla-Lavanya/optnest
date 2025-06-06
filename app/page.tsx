
import { NextPage } from "next";
// import Searchbar from "./components/Searchbar";
// import Header from "./components/Header";
import SignupPage from "./home/page";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="">
        {/* <Header />
        <Searchbar /> */}
        <SignupPage />
      </main>
    </div>
  );
};

export default HomePage;

