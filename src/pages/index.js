// import { Layout } from 'antd';
import React from 'react';
import RootLayout from '../components/Layout/RootLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home-Next</title>
        <meta name='Home page' description='this is created in Next.js'></meta>
      </Head>
      <h1>this is main home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}