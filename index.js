// TODO 1:
// Create a React element using React.createElement()
// Tag name: h1
// Text: Welcome to React

const domRoot = React.createElement("h1", null, "Welome to React!");                                       
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// TODO 3:
// Render the element
root.render(root);
