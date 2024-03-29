import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import FeatureBlock from "common/src/components/FeatureBlock";
import ParticlesComponent from "../particles";
import Container from "common/src/components/UI/Container";
import { Icon } from "react-icons-kit";
import { ic_arrow_forward } from "react-icons-kit/md/ic_arrow_forward";
import { BannerSquareShape, BannerCircleShape } from "../app.style";
import { ButtonWrapper, EmailInputWrapper } from "./banner.style";
import HeadingTitle from "reusecore/src/elements/HeadingTitle";
import SubHeading from "reusecore/src/elements/SubHeading";

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyleTwo
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appScreenshot: file(relativePath: { eq: "image/app/mobile.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box {...SectionWrapper}>
      <ParticlesComponent />
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <FeatureBlock
              title={<HeadingTitle {...title} />}
              description={<SubHeading {...description} />}
            />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
            </EmailInputWrapper>
            <ButtonWrapper>
              <Button title="EXPLORE MORE" {...button} />
              <Button
                {...button}
                {...btnStyleTwo}
                title="WATCH DEMOS"
                icon={<Icon icon={ic_arrow_forward} />}
                className="withoutBg"
              />
            </ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Box {...image}>
              <Image
                fluid={
                  (Data.appScreenshot !== null) | undefined
                    ? Data.appScreenshot.childImageSharp.fluid
                    : {}
                }
                alt="Domain Image"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: "section",
    pt: "80px",
    pb: "80px",
    overflow: "hidden"
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  imageAreaRow: {
    flexDirection: "row-reverse"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "50%", "44%", "44%"],
    mt: "-80px"
  },
  imageArea: {
    width: ["0%", "0%", "43%", "35%", "40%"],
    ml: "auto"
  },
  title: {
    content: "-",
    fontSize: ["24px", "28px", "28px", "46px", "58px"],
    fontWeight: "300",
    color: "#0f2137",
    // lineHeight: "70px",
    letterSpacing: "-0.01px",
    mb: "20px"
  },
  description: {
    content: "-",
    fontSize: "16px",
    color: "#343d48",
    lineHeight: "33px",
    mb: "10px"
  },
  button: {
    type: "button",
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg"
  },
  image: {
    ml: "auto",
    mt: "70px"
  },
  btnStyleTwo: {
    minWidth: "156px",
    ml: "15px",
    bg: "#fff",
    color: "rgb(26, 115, 232)"
  },
  textArea: {
    width: ["100%", "100%", "50%", "55%", "55%"]
  },
  discountAmount: {
    content: "update",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
    bg: "rgb(26, 115, 232)"
  },
  discountText: {
    content: "Version 2.5.0 has just released .",
    fontSize: "13px",
    fontWeight: "400",
    color: "#0f2137",
    mb: 0,
    as: "span",
    ml: "10px"
  }
};

export default DomainSection;
