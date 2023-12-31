/** @format */

import { useEffect, useReducer, useRef, useState } from "react";
import DropDownList from "../../DropDown/DropDownList";
import "../../../css/SetsTab.css";
import Apis, { endpoints } from "../../../config/Apis";
import cookies from "react-cookies";
import DashBoardListItems from "../../DashBoardItems/DashBoardListItems";
import { ExceptCommon } from "../../../js/ExceptCommon";
import { useDispatch, useSelector } from "react-redux";
import { IsLoading, StopLoading } from "../../../Creators/LoadingCreator";
import DialogNewSet from "../../Dialog/DialogNewSet";
import { TurnOnNewSet } from "../../../Creators/CommonCreator";

export default function SetsTab() {
  const items = [
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 1, displayName: "Created" });
      },
      displayName: "Created",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 2, displayName: "Joined" });
      },
      displayName: "Joined",
      icon: "",
    },
    {
      action: () => {
        setShow(false);
        setChooseIdx({ idx: 3, displayName: "Studied" });
      },
      displayName: "Studied",
      icon: "",
    },
  ];
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const isTurnOnNewSet = useSelector((state) => state.isTurnOnNewSet.isTurnOn);
  const [chooseIdx, setChooseIdx] = useState({
    idx: 1,
    displayName: items[0].displayName,
  });

  // lesson list
  const [lessons, setLessons] = useState([]);
  const onClick = () => {
    setShow(!show);
  };
  const turnOnNewSetOnClick = () => {
    dispatch(TurnOnNewSet());
  };
  useEffect(() => {
    dispatch(IsLoading());
    let accessToken = cookies.load("access-token");
    let res = null;
    let loadLessons = async () => {
      try {
        if (chooseIdx.idx === 1) {
          res = await Apis.get(endpoints["getAllLessonOfUser"], {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        } else if (chooseIdx.idx === 2) {
          res = await Apis.get(endpoints["getLessonsJoined"], {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(res);
        } else {
          setLessons([]);
          dispatch(StopLoading());
        }
        if (res) {
          dispatch(StopLoading());
          setLessons(res.data);
        }
      } catch (e) {
        dispatch(StopLoading());
        var user = cookies.load("current-user");
        ExceptCommon(e, user.id);
      }
    };
    loadLessons();
  }, [chooseIdx]);

  return (
    <>
      <div className="UIContainer">
        <div className="ProfilePage-content">
          <div className="ProfileRecentPage">
            <div className="ProfileRecentFeed">
              <div className="p1vmf404">
                <div data-overlay-container="true">
                  <button
                    type="button"
                    id="react-aria6454471699-48"
                    className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--medium AssemblyButtonBase--padding"
                    onClick={onClick}
                  >
                    <span>{chooseIdx.displayName}</span>
                    <span className="k-icon k-i-chevron-down AssemblyIcon AssemblyIcon--medium"></span>
                  </button>
                  {show && <DropDownList show={show} items={items} />}
                </div>
                {lessons.length > 0 ? (
                  <label className="AssemblyInput AssemblyInput--inverted">
                    <input
                      className="AssemblyInput-input AssemblyInput-placeholder js-bound"
                      placeholder="Search your sets"
                      type="text"
                    />
                    <div className="ionmch8">
                      <div className="f1dpcrgz">
                        <span className="k-icon k-i-search"></span>
                      </div>
                    </div>
                  </label>
                ) : (
                  ""
                )}
              </div>
              {lessons.length > 0 ? (
                <div className="UIDiv LatestActivityFeed">
                  <div className="LatestActivityFeed-unpublishedSets">
                    <div className="DashboardFeedGroup">
                      <header className="DashboardFeedGroup-header">
                        <h3 className="DashboardFeedGroup-title">
                          In progress
                        </h3>
                        <div className="DashboardFeedGroup-separator">
                          <hr className="UIHorizontalRule" />
                        </div>
                      </header>
                      <DashBoardListItems items={lessons} />
                    </div>
                  </div>
                  <div></div>
                </div>
              ) : (
                ""
              )}
              {chooseIdx.idx === 1 || chooseIdx.idx === 3 ? (
                <div className="c87nrzn">
                  <img
                    alt="No sets found in your library"
                    srcSet="https://assets.quizlet.com/a/j/dist/app/i/library/sets_empty.4533dc3cae314a7.svg"
                  />
                  <div className="t1obl4kx t1ne2oir">
                    {/* You haven't created any sets yet */}
                    Create a study set on anything you need to study
                  </div>
                  {/* <div className="s27gyf7 t1ne2oir">
                  Create a study set on anything you need to study
                </div> */}
                  <div className="cphr65e">
                    <button
                      type="button"
                      aria-label="Create a set"
                      className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--medium AssemblyButtonBase--padding"
                      onClick={turnOnNewSetOnClick}
                    >
                      <span>Create a set</span>
                    </button>
                  </div>
                  {isTurnOnNewSet && <DialogNewSet />}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
