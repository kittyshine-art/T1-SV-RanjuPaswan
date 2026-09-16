export const btncolorcss = (theme) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  fontSize: theme.typography.fontSize,
  minWidth: theme.button.minWidth,
  fontWeight: theme.typography.fontWeightRegular,
  textTransform: "none",
  padding:"8px 18px",
  borderRadius:"10px",

  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
});