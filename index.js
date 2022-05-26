const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing the dashboard") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing the settings") }
     
  ]
}