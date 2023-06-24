import React from 'react'
import { BsBookmark, BsBookmarkFill, BsShare } from "react-icons/bs"
import { FaComment, FaCommentAlt, FaCommentDots, FaComments, FaRegComment } from "react-icons/fa"

const Feed = ({ postData }) => {
    console.log(postData)
    const { id, username, name, picUrl, post, postDescription, upvotes, downvotes, tags, createdAt, comments, isBookmarked } = postData;

    const bookmark = isBookmarked ? <BsBookmarkFill className="icons card-icon right" /> : <BsBookmark className="icons card-icon right" />;

    const chips = tags.map(tag => <div class="chip">{tag}</div>);

    return (
        <div className="card">
            <ul className='collection card-user'>
                <li className="collection-item">
                    <img src={picUrl} alt="" className="card-user-photo left" />
                    <span className='card-user-name left'>Posted by {username}</span>
                </li>
            </ul>
            <div className="card-image">
                <img src="cover.png" />
                <span className="card-title black-text"><b>{post}</b></span>
            </div>
            <div>
                {chips}
            </div>
            <div className="card-content caption">
                <p className='left'>
                    {postDescription}
                </p>
            </div>
            <div className="card-action">
                <a className='icon black-text'>
                    <FaRegComment className="icons card-icon left" />
                </a>
                <a className='icon black-text'>
                    <BsShare className="icons card-icon center" />
                </a>
                <a className='icon black-text'>
                    {bookmark}
                </a>
            </div>
        </div>
    )
}

export default Feed