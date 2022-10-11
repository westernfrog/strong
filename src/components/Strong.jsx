import React, { useState } from "react";

export default function Strong() {
  const [text, settext] = useState("Staying with");

  function handleClick() {
    settext("Staying with");
    settext("Supporting");
  }

  return (
    <div className="container my-5 rounded">
      <div className="lh-sm mt-5">
        <h1 className="text-center text-jost">YOU ARE STRONG</h1>
        <h2 className="text-center text-jost">{text} you forever</h2>
        <h3 className="text-center text-jost">I Love You Forever</h3>
        <h4 className="text-center text-jost">
          <button
            className="btn btn-outline-dark rounded-pill shadow mt-2"
            onClick={handleClick}
          >
            ❤️
          </button>
        </h4>
      </div>
      <ul className="list-group shadow mx-auto text-center">
        <li className="list-group-item my-auto border-0 ">
          <iframe
            src="https://giphy.com/embed/26hitGX1jzdTVMonu"
            width="280"
            height="120"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </li>
        <li className="list-group-item border-0">
          <iframe
            src="https://giphy.com/embed/26hitlrnI4k5dKPPq"
            width="280"
            height="120"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </li>
        <li className="list-group-item my-auto border-0">
          <iframe
            src="https://giphy.com/embed/sHhZiG2mU7ZBjmPGI3"
            width="280"
            height="280"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </li>
        <li className="list-group-item border-0">
          <iframe
            src="https://giphy.com/embed/tKdNRw0PqN1EtLBXwq"
            width="160"
            height="280"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
}
