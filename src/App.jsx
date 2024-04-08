import "./App.css";
import MainLayout from "./layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import Todo from "./pages/Todo";

function App() {
  return (
    <MainLayout>
      <Todo />
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
