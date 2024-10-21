import { Shadows, createTheme } from "@mui/material";

import ExpandMore from "@mui/icons-material/ExpandMore";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
  }
  interface Palette {
    typography: Palette["primary"];
  }
  interface PaletteOptions {
    typography?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    softerGray?: string;
    lightGray?: string;
    grayTextColor?: string;
    mediumGrayTextColor?: string;
    strongGrayTextColor?: string;
    strongerGrayTextColor?: string;
  }
  interface SimplePaletteColorOptions {
    softerGray?: string;
    lightGray?: string;
    grayTextColor?: string;
    mediumGrayTextColor?: string;
    strongGrayTextColor?: string;
    strongerGrayTextColor?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3Semibold?: React.CSSProperties;
    body3Bold?: React.CSSProperties;
    body3?: React.CSSProperties;
    h5Medium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3Semibold?: React.CSSProperties;
    body3Bold?: React.CSSProperties;
    body3?: React.CSSProperties;
    h5Medium?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3Semibold?: true;
    body3Bold?: true;
    body3?: true;
    h5Medium?: true;
    h6: false;
  }
}

export const theme = createTheme({
  // colorSchemes: { light: true, dark: true },
  // cssVariables: {
  //   colorSchemeSelector: "class",
  // },
  palette: {
    primary: {
      main: "#2d71df",
      contrastText: "#fff",
      dark: "#2d71df",
    },
    secondary: {
      main: "#E6EEFB",
      contrastText: "#2d71df",
      dark: "#E6EEFB",
    },
    success: {
      contrastText: "#169e86",
      main: "#E3F3F0",
    },
    error: {
      contrastText: "#ff4158",
      main: "#FFE8EB",
    },
    warning: {
      contrastText: "#AB34D6",
      main: "#F5E7F4",
    },
    info: {
      main: "#FBF9E6",
      contrastText: "#FFB967",
    },
    text: {
      primary: "#202020",
    },
    typography: {
      main: "#202020",
      softerGray: "#EBEAEA",
      lightGray: "#A9AFB7",
      grayTextColor: "#565151",
      mediumGrayTextColor: "#66768C",
      strongGrayTextColor: "#3F4A59",
      strongerGrayTextColor: "#202020",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Figtree, sans-serif",
    h1: {
      fontSize: "2.375rem", //38px
      fontWeight: 600,
      lineHeight: "2.625rem",
    },
    h2: {
      fontSize: "2rem", //32px
      fontWeight: 600,
      lineHeight: "2.813rem",
    },
    h3: {
      fontSize: "1.5rem", //24px
      lineHeight: "1.875rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.125rem", //18px
      lineHeight: "1.375em",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1rem", // 16px
      lineHeight: "1.25rem",
      fontWeight: 600,
    },
    h5Medium: {
      fontSize: "1rem", // 16px
      lineHeight: "1.25rem",
      fontWeight: 500,
    },
    h6: undefined,
    body1: {
      fontSize: "0.625rem", //10px
      lineHeight: "0.75rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.75rem", //12px
      lineHeight: "1rem",
      fontWeight: 500,
    },
    body3: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.125rem",
      fontWeight: 500,
    },
    body3Bold: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.125rem",
      fontWeight: 700,
    },
    body3Semibold: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.125rem",
      fontWeight: 600,
    },
  },
  spacing: 4,
  shadows: [
    "none",
    "0px 0px 3px 0px rgba(68, 77, 90, 0.8)", //component shadow
    ...Array(22).fill("none"),
  ] as Shadows,

  components: {
    MuiList: {
      styleOverrides: {
        root: {
          paddingLeft: 2,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minWidth: "90px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        slotProps: {
          paper: {
            sx: {
              overflow: "visible",
              paddingX: 2,
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1,

              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              // "&::before": {
              //   content: '""',
              //   display: "block",
              //   position: "absolute",
              //   top: 0,
              //   right: 14,
              //   width: 10,
              //   height: 10,
              //   bgcolor: "background.paper",
              //   transform: "translateY(-50%) rotate(45deg)",
              //   zIndex: 0,
              // },
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 3px 0px rgba(68, 77, 90, 0.8)",
          backgroundColor: "#fff",
          borderLeft: "none",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          "@media (min-width: 0px)": { paddingRight: 24, paddingLeft: 24 },
        },
      },
    },

    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            boxShadow: 1,
          },
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        variant: "elevation",
        elevation: 0,
        disableGutters: true,
      },
      variants: [
        {
          props: {
            variant: "outlined",
          },

          style: {
            boxShadow: "0px 0px 3px 0px rgba(68, 77, 90, 0.8)",
            border: "none",
            overflow: "hidden",
            "&:before": { height: "0px" },
            ".MuiAccordionSummary-root": {
              boxShadow: "0px 0px 3px 0px rgba(68, 77, 90, 0.8)",
              border: "none",
            },
          },
        },
        {
          props: {
            variant: "elevation",
          },

          style: {
            paddingX: 0,
            border: "none",
            "&:before": { height: "0px" },
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <ExpandMore />,
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },

    MuiCard: {
      defaultProps: {
        variant: "elevation",
        elevation: 0,
      },
      variants: [
        {
          props: {
            variant: "elevation",
          },

          style: {
            boxShadow: "0px 0px 3px 0px rgba(68, 77, 90, 0.8)",
            padding: 5,
          },
        },
        {
          props: {
            variant: "outlined",
          },

          style: {
            boxShadow: "0",
            height: "70px",
            borderColor: "#D3DAE6",
            padding: "12px",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "filled",
        size: "small",
      },
      variants: [
        {
          props: {
            size: "small",
          },
          style: {
            fontSize: "0.75rem", //12px
            lineHeight: "1rem",
            fontWeight: 500,
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        size: "small",
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "0.875rem", //14px
          lineHeight: "1.125rem",
          fontWeight: 600,
          borderRadius: 50,
          textTransform: "none",

          "&.MuiButtonBase-root:hover": {
            opacity: 0.8,
            transition: "opacity .15s ease-in-out",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#2D71DF",
          height: "0.125rem",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#3F4A59",
          fontSize: "1rem",
          opacity: 1,
          fontWeight: 500,
          fontFamily: "Figtree, sans-serif",
          textTransform: "none",
          "&.Mui-selected": {
            color: "#2D71DF",
            opacity: 1,
            fontWeight: 600,
          },
          "&:focus": {
            color: "#2D71DF",
            opacity: 1,
            fontWeight: 600,
          },
        },
      },
    },
  },
});
