let div1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head1" }, "hello this is first heading"),
    React.createElement("h1", { id: "head1" }, "hello this is second heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head1" }, "hello this is first heading"),
    React.createElement("h1", { id: "head1" }, "hello this is second heading"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "head", xyz: "abcd" },
  "hello world in react with akshat saini"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(div1);
