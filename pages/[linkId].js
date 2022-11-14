import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateDeepLink } from "../helpers/openInAppLinkGenerator";
import { useRouter } from "next/router";

function redirectToApp() {
  console.log(link);
  var link = generateDeepLink(link.replace(/&amp;/g, "&"));
  var noapplink = link.replace(/&amp;/g, "&");
  console.log(link);
  function try_close() {
    window.location.replace("about:blank");
  }
  var start = Date.now();
  function noappfound() {
    var now = Date.now();
    if (now - start > 4000) {
    } else if (now - start > 500) {
      window.location.replace(noapplink);
    }
  }
  window.location.replace(link);
  setTimeout(noappfound, 501);
}

export default function RedirectPage() {
  const router = useRouter();
  async function getRedirectUrl() {
    const linkId = router.query.linkId;
    const { data } = await axios
      .get("/api/link" + "/" + linkId)
      .catch((err) => {
        console.log(data);
        window.location.replace("https://theonelink.me");
      });
    console.log(data);
    redirectToApp(data.link);
  }

  useEffect(() => {
    // getRedirectUrl();
    // console.log(router.query.linkId);
  }, []);
  return (
    <div>
      <div className="header">
        <img src="/logo192.png" width={"60px"} height={"50px"} />
        <h2>
          theOne<span>Link</span>
        </h2>
      </div>
      <div>
        <object
          height={"300px"}
          type="image/svg+xml"
          data="/rocket-animation.svg"
          alt="animated rocket tutorial"
          img=""
          width="100%"
        ></object>
        <p>Opening link in app</p>
        <h2>create direct to app like for:</h2>

        <div className="socials">
          <div className="row">
            <img src="/assets/images/facebook.gif"></img>
            <img src="/assets/images/instagram.gif"></img>
            <img src="/assets/images/tiktok.gif"></img>
            <img src="/assets/images/amazon.png"></img>
          </div>
          <div className="row">
            <img src="/assets/images/youtube.gif"></img>
            <img src="/assets/images/linkedin.gif"></img>
            <img src="/assets/images/twitter.gif"></img>
            <span> Many more</span>
          </div>
        </div>
      </div>
      <p className="link">Go to our website</p>
    </div>
  );
}
