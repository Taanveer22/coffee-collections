// react import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// react router import
import { RouterProvider } from "react-router-dom";
import MyRouter from "./routes/MyRouter";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MyRouter}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>
);
