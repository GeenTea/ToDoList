import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from "./pages/mainPage.jsx";

/* This code snippet is using React's experimental createRoot API to render the MainPage component into
the DOM. Here's a breakdown of what each part of the code is doing: */
createRoot(document.getElementById('root')).render(
  <StrictMode>
   { /* `<MainPage />` is a JSX syntax that represents the MainPage component being rendered in the
    React application. When this JSX element is included within the render method of the createRoot
    API, it instructs React to render the MainPage component onto the DOM. */}
    <MainPage />
  </StrictMode>,
)
