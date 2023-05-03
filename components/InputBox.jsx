import React from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function InputBox() {
  return (
    <div className="fixed bottom-10">
      <InputGroup>
        <Input placeholder="Basic usage" />
        <InputRightElement>
          <ArrowForwardIcon/>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}

export default InputBox;
