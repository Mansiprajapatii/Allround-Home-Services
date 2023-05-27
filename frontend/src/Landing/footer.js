import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FolderList() {
  return (
    <footer>
      <div className="container">
        <div className="aboutus">
          <div className="c1">
            <ul>
              <li>
                <h2>Why Choose Us</h2>
              </li>
              <li>
                <a href="#">Cost effective</a>
              </li>
              <li>
                <a href="#">Easy to get job</a>
              </li>
              <li>
                <a href="#">Easy to find workers</a>
              </li>
              <li>
                <a href="#">Book According to your need</a>
              </li>
            </ul>
          </div>

          <div className="c2">
            <ul>
              <li>
                <h2>Social</h2>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="c3">
            <ul>
              <li>
                <h2>Services </h2>
              </li>
              <li>
                <a href="#">Home Cleaning</a>
              </li>
              <li>
                <a href="#">Electrician</a>
              </li>
              <li>
                <a href="#">Plumbering</a>
              </li>
              <li>
                <a href="#">Painting</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="c4">
          <div className="row1">
            <div className="twiter">
              <a href="https://www.twitter.com/" target="">
                <TwitterIcon />
              </a>
            </div>
            <div className="insta">
              <a href="https://www.instagram.com/" target="">
                <InstagramIcon />
              </a>
            </div>
            <div className="linkdn">
              <a href="https://www.Linkedin.com/" target="">
                <LinkedInIcon />
              </a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/" target="">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="main-hero-para text-center w-100">
            Copyright @ 2023 ALLround Home Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
