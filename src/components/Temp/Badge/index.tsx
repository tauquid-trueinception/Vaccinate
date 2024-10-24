import { Badge } from "@mui/material";
import React from "react";

interface BadgePropsVariantOverrides {
  variant?: "filled" | "outline";
  color?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  badgeContent: number;
  max?: number;
  anchorOrigin?: {
    vertical?: "top" | "bottom";
    horizontal?: "left" | "right";
  };
  sx?: React.CSSProperties;
}

const CustomBadge: React.FC<BadgePropsVariantOverrides> = ({
  variant = "filled",
  color = "primary",
  children,
  size = "medium",
  badgeContent,
  max = 99,
  sx,
  anchorOrigin = {
    vertical: "top",
    horizontal: "right",
  },
}) => {
  return (
    <Badge
      variant={variant}
      color={color}
      badgeContent={badgeContent}
      max={max}
      anchorOrigin={anchorOrigin}
      sx={sx}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
