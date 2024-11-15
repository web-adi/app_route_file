import { CommonAccordianWrap } from "@/styles/StyledComponent/CommonAccordianWrap";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";

export const commonAccordianData = [
  {
    title: "Lorem ipsum dolor sit amet.",
    content: (
      <>
        Amet turpis cras amet consequat cursus scelerisque lacinia magnis donec.
        Semper ut odio odio arcu eget mus velit massa. Volutpat sagittis amet
        aliquam fermentum nisi aenean. Nibh sed est suspendisse fringilla at
        porttitor ultrices commodo. Ipsum in aliquam volutpat tellus enim
        quisque quam. Vitae nunc tristique amet tempus. Consectetur amet
        pellentesque habitant adipiscing volutpat. Ultrices laoreet quis dui ut
        non elementum sed fringilla senectus. Elit neque dui nunc amet sit
        hendrerit accumsan a rutrum. Hendrerit gravida orci congue ac sed hac
        amet a.
        <br /> <br />
        Eget ut purus vel elementum justo tincidunt lectus. Tortor eros id et eu
        condimentum. Consequat quis tincidunt donec pretium sodales mi. Aenean
        dolor dignissim posuere purus.
      </>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    content: (
      <>
        Amet turpis cras amet consequat cursus scelerisque lacinia magnis donec.
        Semper ut odio odio arcu eget mus velit massa. Volutpat sagittis amet
        aliquam fermentum nisi aenean. Nibh sed est suspendisse fringilla at
        porttitor ultrices commodo. Ipsum in aliquam volutpat tellus enim
        quisque quam. Vitae nunc tristique amet tempus. Consectetur amet
        pellentesque habitant adipiscing volutpat. Ultrices laoreet quis dui ut
        non elementum sed fringilla senectus. Elit neque dui nunc amet sit
        hendrerit accumsan a rutrum. Hendrerit gravida orci congue ac sed hac
        amet a.
        <br /> <br />
        Eget ut purus vel elementum justo tincidunt lectus. Tortor eros id et eu
        condimentum. Consequat quis tincidunt donec pretium sodales mi. Aenean
        dolor dignissim posuere purus.
      </>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    content: (
      <>
        Amet turpis cras amet consequat cursus scelerisque lacinia magnis donec.
        Semper ut odio odio arcu eget mus velit massa. Volutpat sagittis amet
        aliquam fermentum nisi aenean. Nibh sed est suspendisse fringilla at
        porttitor ultrices commodo. Ipsum in aliquam volutpat tellus enim
        quisque quam. Vitae nunc tristique amet tempus. Consectetur amet
        pellentesque habitant adipiscing volutpat. Ultrices laoreet quis dui ut
        non elementum sed fringilla senectus. Elit neque dui nunc amet sit
        hendrerit accumsan a rutrum. Hendrerit gravida orci congue ac sed hac
        amet a.
        <br /> <br />
        Eget ut purus vel elementum justo tincidunt lectus. Tortor eros id et eu
        condimentum. Consequat quis tincidunt donec pretium sodales mi. Aenean
        dolor dignissim posuere purus.
      </>
    ),
  },
];

const CommonAccordian = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <CommonAccordianWrap>
      {commonAccordianData.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon="+"
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </CommonAccordianWrap>
  );
};

export default CommonAccordian;
