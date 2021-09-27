import { createTheme } from "@material-ui/core"



const theme = createTheme({
  palette: {
    primary: {
      main: '#f6cfb2',
    },
    secondary: {
      main: '#D62AD0',
    },
  },
  typography: {
    fontFamily: 'Playfair Display, serif'
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.2em",
        color: 'black',
        backgroundColor: '#FEC260'
      },
    },
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
    MuiCardContent: {
      root: {
        background: 'transparent',
      },
    },
  }
}
)



export default theme;