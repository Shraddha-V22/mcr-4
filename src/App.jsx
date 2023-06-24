import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SortFilter from "./components/SortFilter";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  console.log(location);
  return (
    <section className="flex min-h-[100vh] w-[100vw] flex-col bg-gray-100">
      <Header />
      <section className="mx-auto flex w-[80%] flex-grow justify-between py-4">
        <aside>
          <SideBar />
        </aside>
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </main>
        {location?.pathname === "/" ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Sort By</h1>
            <SortFilter />
          </div>
        ) : (
          <div className="w-[150px]"></div>
        )}
      </section>
    </section>
  );
}

export default App;
