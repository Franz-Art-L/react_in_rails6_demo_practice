import React from "react";
import ReactDOM  from "react-dom";
import Layout from './layout';
import './home.scss';

const Home = () => (
    <Layout>
        <h1>Home try again wow </h1>
    </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Home />,
        document.body.appendChild(document.createElement('div')),
    )
})