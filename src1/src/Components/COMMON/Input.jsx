import React from "react";

export default function Input(props) {
  return (
    <input
      type="password"
      className="border"
      value={props?.value}
      placeholder={props?.placeholder}
      required
    />
  );
}
