import React from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function InputBox() {
  return (
    <div className="fixed bottom-10 w-2/5">
      <InputGroup>
        <Input placeholder="Basic usage" variant='filled'/>
        <InputRightElement>
          <ArrowForwardIcon/>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}

export default InputBox;
