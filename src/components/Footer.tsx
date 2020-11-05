import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Footer: React.FC<{}> = (props) => (
  <Box
    pt={1}
    style={{
      // height: 64,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 9,
      backgroundColor: "rgba(0,0,0,0.06)",
    }}
  >
    <Typography variant="body2">
      Build by saleh jarad © all right recived.
    </Typography>
  </Box>
);

export default Footer;
