import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Home = ({contents, isPending, error}) => {
    return (
        <div>
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
    );
}

export default Home;