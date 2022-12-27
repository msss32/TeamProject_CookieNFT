import React from "react";
import {
    LoadingWrap_div,
    ImgWrap_div,
    Loading_img,
    LoadingText_div,
} from "../style/LoadingStyle";
import { cookie_run } from "../image";

const Loading = () => {
    return (
        <div className="loadingDisplay">
            <LoadingWrap_div>
                <ImgWrap_div>
                    <h1>
                        우리 <span>지니</span>
                        &nbsp;달린다
                    </h1>
                    <Loading_img src={cookie_run} />
                    <LoadingText_div>로딩중</LoadingText_div>
                </ImgWrap_div>
            </LoadingWrap_div>
        </div>
    );
};

export default Loading;
