import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("products");
    }

    return (
        <>
            <h1>My Home Page</h1>
            {/* <p>Go to <a href='/products'>the list of products</a></p>  the browser send an http request when using the ancer tag reloading all the js code and ... : for performance reasons and ... */}
            <p>
                {/* Go to <Link to="/products">the list of products</Link> */}
                Go to <Link to="products">the list of products</Link> {/* products is now a relative path */}
            </p>{" "}
            {/* prevent sending a new HTTP request */}
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
};

export default Home;
