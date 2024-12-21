import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './Header/header.jsx';
import Main from './Main/main.jsx';
import Footer from './Footer/footer.jsx';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
const rootMain = ReactDOMClient.createRoot(document.getElementById('rootMain'));
const rootFooter = ReactDOMClient.createRoot(document.getElementById('rootFooter'));

root.render(<Header />);
rootMain.render(<Main />);
rootFooter.render(<Footer/>)