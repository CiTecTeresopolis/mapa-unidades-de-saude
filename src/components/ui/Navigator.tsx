// Navigator.tsx
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import data from "../../utils/unidades_com_coordenadas.json";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Autocomplete, Button, Checkbox, Divider, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const categoryColors: any = {
  "centro municipal de saúde": 'blue',
  "centro de especialidades odontológicas": 'green',
  "estratégia de saúde da família": 'orange',
  "hemonúcleo": 'red',
  "serviço de pronto atendimento": 'purple',
  "unidade básica": 'cadetblue',
  "centro materno infantil": 'pink',
  "upa 24 horas": 'darkred',
};

export default function Navigator(props: any) {
const {
    handleUnidadesChange,
    handleCategoriasChange,
    handleBairrosChange,
    handleDistritosChange,
    unidadesFiltradas = [],
    categoriasFiltradas = [],
    bairrosFiltrados = [],
    distritosFiltrados = [],
    ...other
  } = props;
  const unidades = data.unidades;
  const allBairros = [...new Set(unidades.flatMap((item) => item.bairro))].sort();
  const allDistritos = [...new Set(unidades.flatMap((item) => item.distrito))].sort();
  const allCategorias = [...new Set(unidades.flatMap((item) => item.categoria))].sort();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#009be5" , fontWeight: "bold", textAlign: "center" }}
        >
          UNIDADES DE SAÚDE - MUNICÍPIO DE TERESÓPOLIS
        </ListItem>

        <Divider />

        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#000000ff" }}
        >
          <Autocomplete
            multiple
            id="unidades-select"
            options={unidades}
            value={unidadesFiltradas} 
            onChange={handleUnidadesChange} 
            disableCloseOnSelect
            getOptionLabel={(option) => option.unidade}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                
                 {option.unidade}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por Unidades"
                placeholder="Pesquisar..."
              />
            )}
          />
        </ListItem>

          {/* Filtro por Categoria */}
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#000000ff" }}
        >
          <Autocomplete
            multiple
            id="categorias-select"
            disableCloseOnSelect
            value={categoriasFiltradas} 
            onChange={handleCategoriasChange} 
            options={allCategorias}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <LocationPinIcon style={{ color: categoryColors[option.toLowerCase()] || 'blue', marginRight: 8 }} />
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por Categorias"
                placeholder="Pesquisar..."
              />
            )}
          />
        </ListItem>

        {/* Filtro por Bairro */}
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#000000ff" }}
        >
          <Autocomplete
            multiple
            id="bairro-select"
            options={allBairros}
            value={bairrosFiltrados} 
            onChange={handleBairrosChange} 
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por Bairros"
                placeholder="Pesquisar..."
              />
            )}
          />
        </ListItem>

        {/* Filtro por Distrito */}
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#000000ff" }}
        >
          <Autocomplete
            multiple
            id="distrito-select"
            options={allDistritos}
            disableCloseOnSelect
            value={distritosFiltrados} 
            onChange={handleDistritosChange} 
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por Distrito"
                placeholder="Pesquisar..."
              />
            )}
          />
        </ListItem>

        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 16, color: "#000000ff" }}
        >
          <Button sx={{width: "100%"}} variant="contained">PESQUISAR</Button>
        </ListItem>
      </List>
    </Drawer>
  );
}