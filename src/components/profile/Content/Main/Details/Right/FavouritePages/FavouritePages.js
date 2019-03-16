import React from "react";
import { InfoBlock } from "components/UI";
import { ProfileContentMainDetailsRightFavouritePagesItem } from "components";

const FavouritePages = ({ favPages }) => {
  return (
    <div className="favourite-pages">
      <InfoBlock name="Favourite Pages">
        <ul className="favourite-pages-list">
          {favPages.map(page => {
            return (
              <ProfileContentMainDetailsRightFavouritePagesItem
                key={page.id}
                page={page}
              />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default FavouritePages;
