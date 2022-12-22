import React, { useState } from "react";
import { PickButton } from "../style/MintStyle";

const Mint = () => {
  const [state, setState] = useState(undefined);
  return (
    <>
      <PickButton>뽑기</PickButton>
    </>
  );
};

export default Mint;
