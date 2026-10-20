import { createBrowserRouter } from "react-router";
import Contact from "./pages/Contact";
import Root from "./components/Root";
import Home from "./pages/Home";
import BecomeExpert from "./pages/BecomeExpert";
import JoinGetPaid from "./pages/JoinGetPaid";
import PanelExplorer from "./pages/PanelExplorer";
import LiveProjects from "./pages/LiveProjects";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Team from "./pages/Team";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Consultation from "./pages/Consultation";
import Compliance from "./pages/Compliance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import { serviceSlugs } from "./data/services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "panel-explorer", Component: PanelExplorer },
      { path: "live-projects", Component: LiveProjects },
      { path: "join-and-get-paid", Component: JoinGetPaid },
      { path: "about", Component: About },
      { path: "industries", Component: Industries },
      { path: "services", Component: Services },
      { path: "blogs", Component: Blogs },
      { path: "blogs/:slug", Component: BlogPost },
      { path: "team", Component: Team },
      { path: "consultation", Component: Consultation },
      { path: "compliances", Component: Compliance },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "contact", Component: Contact },
      { path: "careers", Component: Careers },
      ...serviceSlugs.map((slug) => ({
        path: `services/${slug}`,
        Component: ServicePage,
      })),
      { path: "*", Component: NotFound },
    ],
  },
  { path: "/become-irg-expert", Component: BecomeExpert },
]);
