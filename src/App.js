import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={1999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}

export default App;
