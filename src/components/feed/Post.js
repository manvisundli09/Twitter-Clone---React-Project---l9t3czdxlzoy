
import { BarChartOutlined, ChatBubbleOutline, FavoriteBorder, FileUploadOutlined, Repeat, Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import './Post.css';
import { forwardRef } from 'react';
import { Interweave } from "interweave";


const Post = forwardRef(
    (props , ref) => {

    const displayName = props.tweet.displayName;
    const username = props.tweet.username;
    const verified = props.tweet.verified;
  
    const message = props.tweet.message;
    const avatar = props.tweet.avatar;
    const imageSource = props.tweet.image;
    let displayTime = "";
    const currentDate = new Date().valueOf();
     let  timeStamp =(new Date(currentDate).getTime() - new Date(props.tweet.timeStamp).getTime()) /1000;
        timeStamp = Math.abs(Math.round(timeStamp));
if(timeStamp < 60){
    displayTime = timeStamp + "s";
}else if(timeStamp < 3600){
    displayTime = Math.floor(timeStamp /60)+ "m";
}else if (timeStamp < 86400){
    displayTime = Math.floor(timeStamp /3600) + "h";
}else{
    let monthIndex = new Date(props.tweet.timeStamp).getMonth();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date(props.tweet.timeStamp).getDate();
    displayTime = month[monthIndex] + " " + date;
} 
       
    return (
    
    <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__hederText">
                    <h3>
                        {displayName}  {"  "}
                        <span className="post__headerSpecial">
                            {verified && <Verified className="verifiedIcon" />} @{username}
                                {" . "} {displayTime}</span>
                    </h3>
                </div>
                <div className="post__headerdescription">
                    <Interweave content={message} > </Interweave>
                </div>
            </div>
           { imageSource.trim().length !== 0 && <img src={imageSource} alt="gif"
            />}
            <div className="post__footer">

                <BarChartOutlined fontSize="small" />

                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <FileUploadOutlined fontSize="small" />
            </div>
        </div>
    </div>
 
)});


export default Post;