import { Link, useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const params = useParams(); //useParam will return for example {productId: 123}
    return (
        <>
            <h1>Product Details !</h1>
            <p>{params.productId}</p> {/* to access its value */}
            <p><Link to='..' relative='path'>Back</Link></p> {/* relative='path' to not return to the root path but to go back only one step back */}
        </>
    )
}

export default ProductDetailPage



// useParams is a hook provided by React Router. It allows you to access route parameters from the URL.
// In this case, it retrieves the productId parameter from the URL.
