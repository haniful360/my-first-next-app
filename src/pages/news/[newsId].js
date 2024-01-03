import { useRouter } from 'next/router';
import React from 'react';

const NewsDetails = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>news details: {router.query.newsId}</h1>
        </div>
    );
};

export default NewsDetails