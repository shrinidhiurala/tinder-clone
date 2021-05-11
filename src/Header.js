import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header ({backButton}){
    const history = useHistory();
    return(
        <div className="header">

            {
                backButton ? (
                    <IconButton onClick={()=> history.replace(backButton)}>
                        <ArrowBackIosIcon className="header__icon" fontSize="large" />
                    </IconButton>
                ) : (
                    <IconButton >
                        <PersonIcon className="header__icon" fontSize="large" />
                    </IconButton>
                )
            }
            
            
            <Link to="/">
                <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg" alt="Tinder logo" />
            </Link>

            <Link to="/chat">
                <IconButton >
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header;