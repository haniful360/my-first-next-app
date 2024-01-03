import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>this is product deatils id: {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetails;