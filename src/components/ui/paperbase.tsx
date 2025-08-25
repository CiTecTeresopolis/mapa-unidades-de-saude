import Map from "../map";
import * as React from "react";
import Box from "@mui/material/Box";
import Navigator from "./Navigator";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const drawerWidth = 556;

let theme = createTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f7f7f7ff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

export default function Paperbase() {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [unidadesFiltradas, setUnidadesFiltradas] = React.useState([]);
  const [categoriasFiltradas, setCategoriasFiltradas] = React.useState([]);
  const [bairrosFiltrados, setBairrosFiltrados] = React.useState([]);
  const [distritosFiltrados, setDistritosFiltrados] = React.useState([]);

  const handleUnidadesChange = (event: any, value: any) => {
    console.log(event);
    setUnidadesFiltradas(value);
  };
  const handleCategoriasChange = (event: any, value: any) => {
    console.log(event);
    setCategoriasFiltradas(value);
  };
  const handleBairrosChange = (event: any, value: any) => {
    console.log(event);
    setBairrosFiltrados(value);
  };
  const handleDistritosChange = (event: any, value: any) => {
    console.log(event);
    setDistritosFiltrados(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
            unidadesFiltradas={unidadesFiltradas}
            handleUnidadesChange={handleUnidadesChange}
            categoriasFiltradas={categoriasFiltradas}
            handleCategoriasChange={handleCategoriasChange}
            bairrosFiltrados={bairrosFiltrados}
            handleBairrosChange={handleBairrosChange}
            distritosFiltrados={distritosFiltrados}
            handleDistritosChange={handleDistritosChange}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box component="main" sx={{ flex: 1 }}>
            {!isSmUp && <Box component="section" sx={{ p: 2, fontSize: 12, textAlign: 'center', backgroundColor: '#009be5', fontWeight: 'bold', color: '#fff' }}>
               UNIDADES DE SAÚDE - MUNICÍPIO DE TERESÓPOLIS
            </Box>}
            <Map
              unidadesFiltradas={unidadesFiltradas}
              categoriasFiltradas={categoriasFiltradas}
              bairrosFiltrados={bairrosFiltrados}
              distritosFiltrados={distritosFiltrados}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}