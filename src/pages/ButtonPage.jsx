import React from "react";
import Button from "../components/Button";
import { AiFillBug, AiFillApple, AiFillBulb } from "react-icons/ai";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <>
      <div>
        <Button rounded primary className="mb-5" onClick={handleClick}>
          <AiFillBug />
          Fuck Yeah
        </Button>
      </div>
      <div>
        <Button rounded secondary>
          <AiFillApple />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button outline rounded success>
          <AiFillBulb />
          See Deal!
        </Button>
      </div>
      <div>
        <Button outline rounded warning>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button outline rounded danger>
          Something!
        </Button>
      </div>
    </>
  );
}
