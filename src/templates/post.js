import React from 'react';

import Layout from '../components/layout';
import '../assets/allStyles.css';

export default ({ pageContext }) => {
  console.log(pageContext);
  return(
    <Layout>
      <div style={{ height: '100vh' }}>
        <div className="about">
          <p>{pageContext.html}</p>
        </div>
      </div>
    </Layout>
  )
}
