
export const Arrowboxstyle = (theme) => ({
  width: "55px",
  height: "55px",
  borderRadius: "15px",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "& img": {
    width: "18px",
    height: "18px",
    objectFit: "contain",
  },
});