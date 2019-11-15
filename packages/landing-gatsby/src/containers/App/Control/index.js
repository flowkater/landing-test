import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Card from "reusecore/src/elements/Card";
import Image from "reusecore/src/elements/Image";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import ImageOne from "common/src/assets/image/app/info1.png";
import ImageTwo from "common/src/assets/image/app/info2.png";

const ControllSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle
}) => {
  return (
    <Box {...sectionWrapper} id="control">
      <Container fullWidth noGutter className="control-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image src={ImageTwo} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text
              content="학습에 집중할 수 있는 계획도구"
              {...sectionSubTitle}
            />
            <FeatureBlock
              title={
                <Heading
                  content="나의 모든 계획이 여기에 담겨 있습니다."
                  {...title}
                />
              }
              description={
                <Text
                  content="오늘 하루 해야할 공부 계획에만 집중할 수 있게끔 설계되었습니다. 설계된 계획을 매일 매일 집중만 한다면 여러분들은 원하는 결과를 얻을 수 있습니다. 계획 관리는 코치에게 맡기고 여러분들은 공부에만 집중하세요!"
                  {...description}
                />
              }
              button={<Button title="LEARN MORE" {...button} />}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ControllSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object
};

ControllSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    pt: ["40px", "80px"],
    pb: ["40px", "80px"]
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  textAreaRow: {
    flexDirection: "row-reverse"
  },
  col: {
    pr: "15px",
    pl: "15px"
  },
  textArea: {
    width: ["100%", "100%", "50%", "50%", "50%"]
  },
  imageArea: {
    width: ["0px", "0px", "53%", "50%", "50%"],
    flexBox: true
  },
  imageWrapper: {
    boxShadow: "none"
  },
  imageWrapperOne: {
    pointerEvents: "none"
  },
  imageWrapperTwo: {
    alignSelf: "flex-end",
    mb: "-60px",
    ml: ["0px", "0px", "-200px", "-250px", "-400px"],
    pointerEvents: "none"
  },
  sectionSubTitle: {
    as: "span",
    display: "block",
    fontSize: "14px",
    letterSpacing: "0.11em",
    fontWeight: "700",
    color: "#1a73e8",
    textTransform: "uppercase",
    mb: "10px",
    textAlign: ["center", "left"]
  },
  title: {
    fontSize: ["24px", "26px", "30px", "36px", "48px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "420px", "420px"],
    textAlign: ["center", "left"]
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px",
    maxWidth: ["100%", "100%", "100%", "440px", "440px"],
    textAlign: ["center", "left"]
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
  }
};

export default ControllSection;
