import CommonAccordian from "@/Components/CommonAccordian/CommonAccordian";
import SliderComp from "@/Components/SliderComp/SliderComp";
import {
  Box,
  Button,
  LinearProgress,
  LinearProgressProps,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

export const DemoWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  .loading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    .left {
      display: flex;
      align-items: center;

      .bookImage {
        width: 60px;
        height: 80px;
        border-radius: 5px;
        margin-right: 16px;
        object-fit: cover;
      }

      .bookInfo {
        display: flex;
        flex-direction: column;

        .bookName {
          font-weight: 600;
          font-size: 1rem;
        }

        .author {
          font-size: 0.875rem;
          color: #6b7280; /* gray-500 */
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 10px;

      .progressContainer {
        width: 150px;
      }

      .downloadButton {
        font-size: 0.875rem;
        color: #374151; /* gray-700 */
        background-color: #f3f4f6; /* gray-100 */
        border: 1px solid #d1d5db; /* gray-300 */
        border-radius: 5px;
        padding: 4px 12px;
        text-transform: none;
      }
    }
  }
`;

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: 2, borderRadius: 3, backgroundColor: "#e5e7eb" }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function Demo() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <DemoWrapper className="commonGap">
      <Box className="loading">
        <Box className="left">
          <img
            src="/path/to/book-image.jpg"
            alt="Book Cover"
            className="bookImage"
          />
          <Box className="bookInfo">
            <Typography className="bookName">Book Name Here</Typography>
            <Typography className="author">Aishwarya Sajeevakumaran</Typography>
          </Box>
        </Box>

        {/* Right side with progress and button */}
        <Box className="right">
          <Box className="progressContainer">
            <LinearProgressWithLabel value={progress} />
          </Box>
          <Button className="downloadButton">Downloaded</Button>
        </Box>
      </Box>

      {/* <CommonAccordian /> */}

      <SliderComp />
    </DemoWrapper>
  );
}

export default Demo;
