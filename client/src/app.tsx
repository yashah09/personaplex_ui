import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";

// Layouts
import { AppShell } from "./components/layout/AppShell";

// Pages
import { Login } from "./pages/auth/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AgentsList } from "./pages/agents/AgentsList";
import { AgentBuilder } from "./pages/agents/AgentBuilder";
import { AgentTest } from "./pages/agents/AgentTest";
import { CallLogs } from "./pages/call-logs/CallLogs";
import { Integrations } from "./pages/integrations/Integrations";
import { Settings } from "./pages/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "agents",
        element: <AgentsList />,
      },
      {
        path: "agents/new",
        element: <AgentBuilder />,
      },
      {
        path: "agents/test",
        element: <AgentTest />,
      },
      {
        path: "call-logs",
        element: <CallLogs />,
      },
      {
        path: "integrations",
        element: <Integrations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
