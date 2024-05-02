import React from "react";
import "./conversation.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedID } from "../../actions";

const Conversations = () => {
  const dispatch = useDispatch();

  const {conversations: dataList, selectedId} = useSelector((state) => state.list);
  
  const handleCollectionShow = (id) => {
    dispatch(setSelectedID(id))
  }

  return (
    <div className="px-30 py-50 conversations-container">
      <div className="mb-24">
        <h2 className="f-32 f-w-700 line-normal text-black-100">
          conversations
        </h2>
        <p className="f-12 f-w-400 line-normal text-black-100">
          track user engagement
        </p>
      </div>
      <div className="suffix-icon-input d-flex align-center pr-12">
        <input
          className="flex-1"
          type="text"
          placeholder="search by conversations and contacts"
        />
        <img
          className="size-12"
          src="/assets/images/inline-search.png"
          alt="search"
        />
      </div>
      <div className="d-flex align-center justify-between pt-16 pb-32">
        <p className="f-10 f-w-500 text-black-100">Sort By:</p>
        <a className="f-10 f-w-500 text-black-100 text-hover-primary" href="#">
          Created Date
        </a>
        <a className="f-10 f-w-500 text-black-100 text-hover-primary" href="#">
          Last Activity
        </a>
        <a className="f-10 f-w-500 text-black-100 text-hover-primary" href="#">
          Time Spent
        </a>
      </div>
      {dataList.map((item) => (
        <div onClick={() => handleCollectionShow(item.id)} key={item.id} className="d-flex align-start conversation-card-list">
          <div>
            <img height={90} src="/assets/images/placeholder-img.png" alt="thumbnail" />
          </div>
          <div className="flex-1 pl-12 text-truncate">
            <h3 className={`${item.id === selectedId ? "text-primary" : "text-black-100"} f-14 f-w-500 mb-6 text-truncate`}>
              {item.head}
            </h3>
            <p className="f-12 f-w-500 text-grey-1 mb-16">Shared {item.lastShared} ago</p>
            <h6 className="f-12 f-w-500 text-grey-2">{item.subExpand.length === 1 ? item.subExpand[0] : `${item.subExpand[0]} +${item.subExpand.length - 1} more`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversations;
