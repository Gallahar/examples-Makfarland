import "./App.css";
import { Lessons } from "./Lessons";
import { Lesson2Another } from "./Lessons/Lesson2/index2";
import { Lesson2 } from "./Lessons/Lesson2";
import { Lesson3 } from "./Lessons/Lesson3";
import { Lesson4 } from "./Lessons/Lesson4";
import { Lesson5 } from "./Lessons/Lesson5";
import { Lesson6 } from "./Lessons/Lesson6";
import { Lesson7 } from "./Lessons/Lesson7";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Lessons />} />
        <Route path="lesson2" element={<Lesson2 />} />
        <Route path="lesson2/Another" element={<Lesson2Another />} />
        <Route />
        <Route path="lesson3" element={<Lesson3 />} />
        <Route path="lesson4" element={<Lesson4 />} />
        <Route path="lesson5" element={<Lesson5 />} />
        <Route path="lesson6" element={<Lesson6 />} />
        <Route path="lesson7" element={<Lesson7 />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
