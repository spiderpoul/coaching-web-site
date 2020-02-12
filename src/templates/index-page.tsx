import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import HomeHeader from "../components/HomePage/HomeHeader";
import PainBlock from "../components/HomePage/PainBlock";
import Waves from "../components/Waves";
import Clouds from "../components/common/Clouds";
import HowItWorks from "../components/HomePage/HowItWorks";

const IndexPage = ({ data }) => {
    const {
        frontmatter: { image, heading, pain, whyBlock, howItWorks }
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
                borderColor="lilacDark"
                bgColorItems="white"
                image={<Clouds />}
                buttonText={pain?.action}
            />
            <Waves fill="cream" />
            <PainBlock
                painItems={whyBlock?.items}
                title={whyBlock?.title}
                buttonText={whyBlock?.action}
                bgSection="white"
                borderColor="purple"
                bgColorItems="lilacMorning"
            />
            <HowItWorks
                buttonText={howItWorks?.action}
                items={howItWorks?.items}
                title={howItWorks?.title}
                image={howItWorks?.image}
            />
            <Waves fill="lilacEvening" reverse />
            <PainBlock
                painItems={whyBlock?.items}
                title={whyBlock?.title}
                buttonText={whyBlock?.action}
                bgSection="white"
                borderColor="purple"
                bgColorItems="lilacMorning"
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
                    action
                }
                whyBlock {
                    title
                    items
                    action
                }
                howItWorks {
                    title
                    items
                    action
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
