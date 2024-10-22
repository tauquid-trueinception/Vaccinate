"use client";
import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { createTheme } from "@mui/material";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import * as baseColors from "tailwindcss/colors";

export const customTheme = {
  aliasColors: {
    primary: baseColors.orange,
    secondary: baseColors.neutral,
    info: baseColors.blue,
    warning: baseColors.amber,
    error: baseColors.red,
    success: baseColors.green,
  },
  textIconography: {
    dark: {
      active: "rgba(255, 255, 255, 0.87)",
      inactive: "rgba(255, 255, 255, 0.60)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
    light: {
      active: "rgba(0, 0, 0, 0.87)",
      inactive: "rgba(0, 0, 0, 0.60)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  mappedColors: {
    text: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.textIconography.light.active
          : customTheme.textIconography.dark.active;
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.textIconography.light.inactive
          : customTheme.textIconography.dark.inactive;
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.textIconography.light.disabled
          : customTheme.textIconography.dark.disabled;
      },
    },
    textPrimary: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.primary["500"]
          : customTheme.aliasColors.primary["300"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.primary["300"]
          : customTheme.aliasColors.primary["500"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.primary["200"]
          : customTheme.aliasColors.primary["800"];
      },
    },
    textSecondary: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.secondary["500"]
          : customTheme.aliasColors.secondary["400"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.secondary["300"]
          : customTheme.aliasColors.secondary["700"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.secondary["200"]
          : customTheme.aliasColors.secondary["900"];
      },
    },
    textInfo: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.info["500"]
          : customTheme.aliasColors.info["300"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.info["300"]
          : customTheme.aliasColors.info["500"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.info["200"]
          : customTheme.aliasColors.info["700"];
      },
    },
    textWarning: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.warning["500"]
          : customTheme.aliasColors.warning["300"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.warning["300"]
          : customTheme.aliasColors.warning["500"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.warning["200"]
          : customTheme.aliasColors.warning["700"];
      },
    },
    textSuccess: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.success["500"]
          : customTheme.aliasColors.success["300"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.success["300"]
          : customTheme.aliasColors.success["500"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.success["200"]
          : customTheme.aliasColors.success["700"];
      },
    },
    textError: {
      active(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.error["500"]
          : customTheme.aliasColors.error["400"];
      },
      inactive(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.error["300"]
          : customTheme.aliasColors.error["600"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.error["200"]
          : customTheme.aliasColors.error["800"];
      },
    },
    border: {
      page(mode: "light" | "dark") {
        return mode === "light"
          ? baseColors.stone["300"]
          : baseColors.stone["700"];
      },
      primary(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.primary["300"]
          : customTheme.aliasColors.primary["700"];
      },
      secondary(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.secondary["300"]
          : customTheme.aliasColors.secondary["700"];
      },
      info(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.info["300"]
          : customTheme.aliasColors.info["700"];
      },
      warning(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.warning["300"]
          : customTheme.aliasColors.warning["700"];
      },
      error(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.error["300"]
          : customTheme.aliasColors.error["700"];
      },
      success(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.success["300"]
          : customTheme.aliasColors.success["700"];
      },
      disabled(mode: "light" | "dark") {
        return mode === "light"
          ? baseColors.neutral["300"]
          : baseColors.neutral["700"];
      },
    },
    surface: {
      sidebar(mode: "light" | "dark") {
        return mode === "light" ? baseColors.white : baseColors.stone["800"];
      },
      page(mode: "light" | "dark") {
        return mode === "light"
          ? baseColors.stone["50"]
          : baseColors.stone["900"];
      },
      primary(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.primary["50"]
          : customTheme.aliasColors.primary["950"];
      },
      secondary(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.secondary["50"]
          : customTheme.aliasColors.secondary["950"];
      },
      info(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.info["50"]
          : customTheme.aliasColors.info["950"];
      },
      warning(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.warning["50"]
          : customTheme.aliasColors.warning["950"];
      },
      error(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.error["50"]
          : customTheme.aliasColors.error["950"];
      },
      success(mode: "light" | "dark") {
        return mode === "light"
          ? customTheme.aliasColors.success["50"]
          : customTheme.aliasColors.success["950"];
      },
    },
    shade: {
      50(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["50"]
          : baseColors.stone["950"];
      },
      100(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["100"]
          : baseColors.stone["900"];
      },
      200(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["200"]
          : baseColors.stone["800"];
      },
      300(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["300"]
          : baseColors.stone["700"];
      },
      400(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["400"]
          : baseColors.stone["600"];
      },
      500(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["500"]
          : baseColors.stone["500"];
      },
      600(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["600"]
          : baseColors.stone["400"];
      },
      700(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["700"]
          : baseColors.stone["300"];
      },
      800(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["800"]
          : baseColors.stone["200"];
      },
      900(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["900"]
          : baseColors.stone["100"];
      },
      950(mode: "dark" | "light") {
        return mode === "light"
          ? baseColors.stone["950"]
          : baseColors.stone["50"];
      },
    },
    shadow: {
      10(mode: "dark" | "light") {
        return mode === "light"
          ? "rgba(10, 10, 10, 0.1)"
          : "rgba(10, 10, 10, 0.1)";
      },
      20(mode: "dark" | "light") {
        return mode === "light"
          ? "rgba(10, 10, 10, 0.2)"
          : "rgba(10, 10, 10, 0.2)";
      },
    },
    action: {
      primary: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["500"]
            : customTheme.aliasColors.primary["500"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["700"]
            : customTheme.aliasColors.primary["400"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["800"]
            : customTheme.aliasColors.primary["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["800"]
            : customTheme.aliasColors.primary["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["300"]
            : customTheme.aliasColors.primary["900"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["50"]
            : customTheme.aliasColors.primary["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["200"]
            : customTheme.aliasColors.primary["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.primary["100"]
            : customTheme.aliasColors.primary["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
      secondary: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["600"]
            : customTheme.aliasColors.secondary["500"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["700"]
            : customTheme.aliasColors.secondary["500"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["800"]
            : customTheme.aliasColors.secondary["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["800"]
            : customTheme.aliasColors.secondary["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["300"]
            : customTheme.aliasColors.secondary["800"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["50"]
            : customTheme.aliasColors.secondary["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["200"]
            : customTheme.aliasColors.secondary["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.secondary["100"]
            : customTheme.aliasColors.secondary["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
      info: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["600"]
            : customTheme.aliasColors.info["600"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["700"]
            : customTheme.aliasColors.info["500"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["800"]
            : customTheme.aliasColors.info["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["800"]
            : customTheme.aliasColors.info["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["300"]
            : customTheme.aliasColors.info["900"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["50"]
            : customTheme.aliasColors.info["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["200"]
            : customTheme.aliasColors.info["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.info["100"]
            : customTheme.aliasColors.info["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
      warning: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["600"]
            : customTheme.aliasColors.warning["600"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["700"]
            : customTheme.aliasColors.warning["500"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["800"]
            : customTheme.aliasColors.warning["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["800"]
            : customTheme.aliasColors.warning["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["300"]
            : customTheme.aliasColors.warning["900"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["50"]
            : customTheme.aliasColors.warning["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["200"]
            : customTheme.aliasColors.warning["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.warning["100"]
            : customTheme.aliasColors.warning["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
      success: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["600"]
            : customTheme.aliasColors.success["600"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["700"]
            : customTheme.aliasColors.success["500"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["800"]
            : customTheme.aliasColors.success["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["800"]
            : customTheme.aliasColors.success["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["300"]
            : customTheme.aliasColors.success["900"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["50"]
            : customTheme.aliasColors.success["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["200"]
            : customTheme.aliasColors.success["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.success["100"]
            : customTheme.aliasColors.success["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
      error: {
        main(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["600"]
            : customTheme.aliasColors.error["600"];
        },
        hover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["700"]
            : customTheme.aliasColors.error["500"];
        },
        pressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["800"]
            : customTheme.aliasColors.error["700"];
        },
        focused(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["800"]
            : customTheme.aliasColors.error["700"];
        },
        disabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["300"]
            : customTheme.aliasColors.error["900"];
        },
        textMain(mode: "light" | "dark") {
          return mode === "light" ? baseColors.white : baseColors.white;
        },
        textHover(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["50"]
            : customTheme.aliasColors.error["50"];
        },
        textPressed(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["200"]
            : customTheme.aliasColors.error["200"];
        },
        textDisabled(mode: "light" | "dark") {
          return mode === "light"
            ? customTheme.aliasColors.error["100"]
            : customTheme.aliasColors.error["600"];
        },
        textFocused(mode: "light" | "dark") {
          return mode === "light"
            ? baseColors.neutral["50"]
            : baseColors.neutral["50"];
        },
      },
    },
  },
};

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: "filled" | "outlined" | "standard";
    shape?: "circle" | "rounded";
  }

  interface IconButtonPropsColorOverrides {
    transparent: true;
  }

  interface IconButtonPropsSizeOverrides {
    xsmall: true;
  }
}

// font

declare module "@mui/material/styles" {
  interface PaletteOptions {
    surface?: {
      sidebar?: string;
      page?: string;
      primary?: string;
      secondary?: string;
      info?: string;
      warning?: string;
      error?: string;
      success?: string;
    };
    shade?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    shadow?: {
      10?: string;
      20?: string;
    };
    textActive?: string;
    textInactive?: string;
    textDisabled?: string;
    textPrimary?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    textSecondary?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    textInfo?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    textWarning?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    textError?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    textSuccess?: {
      active?: string;
      inactive?: string;
      disabled?: string;
    };
    border?: {
      page?: string;
      primary?: string;
      secondary?: string;
      info?: string;
      warning?: string;
      error?: string;
      success?: string;
      disabled?: string;
    };
    actions?: {
      primary: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
      secondary: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
      info: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
      warning: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
      error: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
      success: {
        main?: string;
        hover?: string;
        pressed?: string;
        focused?: string;
        disabled?: string;
        textMain?: string;
        textHover?: string;
        textPressed?: string;
        textDisabled?: string;
        textFocused?: string;
      };
    };
  }
  interface TypographyVariantsOptions {
    d1?: React.CSSProperties;
    d2?: React.CSSProperties;
    d3?: React.CSSProperties;
    d4?: React.CSSProperties;
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p4?: React.CSSProperties;
    l1?: React.CSSProperties;
    l2?: React.CSSProperties;
    l3?: React.CSSProperties;
    l4?: React.CSSProperties;
    overlineLarge?: React.CSSProperties;
    overlineSmall?: React.CSSProperties;
  }

  interface AlertPropsColorOptions {
    error?: React.CSSProperties;
    warning?: React.CSSProperties;
    success?: React.CSSProperties;
    info?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }

  interface SelectPropsColorOptions {
    primary?: React.CSSProperties;
    success?: React.CSSProperties;
    warming?: React.CSSProperties;
    info?: React.CSSProperties;
    secondary?: React.CSSProperties;
    error?: React.CSSProperties;
  }

  interface ChipPropsSizeOptions {
    large?: React.CSSProperties;
    medium?: React.CSSProperties;
    small?: React.CSSProperties;
  }

  interface ChipPropsColorOptions {
    primary?: React.CSSProperties;
    success?: React.CSSProperties;
    warning?: React.CSSProperties;
    info?: React.CSSProperties;
    secondary?: React.CSSProperties;
    error?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true;
    d2: true;
    d3: true;
    d4: true;
    p1: true;
    p2: true;
    p3: true;
    p4: true;
    l1: true;
    l2: true;
    l3: true;
    l4: true;
    overlineLarge: true;
    overlineSmall: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    error: true;
    warning: true;
    success: true;
    info: true;
    secondary: true;
  }
}

declare module "@mui/material/Select" {
  interface SelectPropsColorOverrides {
    primary: true;
    success: true;
    warning: true;
    info: true;
    secondary: true;
    error: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    large: true;
    medium: true;
    small: true;
  }

  interface ChipPropsColorOverrides {
    primary: true;
    secondary: true;
    info: true;
    warning: true;
    success: true;
    error: true;
  }
}

// override default muiBadge
declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    filled: true;
    outline: true;
  }
}

const font = { style: { fontFamily: '"Poppins", sans-serif' } };

const Theme = ({ mode = "light" }: { mode: "light" | "dark" }) => {
  return createTheme({
    palette: {
      mode,
      background: {
        default:
          mode == "light"
            ? customTheme.aliasColors.secondary["50"]
            : customTheme.aliasColors.secondary["950"],
      },
      primary: {
        main: customTheme.aliasColors.primary["500"],
        ...customTheme.aliasColors.primary,
      },
      secondary: {
        main: customTheme.aliasColors.secondary["500"],
        ...customTheme.aliasColors.secondary,
      },
      info: {
        main: customTheme.aliasColors.info["500"],
        ...customTheme.aliasColors.secondary,
      },
      warning: {
        main: customTheme.aliasColors.info["500"],
        ...customTheme.aliasColors.warning,
      },
      error: {
        main: customTheme.aliasColors.error["500"],
        ...customTheme.aliasColors.error,
      },
      success: {
        main: customTheme.aliasColors.success["500"],
        ...customTheme.aliasColors.success,
      },
      surface: {
        sidebar: customTheme.mappedColors.surface.sidebar(mode),
        page: customTheme.mappedColors.surface.page(mode),
        primary: customTheme.mappedColors.surface.primary(mode),
        secondary: customTheme.mappedColors.surface.secondary(mode),
        info: customTheme.mappedColors.surface.info(mode),
        warning: customTheme.mappedColors.surface.warning(mode),
        error: customTheme.mappedColors.surface.error(mode),
        success: customTheme.mappedColors.surface.success(mode),
      },
      shade: {
        50: customTheme.mappedColors.shade[50](mode),
        100: customTheme.mappedColors.shade[100](mode),
        200: customTheme.mappedColors.shade[200](mode),
        300: customTheme.mappedColors.shade[300](mode),
        400: customTheme.mappedColors.shade[400](mode),
        500: customTheme.mappedColors.shade[500](mode),
        600: customTheme.mappedColors.shade[600](mode),
        700: customTheme.mappedColors.shade[700](mode),
        800: customTheme.mappedColors.shade[800](mode),
        900: customTheme.mappedColors.shade[900](mode),
        950: customTheme.mappedColors.shade[950](mode),
      },
      shadow: {
        10: customTheme.mappedColors.shadow[10](mode),
        20: customTheme.mappedColors.shadow[20](mode),
      },
      textActive: customTheme.textIconography[mode].active,
      textInactive: customTheme.textIconography[mode].inactive,
      textDisabled: customTheme.textIconography[mode].disabled,
      textPrimary: {
        active: customTheme.mappedColors.textPrimary.active(mode),
        inactive: customTheme.mappedColors.textPrimary.inactive(mode),
        disabled: customTheme.mappedColors.textPrimary.disabled(mode),
      },
      textSecondary: {
        active: customTheme.mappedColors.textSecondary.active(mode),
        inactive: customTheme.mappedColors.textSecondary.inactive(mode),
        disabled: customTheme.mappedColors.textSecondary.disabled(mode),
      },
      textInfo: {
        active: customTheme.mappedColors.textInfo.active(mode),
        inactive: customTheme.mappedColors.textInfo.inactive(mode),
        disabled: customTheme.mappedColors.textInfo.disabled(mode),
      },
      textWarning: {
        active: customTheme.mappedColors.textWarning.active(mode),
        inactive: customTheme.mappedColors.textWarning.inactive(mode),
        disabled: customTheme.mappedColors.textWarning.disabled(mode),
      },
      textError: {
        active: customTheme.mappedColors.textError.active(mode),
        inactive: customTheme.mappedColors.textError.inactive(mode),
        disabled: customTheme.mappedColors.textError.disabled(mode),
      },
      textSuccess: {
        active: customTheme.mappedColors.textSuccess.active(mode),
        inactive: customTheme.mappedColors.textSuccess.inactive(mode),
        disabled: customTheme.mappedColors.textSuccess.disabled(mode),
      },
      border: {
        page: customTheme.mappedColors.border.page(mode),
        primary: customTheme.mappedColors.border.primary(mode),
        secondary: customTheme.mappedColors.border.secondary(mode),
        info: customTheme.mappedColors.border.info(mode),
        warning: customTheme.mappedColors.border.warning(mode),
        error: customTheme.mappedColors.border.error(mode),
        success: customTheme.mappedColors.border.success(mode),
        disabled: customTheme.mappedColors.border.disabled(mode),
      },
      actions: {
        primary: {
          textMain: customTheme.mappedColors.action.primary.textMain(mode),
          textHover: customTheme.mappedColors.action.primary.textHover(mode),
          textPressed:
            customTheme.mappedColors.action.primary.textPressed(mode),
          textDisabled:
            customTheme.mappedColors.action.primary.textDisabled(mode),
          textFocused:
            customTheme.mappedColors.action.primary.textFocused(mode),
        },
        secondary: {
          textMain: customTheme.mappedColors.action.secondary.textMain(mode),
          textHover: customTheme.mappedColors.action.secondary.textHover(mode),
          textPressed:
            customTheme.mappedColors.action.secondary.textPressed(mode),
          textDisabled:
            customTheme.mappedColors.action.secondary.textDisabled(mode),
          textFocused:
            customTheme.mappedColors.action.secondary.textFocused(mode),
        },
        info: {
          textMain: customTheme.mappedColors.action.info.textMain(mode),
          textHover: customTheme.mappedColors.action.info.textHover(mode),
          textPressed: customTheme.mappedColors.action.info.textPressed(mode),
          textDisabled: customTheme.mappedColors.action.info.textDisabled(mode),
          textFocused: customTheme.mappedColors.action.info.textFocused(mode),
        },
        warning: {
          textMain: customTheme.mappedColors.action.warning.textMain(mode),
          textHover: customTheme.mappedColors.action.warning.textHover(mode),
          textPressed:
            customTheme.mappedColors.action.warning.textPressed(mode),
          textDisabled:
            customTheme.mappedColors.action.warning.textDisabled(mode),
          textFocused:
            customTheme.mappedColors.action.warning.textFocused(mode),
        },
        error: {
          textMain: customTheme.mappedColors.action.error.textMain(mode),
          textHover: customTheme.mappedColors.action.error.textHover(mode),
          textPressed: customTheme.mappedColors.action.error.textPressed(mode),
          textDisabled:
            customTheme.mappedColors.action.error.textDisabled(mode),
          textFocused: customTheme.mappedColors.action.error.textFocused(mode),
        },
        success: {
          textMain: customTheme.mappedColors.action.success.textMain(mode),
          textHover: customTheme.mappedColors.action.success.textHover(mode),
          textPressed:
            customTheme.mappedColors.action.success.textPressed(mode),
          textDisabled:
            customTheme.mappedColors.action.success.textDisabled(mode),
          textFocused:
            customTheme.mappedColors.action.success.textFocused(mode),
        },
      },
    },
    typography: {
      allVariants: {
        color: customTheme.textIconography[mode].active,
        fontWeight: 500,
      },

      fontFamily: "Work Sans",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,

      /** for the display */
      d1: {
        fontSize: "70px",
        fontStyle: "normal",
        lineHeight: "80px",
        letterSpacing: "-1.4px",
      },
      d2: {
        fontSize: "56px",
        fontStyle: "normal",
        lineHeight: "64px",
        letterSpacing: "-1.12px",
      },
      d3: {
        fontSize: "45px",
        fontStyle: "normal",
        lineHeight: "56px",
        letterSpacing: "-0.9px",
      },
      d4: {
        fontSize: "36px",
        fontStyle: "normal",
        lineHeight: "44px",
        letterSpacing: "-0.72px",
      },

      /**for the heading */
      h1: {
        fontSize: "60px",
        fontStyle: "normal",
        lineHeight: "72px",
        letterSpacing: "-1.2px",
      },
      h2: {
        fontSize: "48px",
        fontStyle: "normal",
        lineHeight: "56px",
        letterSpacing: "-0.96px",
      },
      h3: {
        fontSize: "40px",
        fontStyle: "normal",
        lineHeight: "48px",
        letterSpacing: "-0.8px",
      },
      h4: {
        fontSize: "32px",
        fontStyle: "normal",
        lineHeight: "40px",
        letterSpacing: "-0.64px",
      },
      h5: {
        fontSize: "24px",
        fontStyle: "normal",
        lineHeight: "32px",
        letterSpacing: "-0.48px",
      },
      h6: {
        fontSize: "20px",
        fontStyle: "normal",
        lineHeight: "24px",
        letterSpacing: "-0.4px",
      },

      /** for the paragraph*/
      p1: {
        fontSize: "20px",
        fontStyle: "normal",
        lineHeight: "28px",
      },
      p2: {
        fontSize: "18px",
        fontStyle: "normal",
        lineHeight: "24px",
      },
      p3: {
        fontSize: "14px",
        fontStyle: "normal",
        lineHeight: "20px",
      },
      p4: {
        fontSize: "12px",
        fontStyle: "normal",
        lineHeight: "16px",
      },

      /** for the label  */

      l1: {
        fontSize: "16px",
        lineHeight: "24px",
      },

      l2: {
        fontSize: "14px",
        lineHeight: "20px",
      },

      l3: {
        fontSize: "14px",
        lineHeight: "16px",
      },

      l4: {
        fontSize: "10px",
        lineHeight: "14px",
      },

      /**for the overline */
      overlineLarge: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
        fontVariant: "all-small-caps",
        letterSpacing: "0.14px",
      },
      overlineSmall: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "16px",
        fontVariant: "all-small-caps",
        letterSpacing: "0.12px",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "text",
          color: "secondary",
          size: "medium",
        },
        styleOverrides: {
          root: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.textMain(mode),
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
            fontWeight: 400,
            borderRadius: "4px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.primary.hover(mode),
              color: customTheme.mappedColors.action.primary.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.primary.pressed(mode),
              color: customTheme.mappedColors.action.primary.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.textDisabled(mode),
            },
          },

          // for the size variant
          sizeSmall: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
            padding: "8px 12px",
          },
          sizeMedium: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            padding: "10px 16px",
          },
          sizeLarge: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            padding: "12px 20px",
          },

          // contained variants
          containedPrimary: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.textMain(mode),
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.primary.hover(mode),
              color: customTheme.mappedColors.action.primary.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.primary.pressed(mode),
              color: customTheme.mappedColors.action.primary.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.textDisabled(mode),
            },
          },
          containedSecondary: {
            backgroundColor:
              customTheme.mappedColors.action.secondary.main(mode),
            color: customTheme.mappedColors.action.secondary.textMain(mode),
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.secondary.hover(mode),
              color: customTheme.mappedColors.action.secondary.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.secondary.pressed(mode),
              color:
                customTheme.mappedColors.action.secondary.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.secondary.disabled(mode),
              color:
                customTheme.mappedColors.action.secondary.textDisabled(mode),
            },
          },
          containedInfo: {
            backgroundColor: customTheme.mappedColors.action.info.main(mode),
            color: customTheme.mappedColors.action.info.textMain(mode),
            "&:hover": {
              backgroundColor: customTheme.mappedColors.action.info.hover(mode),
              color: customTheme.mappedColors.action.info.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.info.pressed(mode),
              color: customTheme.mappedColors.action.info.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.info.disabled(mode),
              color: customTheme.mappedColors.action.info.textDisabled(mode),
            },
          },
          containedWarning: {
            backgroundColor: customTheme.mappedColors.action.warning.main(mode),
            color: customTheme.mappedColors.action.warning.textMain(mode),
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.warning.hover(mode),
              color: customTheme.mappedColors.action.warning.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.warning.pressed(mode),
              color: customTheme.mappedColors.action.warning.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.warning.disabled(mode),
              color: customTheme.mappedColors.action.warning.textDisabled(mode),
            },
          },
          containedError: {
            backgroundColor: customTheme.mappedColors.action.error.main(mode),
            color: customTheme.mappedColors.action.error.textMain(mode),
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.error.hover(mode),
              color: customTheme.mappedColors.action.error.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.error.pressed(mode),
              color: customTheme.mappedColors.action.error.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.error.disabled(mode),
              color: customTheme.mappedColors.action.error.textDisabled(mode),
            },
          },
          containedSuccess: {
            backgroundColor: customTheme.mappedColors.action.success.main(mode),
            color: customTheme.mappedColors.action.success.textMain(mode),
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.success.hover(mode),
              color: customTheme.mappedColors.action.success.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.success.pressed(mode),
              color: customTheme.mappedColors.action.success.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.success.disabled(mode),
              color: customTheme.mappedColors.action.success.textDisabled(mode),
            },
          },

          // for the outlined variants
          outlinedPrimary: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.primary.hover(mode),
              color: customTheme.mappedColors.action.primary.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.primary.pressed(mode),
              color: customTheme.mappedColors.action.primary.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.disabled(mode),
            },
          },
          outlinedSecondary: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.secondary.main(mode),
            color: customTheme.mappedColors.action.secondary.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.secondary.hover(mode),
              color: customTheme.mappedColors.action.secondary.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.secondary.pressed(mode),
              color: customTheme.mappedColors.action.secondary.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.secondary.disabled(mode),
              color: customTheme.mappedColors.action.secondary.disabled(mode),
            },
          },
          outlinedInfo: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.info.main(mode),
            color: customTheme.mappedColors.action.info.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.info.hover(mode),
              color: customTheme.mappedColors.action.info.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.info.pressed(mode),
              color: customTheme.mappedColors.action.info.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.info.disabled(mode),
              color: customTheme.mappedColors.action.info.disabled(mode),
            },
          },
          outlinedWarning: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.warning.main(mode),
            color: customTheme.mappedColors.action.warning.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.warning.hover(mode),
              color: customTheme.mappedColors.action.warning.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.warning.pressed(mode),
              color: customTheme.mappedColors.action.warning.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.warning.disabled(mode),
              color: customTheme.mappedColors.action.warning.disabled(mode),
            },
          },
          outlinedError: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.error.main(mode),
            color: customTheme.mappedColors.action.error.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.error.hover(mode),
              color: customTheme.mappedColors.action.error.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.error.pressed(mode),
              color: customTheme.mappedColors.action.error.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.error.disabled(mode),
              color: customTheme.mappedColors.action.error.disabled(mode),
            },
          },
          outlinedSuccess: {
            backgroundColor: "transparent",
            borderColor: customTheme.mappedColors.action.success.main(mode),
            color: customTheme.mappedColors.action.success.main(mode),
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: customTheme.mappedColors.action.success.hover(mode),
              color: customTheme.mappedColors.action.success.hover(mode),
            },
            "&:active": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.success.pressed(mode),
              color: customTheme.mappedColors.action.success.pressed(mode),
            },
            "&:disabled": {
              backgroundColor: "transparent",
              borderColor:
                customTheme.mappedColors.action.success.disabled(mode),
              color: customTheme.mappedColors.action.success.disabled(mode),
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: "outlined",
          color: "secondary",
          size: "medium",
        },
        styleOverrides: {
          root: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.textMain(mode),
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
            fontWeight: 400,
            borderRadius: "4px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor:
                customTheme.mappedColors.action.primary.hover(mode),
              color: customTheme.mappedColors.action.primary.textHover(mode),
            },
            "&:active": {
              backgroundColor:
                customTheme.mappedColors.action.primary.pressed(mode),
              color: customTheme.mappedColors.action.primary.textPressed(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.textDisabled(mode),
            },
            "& .MuiSelect-icon": {
              color: customTheme.mappedColors.action.primary.textMain(mode),
            },
          },
        },
      },
      MuiChip: {
        defaultProps: {
          variant: 'filled',
          color: 'primary',
          size: 'medium'
        },
        styleOverrides: {
          root: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.textIconography.dark.active,
            fontSize: '14px',
            lineHeight: '20px',
            textTransform: 'none',
            fontFamily: font.style.fontFamily,
            fontWeight: 500,
            borderRadius: '6px',
            '&:hover': {
              backgroundColor:
                customTheme.mappedColors.action.primary.hover(mode),
              color: customTheme.mappedColors.action.primary.textHover(mode),
              '.customCount': {
                backgroundColor: customTheme.textIconography.dark.active,
                color: customTheme.mappedColors.action.primary.hover(mode)
              }
            },
            '&:active': {
              backgroundColor:
                customTheme.mappedColors.action.primary.pressed(mode),
              color: customTheme.mappedColors.action.primary.textFocused(mode),
              '.customCount': {
                backgroundColor: customTheme.textIconography.dark.active,
                color: customTheme.mappedColors.action.primary.pressed(mode)
              }
            },
            '&:disabled': {
              backgroundColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.textDisabled(mode),
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.info.disabled(mode),
                color:
                  customTheme.mappedColors.action.primary.textDisabled(mode)
              }
            },
            '& .MuiChip-deleteIcon': {
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                color: 'white'
              }
            },
            '.customCount': {
              backgroundColor: customTheme.textIconography.dark.active,
              color: customTheme.mappedColors.action.primary.main(mode),
              borderRadius: '4px'
            }
          }
        },
        variants: [
          {
            props: { variant: 'filled', color: 'secondary' },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.secondary.main(mode),
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.hover(mode),
                color:
                  customTheme.mappedColors.action.secondary.textHover(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.textHover(mode),
                  color: customTheme.mappedColors.action.secondary.hover(mode)
                }
              },
              '&:active': {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.pressed(mode),
                color:
                  customTheme.mappedColors.action.secondary.textPressed(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.textPressed(mode),
                  color:
                    customTheme.mappedColors.action.secondary.pressed(mode)
                }
              },
              '&:disabled': {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.disabled(mode),
                color:
                  customTheme.mappedColors.action.secondary.textDisabled(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.textDisabled(
                      mode
                    ),
                  color:
                    customTheme.mappedColors.action.secondary.disabled(mode)
                }
              },
              '.customCount': {
                color: customTheme.mappedColors.action.secondary.main(mode)
              }
            }
          },
          {
            props: { variant: 'filled', color: 'error' },
            style: {
              backgroundColor: customTheme.mappedColors.action.error.main(mode),
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                backgroundColor:
                  customTheme.mappedColors.action.error.hover(mode),
                color: customTheme.mappedColors.action.error.textHover(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.error.textHover(mode),
                  color: customTheme.mappedColors.action.error.hover(mode)
                }
              },
              '&:active': {
                backgroundColor:
                  customTheme.mappedColors.action.error.pressed(mode),
                color: customTheme.mappedColors.action.error.textFocused(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.error.textPressed(mode),
                  color: customTheme.mappedColors.action.error.pressed(mode)
                }
              },
              '&:disabled': {
                backgroundColor:
                  customTheme.mappedColors.action.error.disabled(mode),
                color: customTheme.mappedColors.action.error.textDisabled(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.error.textDisabled(mode),
                  color: customTheme.mappedColors.action.error.disabled(mode)
                }
              },
              '.customCount': {
                color: customTheme.mappedColors.action.error.main(mode)
              }
            }
          },
          {
            props: { variant: 'filled', color: 'warning' },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.warning.main(mode),
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                backgroundColor:
                  customTheme.mappedColors.action.warning.hover(mode),
                color: customTheme.mappedColors.action.warning.textHover(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.textHover(mode),
                  color: customTheme.mappedColors.action.warning.hover(mode)
                }
              },
              '&:active': {
                backgroundColor:
                  customTheme.mappedColors.action.warning.pressed(mode),
                color:
                  customTheme.mappedColors.action.warning.textFocused(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.textFocused(mode),
                  color: customTheme.mappedColors.action.warning.pressed(mode)
                }
              },
              '&:disabled': {
                backgroundColor:
                  customTheme.mappedColors.action.warning.disabled(mode),
                color:
                  customTheme.mappedColors.action.warning.textDisabled(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.textDisabled(mode),
                  color: customTheme.mappedColors.action.warning.disabled(mode)
                }
              },
              '.customCount': {
                color: customTheme.mappedColors.action.warning.main(mode)
              }
            }
          },
          {
            props: { variant: 'filled', color: 'info' },
            style: {
              backgroundColor: customTheme.mappedColors.action.info.main(mode),
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                backgroundColor:
                  customTheme.mappedColors.action.info.hover(mode),
                color: customTheme.mappedColors.action.info.textHover(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.info.textHover(mode),
                  color: customTheme.mappedColors.action.info.hover(mode)
                }
              },
              '&:active': {
                backgroundColor:
                  customTheme.mappedColors.action.info.pressed(mode),
                color: customTheme.mappedColors.action.info.textFocused(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.info.textFocused(mode),
                  color: customTheme.mappedColors.action.info.pressed(mode)
                }
              },
              '&:disabled': {
                backgroundColor:
                  customTheme.mappedColors.action.info.disabled(mode),
                color: customTheme.mappedColors.action.info.textDisabled(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.info.textDisabled(mode),
                  color: customTheme.mappedColors.action.info.disabled(mode)
                }
              },
              '.customCount': {
                color: customTheme.mappedColors.action.info.main(mode)
              }
            }
          },
          {
            props: { variant: 'filled', color: 'success' },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.success.main(mode),
              color: customTheme.textIconography.dark.active,
              '&:hover': {
                backgroundColor:
                  customTheme.mappedColors.action.success.hover(mode),
                color: customTheme.mappedColors.action.success.textHover(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.success.textHover(mode),
                  color: customTheme.mappedColors.action.success.hover(mode)
                }
              },
              '&:active': {
                backgroundColor:
                  customTheme.mappedColors.action.success.pressed(mode),
                color:
                  customTheme.mappedColors.action.success.textFocused(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.success.textFocused(mode),
                  color: customTheme.mappedColors.action.success.pressed(mode)
                }
              },
              '&:disabled': {
                backgroundColor:
                  customTheme.mappedColors.action.success.disabled(mode),
                color:
                  customTheme.mappedColors.action.success.textDisabled(mode),
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.success.textDisabled(mode),
                  color: customTheme.mappedColors.action.success.disabled(mode)
                }
              },
              '.customCount': {
                color: customTheme.mappedColors.action.success.main(mode)
              }
            }
          },
          // variant outlined
          {
            props: { variant: 'outlined' },
            style: {
              color: customTheme.mappedColors.action.primary.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.primary.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.primary.hover(mode),
                color: customTheme.mappedColors.action.primary.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.primary.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.primary.hover(mode),
                  color:
                    customTheme.mappedColors.action.primary.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.primary.disabled(mode),
                color:
                  customTheme.mappedColors.action.primary.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.primary.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.primary.pressed(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.primary.pressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.primary.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.primary.main(mode),
                color: customTheme.mappedColors.action.primary.textMain(mode)
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'secondary' },
            style: {
              color: customTheme.mappedColors.action.secondary.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.secondary.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.secondary.hover(mode),
                color: customTheme.mappedColors.action.secondary.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.secondary.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.hover(mode),
                  color:
                    customTheme.mappedColors.action.primary.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.secondary.disabled(mode),
                color:
                  customTheme.mappedColors.action.secondary.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.secondary.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.secondary.pressed(mode),
                '.MuiSvgIcon-root': {
                  color:
                    customTheme.mappedColors.action.secondary.pressed(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.pressed(mode),
                  color:
                    customTheme.mappedColors.action.secondary.textPressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.secondary.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.main(mode),
                color: customTheme.mappedColors.action.secondary.textMain(mode)
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'info' },
            style: {
              color: customTheme.mappedColors.action.info.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.info.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: customTheme.mappedColors.action.info.hover(mode),
                color: customTheme.mappedColors.action.info.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.info.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.info.hover(mode),
                  color: customTheme.mappedColors.action.info.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.info.disabled(mode),
                color: customTheme.mappedColors.action.info.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.info.pressed(mode),
                borderColor: customTheme.mappedColors.action.info.pressed(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.info.pressed(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.info.pressed(mode),
                  color: customTheme.mappedColors.action.info.textPressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.info.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.info.main(mode),
                color: customTheme.mappedColors.action.info.textMain(mode)
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'error' },
            style: {
              color: customTheme.mappedColors.action.error.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.error.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: customTheme.mappedColors.action.error.hover(mode),
                color: customTheme.mappedColors.action.error.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.error.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.error.hover(mode),
                  color: customTheme.mappedColors.action.error.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.error.disabled(mode),
                color: customTheme.mappedColors.action.error.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.error.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.error.pressed(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.error.pressed(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.error.pressed(mode),
                  color:
                    customTheme.mappedColors.action.error.textPressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.error.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.error.main(mode),
                color: customTheme.mappedColors.action.error.textMain(mode)
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'success' },
            style: {
              color: customTheme.mappedColors.action.success.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.success.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.success.hover(mode),
                color: customTheme.mappedColors.action.success.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.success.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.success.hover(mode),
                  color:
                    customTheme.mappedColors.action.success.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.success.disabled(mode),
                color:
                  customTheme.mappedColors.action.success.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.success.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.success.pressed(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.success.pressed(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.success.pressed(mode),
                  color:
                    customTheme.mappedColors.action.success.textPressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.success.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.success.main(mode),
                color: customTheme.mappedColors.action.success.textMain(mode)
              }
            }
          },
          {
            props: { variant: 'outlined', color: 'warning' },
            style: {
              color: customTheme.mappedColors.action.warning.main(mode),
              backgroundColor: 'transparent',
              border: `1px solid ${customTheme.mappedColors.action.warning.main(
                mode
              )}`,
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: font.style.fontFamily,
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.warning.hover(mode),
                color: customTheme.mappedColors.action.warning.hover(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.warning.hover(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.hover(mode),
                  color:
                    customTheme.mappedColors.action.warning.textHover(mode)
                }
              },
              '&:disabled': {
                backgroundColor: 'transparent',
                borderColor:
                  customTheme.mappedColors.action.warning.disabled(mode),
                color:
                  customTheme.mappedColors.action.warning.textDisabled(mode)
              },
              '&:active': {
                backgroundColor: 'transparent',
                color: customTheme.mappedColors.action.warning.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.warning.pressed(mode),
                '.MuiSvgIcon-root': {
                  color: customTheme.mappedColors.action.warning.pressed(mode)
                },
                '.customCount': {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.pressed(mode),
                  color:
                    customTheme.mappedColors.action.warning.textPressed(mode)
                }
              },
              '.MuiSvgIcon-root': {
                color: customTheme.mappedColors.action.warning.main(mode)
              },
              '.customCount': {
                backgroundColor:
                  customTheme.mappedColors.action.warning.main(mode),
                color: customTheme.mappedColors.action.warning.textMain(mode)
              }
            }
          }
        ]
      },
      MuiBadge: {
        styleOverrides: {
          root: {
            color: customTheme.textIconography[mode].active,
             backgroundColor: customTheme.mappedColors.action.primary.main(mode),
             fontSize: '16px',
             lineHeight: '24px',
             fontWeight: 400,
             fontFamily: font.style.fontFamily,
          },
          colorError: {
            backgroundColor: customTheme.mappedColors.action.error.main(mode),
            "& .MuiBadge-badge": {
              backgroundColor: customTheme.mappedColors.action.error.main(mode),
            },
          },
          colorWarning: {
            backgroundColor: customTheme.mappedColors.action.warning.main(mode),
          },
          colorSuccess: {
            backgroundColor: customTheme.mappedColors.action.success.main(mode),
          },
          colorPrimary: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
          },
          colorSecondary: {
            backgroundColor:
              customTheme.mappedColors.action.secondary.main(mode),
            "& .MuiBadge-badge": {
              backgroundColor:
                customTheme.mappedColors.action.secondary.main(mode),
            },
          },
        },
        defaultProps: {
          variant: "filled",
        },
        variants: [
          {
            props: { variant: "filled" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.primary.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.primary.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "filled", color: "error" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.error.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.error.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "filled", color: "success" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.success.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.success.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "filled", color: "secondary" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.secondary.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.secondary.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "filled", color: "warning" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.warning.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.warning.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "filled", color: "info" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.textIconography.dark.active,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                fontFamily: font.style.fontFamily,
                backgroundColor:
                  customTheme.mappedColors.action.info.main(mode),
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.action.info.hover(mode),
                },
              },
            },
          },

          {
            props: { variant: "outline" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.mappedColors.action.primary.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),
                border: `1px solid ${customTheme.mappedColors.action.primary.main(
                  mode
                )}`,
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                fontFamily: font.style.fontFamily,
                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.surface.primary(mode),
                  borderColor:
                    customTheme.mappedColors.action.primary.hover(mode),
                  color: customTheme.mappedColors.action.primary.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "outline", color: "error" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.mappedColors.action.error.main(mode),
                borderColor: customTheme.mappedColors.action.error.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),

                "&:hover": {
                  backgroundColor: customTheme.mappedColors.surface.error(mode),
                  borderColor:
                    customTheme.mappedColors.action.error.hover(mode),
                  color: customTheme.mappedColors.action.error.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "outline", color: "warning" },
            style: {
              "& .MuiBadge-badge": {
                color: customTheme.mappedColors.action.warning.main(mode),
                borderColor: customTheme.mappedColors.action.warning.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),

                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.surface.warning(mode),
                  borderColor:
                    customTheme.mappedColors.action.warning.hover(mode),
                  color: customTheme.mappedColors.action.warning.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "outline", color: "success" },
            style: {
              "& .MuiBadge-badge": {
                borderColor: customTheme.mappedColors.action.success.main(mode),
                color: customTheme.mappedColors.action.success.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),

                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.surface.success(mode),
                  borderColor:
                    customTheme.mappedColors.action.success.hover(mode),
                  color: customTheme.mappedColors.action.success.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "outline", color: "info" },
            style: {
              "& .MuiBadge-badge": {
                borderColor: customTheme.mappedColors.action.info.main(mode),
                color: customTheme.mappedColors.action.info.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),

                "&:hover": {
                  backgroundColor: customTheme.mappedColors.surface.info(mode),
                  borderColor: customTheme.mappedColors.action.info.hover(mode),
                  color: customTheme.mappedColors.action.info.hover(mode),
                },
              },
            },
          },
          {
            props: { variant: "outline", color: "secondary" },
            style: {
              "& .MuiBadge-badge": {
                borderColor:
                  customTheme.mappedColors.action.secondary.main(mode),
                color: customTheme.mappedColors.action.secondary.main(mode),
                backgroundColor: customTheme.mappedColors.surface.page(mode),

                "&:hover": {
                  backgroundColor:
                    customTheme.mappedColors.surface.secondary(mode),
                  borderColor:
                    customTheme.mappedColors.action.secondary.hover(mode),
                  color: customTheme.mappedColors.action.secondary.hover(mode),
                },
              },
            },
          },
        ],
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              borderColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              boxShadow: `0px 0px 0px 3px rgba(249, 115, 22, 0.15)`,
              "& fieldset": {
                borderWidth: "1px !important",
              },
            },

            "&.Mui-error": {
              "& fieldset": {
                borderColor: `${customTheme.aliasColors.error["400"]} !important`,
              },
            },
          },
        },
      },
      MuiIconButton: {
        variants: [
          /* shape circle */
          {
            props: { shape: "circle" },
            style: {
              borderRadius: "50%",
            },
          },
          /* shape rounded */
          {
            props: { shape: "rounded" },
            style: {
              borderRadius: "8px",
            },
          },

          /* size xsmall */
          {
            props: { size: "xsmall" },
            style: {
              padding: "4px",
              width: "24px",
              height: "24px",
            },
          },
          /* size small */
          {
            props: { size: "small" },
            style: {
              padding: "6px",
              width: "32px",
              height: "32px",
            },
          },
          /* size medium */
          {
            props: { size: "medium" },
            style: {
              padding: "8px",
              width: "40px",
              height: "40px",
            },
          },
          /* size large */
          {
            props: { size: "large" },
            style: {
              padding: "8px",
              width: "48px",
              height: "48px",
            },
          },

          /* variant standard color transparent */
          {
            props: { variant: "standard", color: "transparent" },
            style: {
              color: customTheme.textIconography[mode].inactive,
              backgroundColor: "transparent",
              "&:hover": {
                color: customTheme.textIconography[mode].active,
                backgroundColor: "transparent",
              },
              "&:active": {
                color: customTheme.mappedColors.action.primary.main(mode),
                backgroundColor: "transparent",
              },
              "&:disabled": {
                color: customTheme.textIconography[mode].disabled,
                backgroundColor: "transparent",
              },
            },
          },

          /* variant filled */
          {
            props: { variant: "filled", color: "primary" },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.primary.main(mode),
              color: customTheme.mappedColors.action.primary.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.primary.hover(mode),
                color: customTheme.mappedColors.action.primary.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.primary.focused(mode),
                color:
                  customTheme.mappedColors.action.primary.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.primary.pressed(mode),
                color:
                  customTheme.mappedColors.action.primary.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.primary.disabled(mode),
                color:
                  customTheme.mappedColors.action.primary.textDisabled(mode),
              },
            },
          },
          {
            props: { variant: "filled", color: "secondary" },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.secondary.main(mode),
              color: customTheme.mappedColors.action.secondary.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.hover(mode),
                color:
                  customTheme.mappedColors.action.secondary.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.focused(mode),
                color:
                  customTheme.mappedColors.action.secondary.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.pressed(mode),
                color:
                  customTheme.mappedColors.action.secondary.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.secondary.disabled(mode),
                color:
                  customTheme.mappedColors.action.secondary.textDisabled(mode),
              },
            },
          },
          {
            props: { variant: "filled", color: "error" },
            style: {
              backgroundColor: customTheme.mappedColors.action.error.main(mode),
              color: customTheme.mappedColors.action.error.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.error.hover(mode),
                color: customTheme.mappedColors.action.error.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.error.focused(mode),
                color: customTheme.mappedColors.action.error.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.error.pressed(mode),
                color: customTheme.mappedColors.action.error.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.error.disabled(mode),
                color: customTheme.mappedColors.action.error.textDisabled(mode),
              },
            },
          },
          {
            props: { variant: "filled", color: "warning" },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.warning.main(mode),
              color: customTheme.mappedColors.action.warning.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.warning.hover(mode),
                color: customTheme.mappedColors.action.warning.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.warning.focused(mode),
                color:
                  customTheme.mappedColors.action.warning.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.warning.pressed(mode),
                color:
                  customTheme.mappedColors.action.warning.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.warning.disabled(mode),
                color:
                  customTheme.mappedColors.action.warning.textDisabled(mode),
              },
            },
          },
          {
            props: { variant: "filled", color: "info" },
            style: {
              backgroundColor: customTheme.mappedColors.action.info.main(mode),
              color: customTheme.mappedColors.action.info.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.info.hover(mode),
                color: customTheme.mappedColors.action.info.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.info.focused(mode),
                color: customTheme.mappedColors.action.info.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.info.pressed(mode),
                color: customTheme.mappedColors.action.info.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.info.disabled(mode),
                color: customTheme.mappedColors.action.info.textDisabled(mode),
              },
            },
          },
          {
            props: { variant: "filled", color: "success" },
            style: {
              backgroundColor:
                customTheme.mappedColors.action.success.main(mode),
              color: customTheme.mappedColors.action.success.textMain(mode),
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.action.success.hover(mode),
                color: customTheme.mappedColors.action.success.textHover(mode),
              },
              "&:focus": {
                backgroundColor:
                  customTheme.mappedColors.action.success.focused(mode),
                color:
                  customTheme.mappedColors.action.success.textFocused(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.action.success.pressed(mode),
                color:
                  customTheme.mappedColors.action.success.textPressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.action.success.disabled(mode),
                color:
                  customTheme.mappedColors.action.success.textDisabled(mode),
              },
            },
          },

          /* variant outlined */
          {
            props: { variant: "outlined", color: "primary" },
            style: {
              color: customTheme.mappedColors.action.primary.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.primary.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor: customTheme.mappedColors.surface.primary(mode),
                borderColor:
                  customTheme.mappedColors.action.primary.hover(mode),
                color: customTheme.mappedColors.action.primary.hover(mode),
              },
              "&:active": {
                backgroundColor: customTheme.mappedColors.surface.primary(mode),
                color: customTheme.mappedColors.action.primary.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.primary.pressed(mode),
              },
              "&:disabled": {
                backgroundColor: customTheme.mappedColors.surface.primary(mode),
                borderColor:
                  customTheme.mappedColors.action.primary.disabled(mode),
                color: customTheme.mappedColors.action.primary.disabled(mode),
              },
            },
          },
          {
            props: { variant: "outlined", color: "secondary" },
            style: {
              color: customTheme.mappedColors.action.secondary.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.secondary.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor:
                  customTheme.mappedColors.surface.secondary(mode),
                borderColor:
                  customTheme.mappedColors.action.secondary.hover(mode),
                color: customTheme.mappedColors.action.secondary.hover(mode),
              },
              "&:active": {
                backgroundColor:
                  customTheme.mappedColors.surface.secondary(mode),
                color: customTheme.mappedColors.action.secondary.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.secondary.pressed(mode),
              },
              "&:disabled": {
                backgroundColor:
                  customTheme.mappedColors.surface.secondary(mode),
                borderColor:
                  customTheme.mappedColors.action.secondary.disabled(mode),
                color: customTheme.mappedColors.action.secondary.disabled(mode),
              },
            },
          },
          {
            props: { variant: "outlined", color: "error" },
            style: {
              color: customTheme.mappedColors.action.error.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.error.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor: customTheme.mappedColors.surface.error(mode),
                borderColor: customTheme.mappedColors.action.error.hover(mode),
                color: customTheme.mappedColors.action.error.hover(mode),
              },
              "&:active": {
                backgroundColor: customTheme.mappedColors.surface.error(mode),
                color: customTheme.mappedColors.action.error.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.error.pressed(mode),
              },
              "&:disabled": {
                backgroundColor: customTheme.mappedColors.surface.error(mode),
                borderColor:
                  customTheme.mappedColors.action.error.disabled(mode),
                color: customTheme.mappedColors.action.error.disabled(mode),
              },
            },
          },
          {
            props: { variant: "outlined", color: "warning" },
            style: {
              color: customTheme.mappedColors.action.warning.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.warning.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor: customTheme.mappedColors.surface.warning(mode),
                borderColor:
                  customTheme.mappedColors.action.warning.hover(mode),
                color: customTheme.mappedColors.action.warning.hover(mode),
              },
              "&:active": {
                backgroundColor: customTheme.mappedColors.surface.warning(mode),
                color: customTheme.mappedColors.action.warning.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.warning.pressed(mode),
              },
              "&:disabled": {
                backgroundColor: customTheme.mappedColors.surface.warning(mode),
                borderColor:
                  customTheme.mappedColors.action.warning.disabled(mode),
                color: customTheme.mappedColors.action.warning.disabled(mode),
              },
            },
          },
          {
            props: { variant: "outlined", color: "info" },
            style: {
              color: customTheme.mappedColors.action.info.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.info.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor: customTheme.mappedColors.surface.info(mode),
                borderColor: customTheme.mappedColors.action.info.hover(mode),
                color: customTheme.mappedColors.action.info.hover(mode),
              },
              "&:active": {
                backgroundColor: customTheme.mappedColors.surface.info(mode),
                color: customTheme.mappedColors.action.info.pressed(mode),
                borderColor: customTheme.mappedColors.action.info.pressed(mode),
              },
              "&:disabled": {
                backgroundColor: customTheme.mappedColors.surface.info(mode),
                borderColor:
                  customTheme.mappedColors.action.info.disabled(mode),
                color: customTheme.mappedColors.action.info.disabled(mode),
              },
            },
          },
          {
            props: { variant: "outlined", color: "success" },
            style: {
              color: customTheme.mappedColors.action.success.main(mode),
              backgroundColor: "transparent",
              border: `1px solid ${customTheme.mappedColors.action.success.main(
                mode
              )}`,
              "&:hover": {
                backgroundColor: customTheme.mappedColors.surface.success(mode),
                borderColor:
                  customTheme.mappedColors.action.success.hover(mode),
                color: customTheme.mappedColors.action.success.hover(mode),
              },
              "&:active": {
                backgroundColor: customTheme.mappedColors.surface.success(mode),
                color: customTheme.mappedColors.action.success.pressed(mode),
                borderColor:
                  customTheme.mappedColors.action.success.pressed(mode),
              },
              "&:disabled": {
                backgroundColor: customTheme.mappedColors.surface.success(mode),
                borderColor:
                  customTheme.mappedColors.action.success.disabled(mode),
                color: customTheme.mappedColors.action.success.disabled(mode),
              },
            },
          },
        ],
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            // '& .mui-lrlybf-MuiButtonBase-root-MuiChip-root': {
            //     borderRadius: "4px",
            //     backgroundColor: "transparent",
            //     border: `1px solid ${customTheme.aliasColors.secondary['400']} !important`
            // },
            // '& .mui-1pd10bj-MuiButtonBase-root-MuiChip-root': {
            //     borderRadius: "4px",
            //     backgroundColor: "transparent",
            //     border: `1px solid ${customTheme.aliasColors.secondary['400']} !important`
            // },
            // "& .MuiAutocomplete-popper": {
            //     backgroundColor: "green",
            // },
            // "& .MuiAutocomplete-paper": {
            //     backgroundColor: "green",
            // },
            // "& .MuiAutocomplete-groupUl": {
            //     backgroundColor: "green !important",
            // },
            // "& .mui-1bi1t5b-MuiPopper-root-MuiAutocomplete-popper" : {
            //     "& .mui-1p64473-MuiPaper-root-MuiAutocomplete-paper" : {
            //     }
            // }
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            border: "1px solid",
            borderColor: "transparent",
            gap: "4px",

            "&:hover": {
              backgroundColor: customTheme.mappedColors.shade[200](mode),
            },
            "&:active": {
              color: customTheme.mappedColors.action.primary.main(mode),
            },
            "&:disabled": {
              backgroundColor:
                customTheme.mappedColors.action.primary.disabled(mode),
              color: customTheme.mappedColors.action.primary.textDisabled(mode),
            },
            "&:focus": {
              borderColor: customTheme.mappedColors.border.secondary(mode),
            },
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          color: "secondary",
          size: "medium",
        },
      },
      MuiAvatar: {
        styleOverrides: {
          colorDefault: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.textMain(mode),
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          variant: "filled",
          severity: "success",
        },
        styleOverrides: {
          root: {
            backgroundColor: customTheme.mappedColors.action.success.main(mode),
            color: customTheme.mappedColors.action.success.textMain(mode),
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          },

          filled: {
            backgroundColor:
              customTheme.mappedColors.action.secondary.main(mode),
            color: customTheme.mappedColors.action.secondary.textMain(mode),
          },
          filledWarning: {
            backgroundColor: customTheme.mappedColors.action.warning.main(mode),
            color: customTheme.mappedColors.action.warning.textMain(mode),
          },
          filledSuccess: {
            backgroundColor: customTheme.mappedColors.action.success.main(mode),
            color: customTheme.mappedColors.action.success.textMain(mode),
          },
          filledError: {
            backgroundColor: customTheme.mappedColors.action.error.main(mode),
            color: customTheme.mappedColors.action.error.textMain(mode),
          },
          filledInfo: {
            backgroundColor: customTheme.mappedColors.action.info.main(mode),
            color: customTheme.mappedColors.action.info.textMain(mode),
          },
        },
      },
    },
  });
};

// mui-1bi1t5b-MuiPopper-root-MuiAutocomplete-popper
// .mui-1p64473-MuiPaper-root-MuiAutocomplete-paper
// .mui-14kdndc-MuiAutocomplete-listbox

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = useSelector((state: RootState) => state.theme.mode) || "light";

  const theme = useMemo(() => Theme({ mode }), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
