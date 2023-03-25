import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from '../tweetbox/TweetBox';
import Post from './Post';
import db from '../../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
        console.log(db);

    }, []);




    var sortedposts = posts.slice(0);
    sortedposts.sort(function (a, b) {
        var x = b.timeStamp;
        var y = a.timeStamp;
        return x < y ? -1 : x > y ? 1 : 0;
    });


    // const tweet =
    // {
    //     displayName: "Nahar Singh",
    //     username: "naharSingh",
    //     verified: true,
    //     timeStamp: "13h",
    //     message: "  I'm building my own twittter ",
    //     avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    //     image: "https://i.gifer.com/Okf.gif"
    // }


    return (
        <div className='feed'>
            {/* header */}
            <div className="feed__header">

            </div>
            {/* tweet Box */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
                {sortedposts.map(post => (
                    <Post key={post.timeStamp}
                        tweet={post} />
                ))}

            </FlipMove>









            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}




        </div>
    );
}


export default Feed;