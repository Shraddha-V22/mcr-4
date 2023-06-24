import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SortFilter from "./components/SortFilter";

function App() {
  return (
    <section className="flex min-h-[100vh] w-[100vw] flex-col bg-gray-100">
      <Header />
      <section className="mx-auto flex w-[80%] flex-grow justify-start gap-28 py-4">
        <aside>
          <SideBar />
        </aside>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </main>
      </section>
    </section>
  );
}

export default App;
