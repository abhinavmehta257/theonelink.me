import React, { useState } from "react";
import axios from "axios";
import GeneratedLink from "./GeneratedLink";

function isValidURL(string) {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

function CreateLink() {
  console.log("test");
  const [popup, setPopup] = useState(false);
  const [isValidLink, setIsValidLink] = useState(true);
  const [generatedLink, setgeneratedLink] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  async function generateLink(event) {
    event.preventDefault();
    const link = document.querySelector("input[type='url']").value;
    if (link.length > 0) {
      console.log("link sent", link);
      setIsLoading(true);
      const { data } =
        (await axios
          .post("api/generateLink", {
            link: link,
          })
          .catch((err) => console.log(err))) || {};
      setIsLoading(false);
      if (data) {
        console.log("data:", data);
        setgeneratedLink(data);
        setPopup(true);
      }
    } else {
      setIsValidLink(false);
    }
    event.target.value = "";
  }

  function checkURL(e) {
    const link = e.target.value;
    const validURL = isValidURL(link);
    console.log(validURL);
    if (!validURL && link.length > 0) {
      setIsValidLink(false);
    } else {
      setIsValidLink(true);
    }
  }

  return (
    <div className="header">
      <div className="inner-header flex">
        <h1>Open Links Directly In Apps </h1>
        <div action="" method="post" className="create-link">
          <div style={{ width: "100%" }}>
            <input
              type="url"
              placeholder="Type Or Paste the link"
              name="link"
              onKeyUp={checkURL}
            />
            <p
              id="isURL"
              style={{ color: "red", opacity: !isValidLink ? "1" : "0" }}
            >
              **Please enter a valid URL
            </p>
          </div>
          <button
            disabled={isLoading}
            id="generate-link"
            onClick={generateLink}
          >
            {!isLoading ? <span>Generate</span> : <span>Generating..</span>}
          </button>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {popup ? (
        <GeneratedLink
          link={generatedLink.link}
          id={generatedLink._id}
          close={setPopup}
        />
      ) : null}
    </div>
  );
}

export default CreateLink;
