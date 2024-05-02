import React, {useContext} from "react";
import {windowSize} from '../../../App';

const Collections = ({recipients}) => {
  const window = useContext(windowSize)
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      {recipients.map((data) => {
        return (
          <div key={data.id} className="individual-list d-flex align-center justify-between col">
            <div className="d-flex align-center">
              <img
                className="size-40 mr-12"
                src={data.image ? data.image : 'assets/images/person-filler-1.png'}
                alt="user"
              />
              <h4 className="f-14 f-w-500 text-black-100 pr-16">
                {data.name}
              </h4>
              {window > 768 ? 
                <p className="pl-16 f-12 f-w-400 text-black-100 border-l-solid-border">
                  last viewed {formatDate(data.lastViewed)};
                </p> : null
              }
            </div>
            <div className="d-flex align-center">
              <div className="d-flex align-center pr-16 border-r-solid-border">
                <p className="tilt-text f-12 f-w-400 text-grey-1">
                  <span>~</span>
                  {data.distance}
                </p>
                <div className="size-34 d-flex align-center justify-center radius-circle ml-8">
                  <img
                    className="size-14"
                    src="/assets/images/mail-open-rate.png"
                    alt="mail open rate"
                  />
                </div>
                <div className="size-34 d-flex align-center justify-center radius-circle ml-8">
                  <img
                    className="size-14"
                    src="/assets/images/content-click-rate.png"
                    alt="content click rate"
                  />
                </div>
                <div className="size-34 d-flex align-center justify-center radius-circle ml-8">
                  <img
                    className="size-14"
                    src="/assets/images/share.png"
                    alt="share"
                  />
                </div>
              </div>
              <div className="ml-16 size-34 d-flex align-center justify-center border-solid-border radius-10">
                <img
                  className="size-14"
                  src="/assets/images/location.png"
                  alt="location"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collections;
