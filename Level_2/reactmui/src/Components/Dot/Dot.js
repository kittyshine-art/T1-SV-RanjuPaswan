
import { Box } from "@mui/material";

const Dot = ({ sx }) => {
  return (
    <Box
      sx={{
        width: "10px",
        mb:"20px",
        height: "10px",
        minWidth: "10px",
        borderRadius: "50%",
        backgroundColor: "#14b8a6",
        display: "block",
        ...sx,
      }}
    />
  );
};

export default Dot;