// TODO 1:
// Create a React element using React.createElement()
// Tag name: h1
// Text: Welcome to React
import {createElement} from 'react-dom/client';

const domRoot = React.createElement("div", {id = "root"}, createElement("h1", null, "Welome to React Framework"));                                       
const root = createRoot(document.getElementById("root"));


// TODO 3:
// Render the element
root.render(root);
