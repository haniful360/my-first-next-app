import Image from 'next/image';
import React from 'react';

const AlbumPage = () => {
    return (
        <div>
            <h2>using images tag</h2>
            <img width="500" height="200" src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <Image width='500' height='200' layout='responsive' src='https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D' alt='' ></Image>
        </div>
    );
};

export default AlbumPage;