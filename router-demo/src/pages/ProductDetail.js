import { Link, useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const params = useParams();
    return (
        <>
            <h1>Product Details !</h1>
            <p>{params.productId}</p>
            <p><Link to='..' relative='path'>Back</Link></p> {/* relative='path' to not return to the root path but to go back only one step back */}
        </>
    )
}

export default ProductDetailPage
