const helloWorld = <h1>Hello world!</h1>;
const lastName = "Arregui";
const firstName = "Kristopher";

const result = (
  <h1>
    {helloWorld}{" "}
    <span style={{ color: "red", textTransform: "uppercase" }}>{lastName}</span>{" "}
    {firstName[0].toUpperCase() + firstName.slice(1)}
  </h1>
);

ReactDOM.render(result, document.querySelector("#app"));
