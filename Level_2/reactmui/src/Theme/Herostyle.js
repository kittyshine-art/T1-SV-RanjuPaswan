export const Herostyle = (theme) => ({
  grid: {
    mb: 5,
    mt: 8,
    px: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    maxWidth:"460px",
    fontSize: "36px",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.15,
    color: theme.palette.text.primary,
    mb: 3,
    ml:5,
    paddingTop: "40px",
  },

  description: {
    maxWidth: "570px",
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    ml:5,
  },

  buttonStack: {
    mt: 3,
    pl:5,
  },

 navbtn: {
  
  color: "#000000 !important",
  "&:hover": {
    color: "#2d2c2c !important",
    backgroundColor: "transparent",
  },
},



  card: {
    maxWidth:"600px",
    maxHeight:"360x",
    mt:14,
    
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: "30px",
    boxShadow: `0px -4px 4px 0px ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
  },

  cardContent: {
    
    padding: "10px important",
  },

  cardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "300px",
    width: "100%",
    gap: "20px",
  },

  arrowImage: {
    width: "12px",
    height: "24px",
  },

  cardHeading: {
    fontSize: "24px",
     alignItems:"center",
     textAlign:"center",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    mt:4,
    mb: 4,
  },

 cardDescription: {
  textAlign: "center",
  maxWidth: "350px",
  margin: "0 auto",
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  fontSize:"17px",
  
},

 dots: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: 4,
  mt:2,
},

});