import "./library.css";
import Footer from "./Footer";
// import News from "./News";
import { Link } from "react-router-dom";

import EngineeringPic from "../../images/home-icon-engineering.png";
import SciencePic from "../../images/home-icon-science.png";
import HumanityPic from "../../images/home-icon-humanities-icon.png";
import LiteraturePic from "../../images/home-icon-literature.png";
import LnMPic from "../../images/home-icon-law_management.png";
import ArtsPic from "../../images/home-icon-arts.png";
import SPPic from "../../images/covid-icon-scholarly.png";
import CnSPic from "../../images/covid-icon-challenges.png";
import DataSetPic from "../../images/covid-icon-datasets.png";
import DnVPic from "../../images/home-icon-engineering.png";
import JnCPic from "../../images/home-icon-engineering.png";
import InFPic from "../../images/covid-icon-ideas_funding.png";
import BCoSRPic from "../../images/featured-icon-birth.png";
import ToTWPic from "../../images/featured-icon-topic.png";
import TnWPic from "../../images/featured-icon-talks.png";
import PoTWPic from "../../images/featured-icon-person.png";
import OTDPic from "../../images/featured-icon-calendar.png";

import LibraryData from "./LibraryData"

export default function Library() {
  return (
    <>
      <div className="library">
        <div className="navbar"></div>
        <div className="titleAndSearchBar">
          <div className="noSvg">
            <div className="topTitle">Digital Library</div>
            <div className="search_bar_btn_container">
              <div className="searchBar">
                <div className="searchBarContainerParent">
                  <form action="#">
                    <div className="SearchBarContainer">
                      <input
                        type="text"
                        placeholder="SEARCH OVER ALL RESOURCES"
                        maxLength="100"
                        autoFocus="autofocus"
                        size="23"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="search_btn_parent">
                  <button id="search_btn">
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="withSvg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f1e3" fill-opacity="1" d="M0,224L120,240C240,256,480,288,720,282.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
          </div> */}
        </div>
        <div className="eBooks">
          <div className="title">
            <h3>
              <span>{LibraryData[0].title}</span>
            </h3>
          </div>
          <div className="booksFlex">
            <div className="eBooksChildren">
              <Link to = "/library/engineering">
                <img src={EngineeringPic} alt="Engineering" />
                {LibraryData[0].childern[0].child}
              </Link>
            </div>
            <div className="eBooksChildren">
              <Link to = "">
                <img src={SciencePic} alt="Science" />
                Science
              </Link>
            </div>
            <div className="eBooksChildren">
              <Link to = "#">
                <img src={HumanityPic} alt="Humanity" />
                Humanity
              </Link>
            </div>
            <div className="eBooksChildren">
              <Link to = "">
                <img src={LiteraturePic} alt="Literature" />
                Literature
              </Link>
            </div>
            <div className="eBooksChildren">
              <Link to = "">
                <img src={LnMPic} alt="Law_Management" />
                <span className="no-spacing">
                  Law & <br />
                  Management
                </span>
              </Link>
            </div>
            <div className="eBooksChildren">
              <Link to = "">
                <img src={ArtsPic} alt="Art" />
                Arts
              </Link>
            </div>
          </div>
        </div>
        <div className="trending">
          <div className="title">
            <h3>
              <span>Covid-19 Research Repository</span>
            </h3>
          </div>
          <div className="trendingFlex">
            <div className="trendingChilder">
              <Link to = "#">
                <img src={SPPic} alt="ScholaryPublication" />
                <span className="no-spacing"></span>
                Scholarly Publications
              </Link>
            </div>
            <div className="trendingChilder">
              <Link to = "#">
                <img src={DataSetPic} alt="DataSet" />
                Data Sets
              </Link>
            </div>
            <div className="trendingChilder">
              <Link to = "">
                <img src={DnVPic} alt="Document&Videos" />
                <span className="no-spacing">
                  Documents &<br /> Videos
                </span>
              </Link>
            </div>
            <div className="trendingChilder">
              <Link to = "#">
                <img src={JnCPic} alt="Journals&Conferences" />
                <span className="no-spacing">
                  Journals &<br />
                  Confrence
                </span>
                s
              </Link>
            </div>
            <div className="trendingChilder">
              <Link to = "#">
                <img src={InFPic} alt="Ideas & Funding" />
                <span className="no">
                  Ideas &<br /> Funding
                </span>
              </Link>
            </div>
            <div className="trendingChilder">
              <Link to = "#">
                <img src={CnSPic} alt="Challenges & Startup" />
                <span className="no-spacing">
                  Challenges & <br /> Startup
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="featured">
          <div className="title">
            <h3>
              <span>Featured Collections</span>
            </h3>
          </div>
          <div className="featuredFlex">
            <div className="featureChildren">
              <Link to = "#" >
                <img src={BCoSRPic} alt="ErrorInLoading" />
                <span className="no-spacing">Birth Cenetenary</span>
                <br />
                <span>of Satyajit Ray</span>
              </Link>
            </div>
            <div className="featureChildren">
              <Link to = "#">
                <img src={ToTWPic} alt="ErrorInLoading" />
                <span className="no-spacing">
                  Topic of the week:
                  <br />
                  Photography
                </span>
              </Link>
            </div>
            <div className="featureChildren">
              <Link to = "">
                <img src={OTDPic} alt="ErrorInLoading" />
                On this Day
              </Link>
            </div>
            <div className="featureChildren">
              <Link to = "">
                <img src={PoTWPic} alt="ErrorInLoading" />
                <span className="no-spacing">
                  Person of the Week:
                  <br />
                  Henrik Ibsen
                </span>
              </Link>
            </div>
            <div className="featureChildren">
              <Link to = "">
                <img src={TnWPic} alt="ErrorInLoading" />
                Talks & Webinars
              </Link>
            </div>
          </div>
        </div>
        {/* <News /> */}
        <Footer />
      </div>
    </>
  );
}
