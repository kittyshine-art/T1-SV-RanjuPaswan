import { Typography } from "@mui/material";

const Subheading = ({ txt }) => {
  return (
    <Typography
      component="h2"
      sx={{
        fontSize: "40px",
        fontWeight: 700,
        textAlign: "center",
        color: "#0a0a0a",
        mb: 4,
      }}
    >
      {txt}
    </Typography>
  );
};

export default Subheading;