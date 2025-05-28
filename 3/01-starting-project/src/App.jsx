import Header from "./components/Header";
import MainGoal from "./components/MainGoal";
import User from "./components/User";
import Compentimg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import propimg from "./assets/config.png";
import stateimg from "./assets/state-mgmt.png";
// ✅ PascalCase Component Name
function CoreComponent(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <main>
          <h2>Core Concepts</h2>
        </main>
        <ul>
          {/* ✅ Use the correct component name */}
          <CoreComponent
            title="Components"
            description="The Core UI Building Block"
            img={Compentimg}
          />
          <CoreComponent
            title="JSX"
            description="Return (potrntially dynamic) HTML (ish) code to define the actual markup that will be renderded"
            img={jsxImg}
          />
          <CoreComponent
            title="Props"
            description="Make the components configurable(and therfore reuable) by passing input data to them"
            img={propimg}
          />
          <CoreComponent
            title="States"
            description="React-managed data whiich , when changed , causes the component to rerender  & the UI to Upadte"
            img={stateimg}
          />
        </ul>


      </section>

      <MainGoal />
      <User />
    </div>
  );
}

export default App;
