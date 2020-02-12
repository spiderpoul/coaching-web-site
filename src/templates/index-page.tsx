import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import HomeHeader from "../components/HomePage/HomeHeader";
import PainBlock from "../components/HomePage/PainBlock";
import Waves from "../components/Waves";
import Clouds from "../components/common/Clouds";

const IndexPage = ({ data }) => {
    const {
        frontmatter: { image, heading, pain, whyBlock }
    } = data.markdownRemark;

    return (
        <Layout seoMeta={[]}>
            <Header bgColor="cream">
                <HomeHeader img={image} text={heading} />
            </Header>
            <PainBlock
                painItems={pain?.items}
                title={pain?.title}
                bgSection="cream"
                borderColor="lilac"
                bgColorItems="white"
                image={<Clouds />}
            />
            <Waves fill="cream" />
            <PainBlock
                painItems={whyBlock?.items}
                title={whyBlock?.title}
                bgSection="white"
                borderColor="lilac"
                bgColorItems="lilacLight"
            />
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
                pain {
                    title
                    items
                }
                whyBlock {
                    title
                    items
                }
            }
        }
    }
`;
