import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Home1 from "./pages/Home1.tsx";
import ItemForm from "./pages/ItemForm.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import ITemDisplay from "./pages/ITemDisplay.tsx";
import ItemDisplay2 from "./pages/ItemDisplay2.tsx";



const router  =createBrowserRouter(
    [
        {
            path:"/home",
            element:<Home/>
        },

        {
            path:"/home1",
            element:<Home1/>
        },

        {
            path:"/itemform",
            element:<ItemForm/>
        },
        {
            path:"/itemform/:pk_id",
            element:<ItemForm/>
        },

        {
            path:"/itemget",
            element:<ITemDisplay/>
        },

        {
            path:"/itemget2",
            element:<ItemDisplay2/>
        },
    ]
)

const queryClient= new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  )
}

export default App
