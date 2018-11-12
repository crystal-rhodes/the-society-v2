import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    This page isn't available - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
