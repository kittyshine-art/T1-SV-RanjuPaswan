export const Aboutstyle = (theme) => ({
  about: {
    textAlign: "center",
    mt:19,
    mb: 10,
  },

  description: {
    maxWidth: "738px",
    display: "flex",
    justifySelf: "center",
    mb: 4,
    mt: 2,
    color: theme.palette.text.secondary,
  },

  infoStack: {
    width: "600px",
    maxWidth: "90%",
    mx: "auto",
    mb: 1,
  },

  infoBox: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "12px",
  },

  infoText: {
    color: theme.palette.text.secondary,
  },
});

