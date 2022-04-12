import React, { useState } from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like + 1 : like - 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className='Post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postTopLeftImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <h5 className="postTopLeftTitle">{Users.filter((u) => u.id === post.userId)[0].username}</h5>
                        <span className="postTopLeftTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className='icon' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='postIcon' onClick={handleLike} src="/assets/heart.png" alt="" />
                        <img className='postIcon' onClick={handleLike} src="/assets/like.png" alt="" />
                        <span className="postLikeCounter">{like} people liked</span>
                    </div>
                    <div className="postbottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;