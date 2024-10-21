import { Typography, TypographyTypeMap } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

interface TextProps {
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default {
  title: "Typography/variants",
  component: Typography,
} as Meta;

export const h1 = {
  args: {
    variant: "h1",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const h2 = {
  args: {
    variant: "h2",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const h3 = {
  args: {
    variant: "h3",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const h4 = {
  args: {
    variant: "h4",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const h5 = {
  args: {
    variant: "h5",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const h5Medium = {
  args: {
    variant: "h5Medium",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const body1 = {
  args: {
    variant: "body1",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const body2 = {
  args: {
    variant: "body2",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const body3 = {
  args: {
    variant: "body3",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const body3SemiBold = {
  args: {
    variant: "body3Semibold",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const body3Bold = {
  args: {
    variant: "body3Bold",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;
