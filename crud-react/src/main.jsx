import React, { StrictMode } from "react";
import { Container } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AllBooking from "./Components/AllBooking.jsx";
import Update from "./Components/Update.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allBooking",
    element: <AllBooking />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </StrictMode>
);
