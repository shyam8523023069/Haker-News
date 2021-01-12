import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 5px;
  margin-bottom: 10px;
  font-size:15px;
  

  &:first-of-type {
    border-top: 5;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 16px;
  font-family:'Arial'
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`

  > span:first-child {
    margin-top:10px;
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '•'
    margin:7px 7px;
  }

  .story__meta-bold {
    // font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  // font-weight: bold;
  color: ${props => props.color};
`;
