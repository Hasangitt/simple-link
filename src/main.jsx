import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Haha from "./Haha.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/haha",
    element: <Haha></Haha>,
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="bg-black max-w-sm mx-auto flex flex-col items-center justify-center h-screen">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
