import React, {useState} from "react";
import "./EpisodesSection.css";
import SelectOptions from "../SelectOptions/SelectOptions";
import LittleSwiper from "../LittleSwiper/LittleSwiperDetails";
const EpisodesSection = ({media}) => {
    const [episodes, setEpisodes] = useState();
    const getEpisodesFromSeason = (season) => {
        setEpisodes(media?.seasons[season - 1]?.nb_episodes);
    }
  return (
    <div className="episodes-section">
      <div className="row episodes">
        <div className="col-5 nb-episodes d-flex flex-column justify-content-end">
          Episodes ({episodes? episodes : media?.seasons[0]?.nb_episodes})
        </div>
        <div className="col-7 d-flex flex-column justify-content-end align-items-end">
          {media?.nbseason > 1 ? (
            <SelectOptions
              seasons={media?.nbseason}
              byDefault={1}
              isCategories={false}
              getEpisodesFromSeason={getEpisodesFromSeason}
            />
          ) : null}
        </div>
      </div>

      <hr className="custom-hr" />
      <LittleSwiper nbepisodes={episodes? episodes : media?.seasons[0]?.nb_episodes} littleImage={media?.littleimage} />
      <hr className="custom-hr" />
    </div>
  );
};

export default EpisodesSection;
