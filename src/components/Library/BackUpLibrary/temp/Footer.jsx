import "./footer.css"
// import { Link } from "react-router-dom";
import { CgFacebook, CgInstagram, CgYoutube ,CgTwitter} from "react-icons/cg";
import { GrLinkedin} from "react-icons/gr";
export default function Footer(){
    return(
        <footer className ="page_footer">
            <div className = "footer_container">
                <div className = "footer_col">
                    <ul>
                        <li>About</li>
                        <li>Disclaimer</li>
                        <li>FAQ</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className = "footer_col">
                    <ul>
                        <li>Bulk Registration</li>
                        <li>Sponser</li>
                        <li>Contact</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className ="connections">
                    <div className ="social_icons">
                        <div className = "icon" id = "facebook">
                            <span><CgFacebook/></span>
                        
                        </div>
                        <div className ="icon" id = "twitter">
                            <span><CgTwitter/></span>
                        
                        </div>
                        <div className ="icon" id = "youtube">
                            <span><CgYoutube/></span>
                        
                        </div>
                        <div className ="icon" id = "linkedin">
                            <span><GrLinkedin/></span>
                        
                        </div>
                        <div className ="icon" id = "instagram">
                            <span><CgInstagram/></span>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h6>© Copyright 2021 | ismartn</h6>
            </div>
        </footer>
    )
}