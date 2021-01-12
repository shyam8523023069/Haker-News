/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';
import './Story.css';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle >
        <a className="Title"  href={story.url}>{story.title}
        <div className="urltitle" >
        ({story.url})
        </div>
          </a>
      </StoryTitle>
      <StoryMeta className="ChildPost" >
        <span data-testid="story-by">
          <StoryMetaElement>By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement>Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
