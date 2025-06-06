import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word} </h2>
          {props.results.phonetic && (
            <Phonetic phonetic={props.results.phonetic} />
          )}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
