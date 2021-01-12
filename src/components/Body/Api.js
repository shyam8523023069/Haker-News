import React, {createContext} from "react";
import axios from "axios";

export const Api = createContext()
export const HakerState =({children})=> {
     const fetchTopStories = async () => {
        return await axios.get("//hacker-news.firebaseio.com/v0/topstories.json");
      };
      
       const fetchItem = async id => {
        const res = await axios.get(
          `//hacker-news.firebaseio.com/v0/item/${id}.json`
            );
        return res.data;
        
      };
      
      const getTopStories = async () => {
          const topstories = await fetchTopStories();
          const items = await Promise.all(
            topstories.data.slice(0, 100).map(id => fetchItem(id))
          );
        
          // filter out falsy values (null, undefined, etc)
          return items.filter(Boolean);
        }; 

     return(
         <Api.Provider
           value={{
               getTopStories,
           }}
           >
             {children}
             
         </Api.Provider>
     )   
}



