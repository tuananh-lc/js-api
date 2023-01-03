import Navigo from "navigo";
// Component
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import BookDetail from "./pages/book/detail";
import Admin from "./admin/index";
import ManagementBook from "./admin/quantri";
import { apiGet, apiGetCallback, getImage, getImagePromise } from "./api";
// styles
import "../style.css";

// Config router
const router = new Navigo("/", { linksSelector: "a" });

router.on({
  "/": function () {
    print(Home);
  },
  "/san-pham": function () {
    console.log("Sản phẩm");
  },
  "/books/:id": function (pram) {
    print(BookDetail, pram)
  },
  "/admin": function (param) {
    print(Admin, param)
  },
  "/admin/books/:id": function(param) {
    print(ManagementBook, param)
  }
});
router.resolve();
// End config router

async function print(content, param) {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = await content.render(param);
  document.querySelector("#footer").innerHTML = Footer.render();
  if(content.afterRender) {
    await content.afterRender(param)
  }
}


