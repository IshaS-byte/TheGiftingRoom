import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./pages/Home.jsx";
import Gift from "./pages/Gift.jsx";
import PlanWithAI from "./pages/PlanWithAI.jsx";
import Reminders from "./pages/Reminders.jsx";
import CustomerService from "./pages/CustomerService.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="gifts" element={<Gift />} />
      <Route path="planwithai" element={<PlanWithAI />} />
      <Route path="reminders" element={
        <div className="reminder-container">
          <Reminders />
        </div>
      } />
      <Route path="customerservice" element={<CustomerService />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;