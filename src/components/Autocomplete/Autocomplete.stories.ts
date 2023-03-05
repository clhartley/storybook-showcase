import type { Meta, StoryObj } from "@storybook/react";

import { mockFilms } from "../../mocks/films";
import Autocomplete from "./Autocomplete";

const meta = {
  title: "Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  args: {
    data: mockFilms,
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    multiple: true,
  },
};
