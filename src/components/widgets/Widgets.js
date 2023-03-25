import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect, useState } from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import db from '../../firebase';
import Post from '../feed/Post';
import './Widgets.css';

const Widgets = () => {
    // const tweet =
    // {
    //     displayName: "Manvi Sundli",
    //     username: "manvisundli",
    //     verified: true,
    //     timeStamp: "13h",
    //     message: "  I'm building my own twittter ",
    //     avatar: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2022/03/Cute-Cartoon-DP.jpg",
    //     imageSource: "https://i.gifer.com/Okf.gif"
    // }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, []);

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchOutlinedIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />

                {posts.map(post => (
                    <Post tweet={post} />
                ))}
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />


            </div>
        </div>
    );
}




export default Widgets;
