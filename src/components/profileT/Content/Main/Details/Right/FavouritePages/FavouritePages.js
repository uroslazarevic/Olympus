import React from "react";
import { InfoBlock } from "components/UI";
import { FavouritePagesItem } from "components";

const FavouritePages = ({ favPages }) => {
  return (
    <div className="favourite-pages">
      <InfoBlock name="Favourite Pages">
        <ul className="favourite-pages-list">
          {favPages.map(page => {
            return <FavouritePagesItem key={page.id} page={page} />;
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default FavouritePages;
