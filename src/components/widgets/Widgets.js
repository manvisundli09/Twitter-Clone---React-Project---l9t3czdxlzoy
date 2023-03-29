import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useEffect, useState } from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import db from '../../firebase';
import Post from '../feed/Post';
import './Widgets.css';
import { SearchResultsList } from "./SearchResultsList";

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

    const [results, setResults] = useState([]);

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => {
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchOutlinedIcon className="widgets__searchIcon" setResults={setResults} />
                <input placeholder="Search Twitter" type="text" value={input} 
                onChange={(e) => handleChange(e.target.value)}  />
                {results && results.length > 0 && <SearchResultsList results={results} />}
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
