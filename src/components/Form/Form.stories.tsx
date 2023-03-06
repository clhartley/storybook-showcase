import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Form from "./Form";

const meta = {
  title: "Form",
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {};
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate user interactions with the component
  await userEvent.type(
    canvas.getByLabelText("Email"),
    "firstname.lastname@company.com",
    { delay: 100 }
  );

  await userEvent.type(canvas.getByLabelText("Password"), "password123", {
    delay: 100,
  });

  userEvent.click(canvas.getByRole("button", { name: "Log In" }));

  waitFor(() =>
    expect(canvas.getByText("Log in successful!")).toBeInTheDocument()
  );
};

export const InvalidForm: Story = {};
InvalidForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate user interactions with the component
  await userEvent.type(
    canvas.getByLabelText("Email"),
    "firstname.lastname@company.com",
    { delay: 100 }
  );

  userEvent.click(canvas.getByRole("button", { name: "Log In" }));

  waitFor(() =>
    expect(
      canvas.getByText("You must enter an email and password!")
    ).toBeInTheDocument()
  );
};
