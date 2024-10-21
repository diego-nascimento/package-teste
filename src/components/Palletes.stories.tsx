import { Chip } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Palletes",
  component: Chip,
} as Meta;

export const primary = {
  args: {
    color: "primary",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;

export const secondary = {
  args: {
    color: "secondary",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;

export const success = {
  args: {
    color: "success",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;

export const error = {
  args: {
    color: "error",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;

export const warning = {
  args: {
    color: "warning",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;

export const info = {
  args: {
    color: "info",
    label: "Vamos la",
    size: "large",
  },
} as StoryObj;
