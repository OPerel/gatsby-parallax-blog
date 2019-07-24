const path = require(`path`);
const slash = require(`slash`);

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              author
              date
              title
            }
            html
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors);
  }

  const { edges } = result.data.allMarkdownRemark;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: slash(postTemplate),
      context: {
        post: edge.node,
        title: edge.node.frontmatter.title
      }
    })
  })
}
