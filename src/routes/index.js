import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Pilots from "../pages/Pilots";
import Header from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";



const routes = {
  "/": Home,
  "/:id": Pilots,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.querySelector("#Header");
  const content = null || document.querySelector(".content");

  header.innerHTML = await Header();
  let hash = getHash()
  console.log("hash", hash)
  let route = await resolveRoutes(hash)

  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render()
};

export default router;
