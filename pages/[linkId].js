import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateDeepLink } from "../helpers/openInAppLinkGenerator";
import { useRouter } from "next/router";

export default function RedirectPage() {
  function openTheOneLink() {
    window.open("https://theonelink.me", "_blank");
  }
  function redirectToApp(redirectLink) {
    console.log(redirectLink);
    var NewRedirectLink = generateDeepLink(redirectLink.replace(/&amp;/g, "&"));
    var noapplink = redirectLink.replace(/&amp;/g, "&");
    console.log(redirectLink);
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
    window.location.replace(NewRedirectLink);
    setTimeout(noappfound, 501);
  }
  const router = useRouter();
  async function getRedirectUrl() {
    const url = window.location.href;
    const redirectId = url.split("/")[3];
    const { data } = await axios.get("/api/link" + "/" + redirectId);
    console.log(data.link.length);
    console.log(data);
    if (
      data.link.length > 0 &&
      data.link != undefined &&
      data.link != null &&
      data.link != "" &&
      data
    ) {
      redirectToApp(data.link);
    } else {
      window.location.replace("https://theonelink.me");
      console.log("redirect");
    }
  }

  useEffect(() => {
    getRedirectUrl();
  }, []);

  return (
    <>
      <div className="redirect-page">
        <div className="header">
          <img src="assets/images/logo192.png" width={"60px"} height={"50px"} />
          <h2>
            theOne<span>Link</span>
          </h2>
        </div>
        <div>
          <object
            height={"300px"}
            type="image/svg+xml"
            data="/assets/images/rocket-animation.svg"
            alt="animated rocket tutorial"
            img=""
            width="100%"
          ></object>
          <p>Opening link in app</p>
          <h2>create direct to app like for:</h2>
          <div className="social-icons">
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
        <p className="link" onClick={openTheOneLink}>
          Go to our website
        </p>
      </div>
    </>
  );
}
