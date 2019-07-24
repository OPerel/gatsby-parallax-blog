import React from 'react';

import Layout from '../components/layout';
import '../assets/allStyles.css';

export default ({ pageContext }) => {
  console.log(pageContext);
  return(
    <Layout>
      <div style={{ height: '10vh' }}></div>
        <div className="content">
          <div className="post-body">
            <p dangerouslySetInnerHTML={{ __html: pageContext.html }}></p>
          </div>
        </div>
    </Layout>
  )
}
