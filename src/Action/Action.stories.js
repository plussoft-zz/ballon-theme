import React from "react";

import Action from "./Action";

export default {
  title: "Action"
};

export const Default = () => {
  return (
    <Action open title="My Action">
      <span>Content</span>
    </Action>
  );
};
