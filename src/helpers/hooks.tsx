import { InputWrapper } from "@ncr-design-system/react";
import React, { useState } from "react";

export const useInput = (placeholder: string) => {
  const [value, setValue] = useState("")
  const input = (
    <InputWrapper>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
        placeholder={placeholder}
      />
    </InputWrapper>
  )
  return [value, input]
}