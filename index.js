// TODO 1:
// Create a React element using React.createElement()
// Tag name: h1
// Text: Welcome to React

const domRoot = React.createElement(
  "div", {id: "root"},
  createElement("h1", null, "Welome to React Framework"
               )
);                                       
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// TODO 3:
// Render the element
root.render(root);
