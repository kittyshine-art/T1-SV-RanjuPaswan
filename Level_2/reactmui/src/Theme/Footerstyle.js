export const Footerstyle = (theme) => ({
  footer: {
  backgroundColor:theme.palette.primary.main,
    marginTop: "100px",
    boxShadow: "none",
    
    
  },

  toolbar: {
    minHeight: "166px",
    justifyContent: "space-between",
  },

  text: {
    color: theme.palette.primary.contrastText,
    marginTop: "20px",
  },

  buttons: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    gap:"10px"
    
  },
});