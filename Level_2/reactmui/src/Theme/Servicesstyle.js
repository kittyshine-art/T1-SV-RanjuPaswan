export const Servicesstyle = (theme) => ({
  services: {
    display: "grid",
    gridTemplateCoumns:{
        xs:"1fr",sm:"1fr 1fr",mb:"1fr 1fr 1fr"
    },
    
    alignItems: "center",
    gap: "30px",
    mb: 10,
  },

  stack: {
    justifyContent: "center",
    flexWrap: "wrap",
    gap:"25px",
  },

  box: {
    height: "190px",
    width: "330px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "15px",
    backgroundColor: theme.palette.background.paper,
     boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
  
  
  },

  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  

  heading: {
    fontSize: "22px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    mb: 2,
    textAlign: "center",
  },

 

  text: {
    color: theme.palette.text.secondary,
    textAlign: "center",
    lineHeight: 1.5,
    fontSize:"17px",
  },
});