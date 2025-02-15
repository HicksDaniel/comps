import React from "react";
import Button from "./Button";
import { AiFillBug, AiFillApple, AiFillBulb } from "react-icons/ai";

export default function App() {
  return (
    <>
      <div>
        <Button true rounded primary>
          <AiFillBug />
          Fuck Yeah
        </Button>
      </div>
      <div>
        <Button true rounded secondary>
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
