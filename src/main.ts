import "./app.css";
import App from "./App.svelte";

const body = document.querySelector("body");
body!.addEventListener("mousemove", () => {});
const appElement = document.getElementById("app");
if (!appElement) {
    throw new Error("App element not found");
}
const app = new App({
    target: appElement,
});

export default app;

