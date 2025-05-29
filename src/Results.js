import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word} </h2>
        {props.results.phonetic && (
          <div className="Phonetic">
            <span>/{props.results.phonetic} /</span>
          </div>
        )}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
