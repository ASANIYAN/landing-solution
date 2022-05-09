import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Home = ({contents, isPending, error}) => {
    return (
        <div>
            {
                error && <div> { error } </div>
            }
            {
                isPending && <div> Loading... </div>
            }
            {
                contents &&<Component1 contents={contents} />
            }
            {
                contents &&<Component2 contents={contents} />
            }
            {
                contents &&<Component3 contents={contents} />
            }
        </div>
    );
}

export default Home;