import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import HomeHeader from "../components/HomePage/HomeHeader";


const IndexPage = ({ data }) => {
  const { frontmatter: {image, heading} } = data.markdownRemark;

  return (
    <Layout seoMeta={[]}>
      <Header bgColor="sand">
        <HomeHeader img={image} text={heading} />
      </Header>
      </Layout>
  );
};

export default IndexPage;


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
