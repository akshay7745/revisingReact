const heading = React.createElement(
  "h1",
  { id: "heading", key: "12453" },
  "🙏 Namaste React 🙏"
);
{
  /* <div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
</div>; */
}
const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am h1 tag"),

    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElement);
