import React from "react";
import Meanings from "./Meanings";
import "./Result.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result.word} </h2>
          {props.result.meanings.definition.map(function (meanings, index) {
            return (
              <div key={index}>
                {" "}
                <Meanings meanings={meanings} />{" "}
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
