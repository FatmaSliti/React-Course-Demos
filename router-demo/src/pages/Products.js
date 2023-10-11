import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
];

const Products = () => {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {/* <li><Link to='/products/p1'>Product 1</Link></li>
                    <li><Link to= '/products/p2'>Product 2</Link></li> 
                */}
                {PRODUCTS.map((item) => (
                    <li key={item.id}>
                        {/* <Link to={`/products/${item.id}`}>{item.title}</Link> */}
                        {/* <Link to={`${item.id}`}>{item.title}</Link> */}
                        <Link to={item.id}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;

//With relative paths, the framework automatically takes into account the current route and appends the specified path relative to it.
//This makes relative paths dynamic and suitable for situations where you want to navigate within the current route context.
//Absolute paths always start from the root and require the full path to be specified manually.
