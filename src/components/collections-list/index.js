import React, { useEffect, useState, useContext } from "react";
import "./collection-styles.scss";
import { useSelector } from "react-redux";
import Collections from "./collection-components/collections";
import { windowSize } from "../../App";

const CollectionList = () => {
  const [listDataValue, setListDataValue] = useState();
  const { conversations: dataList, selectedId } = useSelector(state => state.list);

  const window = useContext(windowSize);
  useEffect(() => {
    let collectionData = dataList.find((data) => data.id === selectedId);
    setListDataValue(collectionData);
  }, [selectedId, dataList]);

  const interactionRateCard = () => {
    let interactionRateData = [
      {
        key: "contentClick",
        description: "email open rate",
        image: "/assets/images/mail-open-rate.png",
      },
      {
        key: "emailOpen",
        description: "content click rate",
        image: "/assets/images/content-click-rate.png",
      },
      {
        key: "timeSpent",
        description: "total time spent",
        image: "/assets/images/time-spent.png",
      },
      {
        key: "dealValue",
        description: "deal value",
        image: "/assets/images/clear-value.png",
      },
    ];
    return listDataValue.interactionRate
      ? interactionRateData.map(({ key, description, image }, index) => {
          return (
            <div key={index} className="info-card p-12 border-solid-border radius-8">
              <div className="d-flex align-center justify-between pb-20">
                <p className="f-14 f-w-500 text-black-100">
                  {listDataValue.interactionRate[key]}
                </p>
                <img className="size-14" src={image} alt="mail open rate" />
              </div>
              <p className="f-10 f-w-400 text-black-100">{description}</p>
            </div>
          );
        })
      : null;
  };

  return (
    <>
      {listDataValue ? (
        <div className="flex-1 collection-container">
          <div className="d-flex align-center justify-between mb-24">
            <div>
              <h2 className="f-24 f-w-700 text-black-100 mb-20">
                {listDataValue.head}
              </h2>
              <p className="f-12 f-w-500 text-black-100 mb-6">
                You shared {listDataValue.assetsShared} assets with{" "}
                {listDataValue.assetRecipeint} recipients
              </p>
              <p className="f-10 f-w-400 text-grey-1">
                {listDataValue.lastShared} ago via QuickSend
              </p>
            </div>
            {window.width > 1024 ? (
              <div className="d-flex align-center">
                <div className="size-34 d-flex align-center justify-center border-solid-border radius-10 mr-10 cursor-pointer">
                  <img
                    className="size-14"
                    src="/assets/images/visible.png"
                    alt="visible"
                  />
                </div>
                <div className="size-34 d-flex align-center justify-center border-solid-border radius-10 mr-10 cursor-pointer">
                  <img
                    className="size-14"
                    src="/assets/images/refresh.png"
                    alt="refresh"
                  />
                </div>
                <div className="size-34 d-flex align-center justify-center border-solid-border radius-10 cursor-pointer">
                  <img
                    className="size-14"
                    src="/assets/images/delete.png"
                    alt="delete"
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="d-flex align-stretch info-card-container">{interactionRateCard()}</div>
          <div className="mt-48">
            <div className="d-flex align-center">
              <p className="f-16 f-w-500 text-hover-primary pb-12 mr-24 tab-header active">
                Recipients - 08
              </p>
              <p className="f-16 f-w-500 text-hover-primary pb-12 tab-header">
                Sections - 05
              </p>
            </div>
            <div className="collection-list pt-24">
              <Collections recipients={listDataValue.recipients} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CollectionList;
