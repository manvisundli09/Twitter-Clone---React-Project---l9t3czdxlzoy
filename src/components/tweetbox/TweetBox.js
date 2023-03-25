import { Avatar, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './TweetBox.css';
import db from '../../firebase';
const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [tweetDisabled, setTweetDisabled] = useState(false);

    const onChangeHandler = (event) => {
        setTweetMessage(event.target.value);
        if (tweetMessage.trim().length >= 0) {
            setTweetDisabled(false);
        } else {
            setTweetDisabled(true);
        }

    }

    useEffect(() => {
        if (tweetMessage.trim().length === 0) {
            setTweetDisabled(true);
        } else {
            setTweetDisabled(false);
        }
    }, [tweetMessage])
    const imageChangeHandler = event => {
        setTweetImage(event.target.value);
    }
    const submitHandler = event => {
        event.preventDefault();


        if (tweetDisabled) {
            return;
        }
        db.collection('posts').add({
            displayName: "Nahar Singh",
            username: "naharSingh",
            verified: true,
            timeStamp: new Date().valueOf(),
            message: tweetMessage,
            avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            image: tweetImage.trim()
            // image: (tweetImage.trim().length === 0 ? "https://media.tenor.com/QeGBqkEiu6YAAAAC/yay-yayy.gif" : tweetImage.trim())

        })
        setTweetMessage("");
        setTweetDisabled(true);
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form onSubmit={submitHandler}>
                <div className="tweetBox__input">
                    <Avatar src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                    ></Avatar>
                    <input
                        onChange={onChangeHandler} value={tweetMessage} placeholder="What's happening?"
                        required></input>
                </div>
                <input
                    className='tweetBox__inputImage'
                    placeholder="Enter image URL (Optional)."
                    type='textarea'
                    value={tweetImage}
                    onChange={imageChangeHandler}
                />
                <Button className={tweetDisabled ? "tweetBox__tweetButton__disabled" : "tweetBox__tweetButton"} type="submit" onClick={submitHandler}
                > Tweet</Button>
            </form>
        </div>
    );


}



export default TweetBox;