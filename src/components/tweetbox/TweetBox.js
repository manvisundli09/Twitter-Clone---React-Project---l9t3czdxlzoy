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
            displayName: "Manvi Sundli",
            username: "manvisundli",
            verified: true,
            timeStamp: new Date().valueOf(),
            message: tweetMessage,
            avatar: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2022/03/Cute-Cartoon-DP.jpg",
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
                    <Avatar src='https://www.goodmorningimagesdownload.com/wp-content/uploads/2022/03/Cute-Cartoon-DP.jpg'
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
