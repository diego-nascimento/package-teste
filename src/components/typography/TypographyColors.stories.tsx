import { Typography, TypographyTypeMap } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

interface TextProps {
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default {
  title: "Typography/Colors",
  component: Typography,
} as Meta;

export const Main = {
  args: {
    variant: "h1",
    color: "typography.main",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const SofterGray = {
  args: {
    variant: "h1",
    color: "typography.softerGray",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const lightGray = {
  args: {
    variant: "h1",
    color: "typography.lightGray",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const grayTextColor = {
  args: {
    variant: "h1",
    color: "typography.grayTextColor",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const mediumGrayTextColor = {
  args: {
    variant: "h1",
    color: "typography.mediumGrayTextColor",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const strongGrayTextColor = {
  args: {
    variant: "h1",
    color: "typography.strongGrayTextColor",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;

export const strongerGrayTextColor = {
  args: {
    variant: "h1",
    color: "typography.strongerGrayTextColor",
    children: "Vamos la",
  } as TextProps,
} as StoryObj;
