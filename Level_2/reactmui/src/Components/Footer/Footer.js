import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Navbtn from "../Button/Navbtn";
import Colorbtn from "../Button/Colorbtn";
import Text from "../Text/Text";

import { Footerstyle } from "../../Theme/Footerstyle";

const Footer = () => {
  const theme = useTheme();
  const styles = Footerstyle(theme);

  return (
    <AppBar
      position="static"
      sx={styles.footer}
    >
      <Container maxWidth="lg">

        <Toolbar
          disableGutters
          sx={styles.toolbar}
        >

          <Text
            txt="© 2023 WebTech Practice. Built for learning and growth."
            sx={styles.text}
          />

         <Stack
            direction="row"
            spacing={3}
            sx={styles.buttons}
          >

          <Navbtn href="#about" txt="About" />

          <Navbtn txt="Services" />

          <Navbtn txt="Theme" />

          <Navbtn txt="Login" />

          <Colorbtn txt="Sign Up" />

        </Stack>

        </Toolbar>

      </Container>
    </AppBar>
  );
};

export default Footer;