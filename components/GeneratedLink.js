import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function GeneratedLink({ link, id, close }) {
  const notify = () => {
    toast.success("Link Copied", {
      role: "alert",
    });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://theonelink.me/" + id);
    console.log(id);
    notify();
  };
  useEffect(() => {}, []);

  return (
    <div className="popup-container">
      <div className="popup">
        <div
          className="close"
          onClick={() => {
            close(false);
          }}
        >
          <i className="lni lni-close"></i>
        </div>
        <img
          src={"assets/images/success.gif"}
          width={"100px"}
          height={"100px"}
        />
        <p>Link created successfully</p>
        <div className="link-container">
          <div className="link">
            theonelink.me/{id[0]}
            {id[1]}
            {id[2]}
            {id[3]}
            {id[4]}
            ..
          </div>
          <div className="copy" onClick={copyToClipboard}>
            Copy
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABoUlEQVRoge2Zz07CQBCHf7NFE6JHDxg0mugrVEzwxJWbb2CiPILPAoEYn8KjJ41GXkGwiMbEI/8MEDoeCCZSwnZp6x6c79TD7Ox86cw26QKC8L8h0wWnH1xkRoWBbJSN329a9/Xz/ZMoOQBAmS7wGeWoxQNA3+vm3Zp3FzWPsQCAnaibAgDxVOLoynuIkmcVgdggBnrN7nEUiZQuIFPzisSqwsN+1h90Vt0nAIHA4B8Jt9p4ql8cFAD0TPJo3wCxKiOGng/mnUrMnvutgetWG7emecK0UCw9Pw+BFkqYtpO1GSAsljCdCWsCqY31pRK561aoI9aawFYhs1Si+9zJh5HQnkJJkd7bxO7ZoS4srwuw+h2IAxGwjQjYRgRsIwK2EQHbiIBtRMA2ImAbEbCNCNhGBGxjIEAAEYaDUXLVBGnrAsILKAVy1tB8fPkriTYBJV2Q9o5su/rKAAB/Ah59gcdD8GQMMMdQY5DPy5zRvV34X4vKAa2nAScF8ifGhSVFGIE3zO4IlANSTpL1aHt+Hu0MMFMJU4mkaYNI2/OCIPzmGw0ogwNzfCQVAAAAAElFTkSuQmCC" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratedLink;
