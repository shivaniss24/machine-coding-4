import React from 'react'
import SideNav from './SideNav'
import Feed from './Feed'
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { forumData } = useAppContext();
    return (

        <div className='container'>
            <div className='row'>
                <SideNav />
                <div className='col s6'>
                    {forumData.posts.map(post => <Feed postData={post} />)}
                </div>
                <div className='col s3'>
                </div>
            </div>
        </div >
    )
}

export default Home