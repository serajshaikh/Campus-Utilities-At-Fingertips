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

const LibraryData = [
    {
        id:1,
        title:"Study At Home",
        childern:[
            {
            child:"Engineering",
            img:EngineeringPic,
            link:"library/engineering"
            },
            {
                child:"Science",
                img:SciencePic,
                link:"library/engineering"
            },
            {
                child:"Humanity",
                img:HumanityPic,
                link:"library/humanity"
            },
            {
                child:"Literature",
                img:LiteraturePic,
                link:"librarylibrary/literature"
            },
            {
                child:"Law & Management",
                img:LnMPic,
                link:"librarylibrary/lnm"
            },
            {
                child:"Arts",
                img:ArtsPic,
                link:"librarylibrary/arts"
            }

        ]
    },
    {
        id:2,
        title:"Covid-19 Research Repository",
        childern:[
            {
                child:"Scholarly Publication",
                img:SPPic,
                link:"library/scholarypublication"
            },
            {
                child:"Data Sets",
                img:DataSetPic,
                link:"library/dataset"
            },
            {
                child:"Documents & Videos",
                img:DnVPic,
                link:"library/documentandvideos"
            },
            {
                child:"Journals & Confrence",
                img:JnCPic,
                link:"library/journalsandconfrence"
            },
            {
                child:"Ideas & Funding",
                img:InFPic,
                link:"library/ideasandfunding"
            },
            {
                child:"Challenges & Startup",
                img:CnSPic,
                link:"library/challengesandstarup"
            },

        ]
    },
    {
        id:3,
        title:"Featured Collections",
        childern:[
            {
            child:"Birth Cenetenary of Satyajit Ray",
            img:BCoSRPic,
            link:"library/birthcenetenaryofsatyajitray"
            },
            {
                child:"Topic of the week: Photography",
                img:ToTWPic,
                link:"library/topicoftheweek"
            },
            {
                child:"On this Day",
                img:OTDPic,
                link:"library/onthisday"
            },
            {
                child:"Person of the week:Henrik Ibsen",
                img:PoTWPic,
                link:"library/personoftheweek"
            },
            {
                child:"Talks & Webinars",
                img:TnWPic,
                link:"library/talksandwebinars"
            }

        ]
    },

]

export default LibraryData;