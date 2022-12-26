import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";

const CardPick = forwardRef((props, ref) => {
  const [state, setState] = useState(undefined);
  useImperativeHandle(ref, () => ({
    cardPick: () => {
      if (state === undefined) {
        setState([...document.querySelector(".cardPickBack").children]);
      } else {
        document.querySelector(".cardPickBack").appendChild(state[0]);
        document.querySelector(".cardPickBack").appendChild(state[1]);
        document.querySelector(".cardPickBack").appendChild(state[2]);
      }
      document.querySelector(".cardPickBack").style.display = "block";
      document.querySelector(".skip").style.display = "block";
      setVideoUrl("video/CookiePick.mp4");
    },
  }));

  const endVideo = () => {
    setVideoUrl();
    document.querySelector(".skip").style.display = "none";
    document.querySelector(".cardPack").style.display = "block";
    document.querySelector(".cardPack").style.pointerEvents = "auto";
    document.querySelector(".cardPickExit").style.display = "block";
    randomCardPick();
  };

  const videoPlayerStyle = { margin: 0, height: "1070px", overflow: "hidden" };

  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  const randomCardPick = () => {
    setVideoUrl(null);
  };

  const cardPickExit = () => {
    const pickFront = document.querySelector(".pickFront");
    const pickBack = document.querySelector(".pickBack");
    document.querySelector(".cardPack").style.display = "none";
    pickFront.classList.remove("frontTurn");
    pickBack.classList.remove("backTurn");
    document.querySelector(".cardPickBack").style.display = "none";
    document.querySelector(".cardPickExit").style.display = "none";
  };

  const cardOpenOne = () => {
    const pickFront = document.querySelector(".pickFront");
    const pickBack = document.querySelector(".pickBack");
    pickFront.classList.add("frontTurn");
    pickBack.classList.add("backTurn");
  };

  return (
    <div>
      <div className="cardPickBack">
        <div className="background"></div>
        <div className="cardPickExit" onClick={cardPickExit}>
          X
        </div>
        <div className="cardPick">
          <ReactPlayer
            ref={videoRef}
            className="CookiePickPlayer"
            url={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={false}
            onEnded={() => {
              endVideo();
            }}
            style={videoPlayerStyle}
          />
          <div className="skip">
            <button
              onClick={() => {
                endVideo();
              }}
              className="skipBtn"
            ></button>
          </div>
          <div className="cardPack">
            <div
              className="pickCard"
              onClick={() => {
                cardOpenOne();
              }}
            >
              <div style={{ position: "relative" }}>
                <div className="cardOne pickFront">
                  <img
                    src={
                      "https://gateway.pinata.cloud/ipfs/QmRZ4rNq94MMhVg8JwuNmXgWmReHK1rAVD7nLor5Qn52C5"
                    }
                    alt="card"
                    width={"200px"}
                    height={"300px"}
                  />
                </div>
                <div className="cardOne pickBack">
                  <img
                    src="image/Card_Back.png"
                    alt="card"
                    width={"200px"}
                    height={"300px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardPick;
