import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import Pagination from '../Pagination/Pagination';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';


const StoriesContainer = () => {
 
  const [storyIds, setStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = storyIds.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        
        {currentPosts.map(storyId => (
          <Story key={storyId} storyId={storyId} />
          
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={storyIds.length}
          paginate={paginate}
        />
      </StoriesContainerWrapper>
      
    </>
  );
};

export default StoriesContainer;
