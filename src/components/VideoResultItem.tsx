import styled from "styled-components";
import Moment from 'react-moment';

import { dropShadow } from "src/common/constants/dropShadow";
import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

import MusicNote from 'src/assets/serviceProviderLogos/youtube-music-note.svg';

// interface IVideoResultItem {
//     thumbnail: string;
//     data: any;
//   }

function truncate(str: string, n: number) {
    if (str.length > n) {
        return str.substr(0, n-1) + '...';
    } else {    
        return str;
    }
};

const Container = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    background-color: #181818;
    width: ${props => (props.width || 379) + `px`};
    height: ${props => (props.height || 103) + `px`};
    margin: ${cssScale.c3};
    box-shadow: ${dropShadow.primary};
    > .result-thumbnail{
        position: relative;
        border: 0px solid red;
        > .img-thumbnail{
            max-width: 100%;
            max-height: 100%;
            padding: 4px;
        }
        > .duration{
            width: 35px;
            height: 18px;
            background-color: rgba(0,0,0,50%);
            border-radius: 3px;
            color: white;
            position: absolute;
            bottom: 2px;
            right: 4px;
            justify-content: center;
            align-items: center;
            display: flex;
            font-size: 10px;
            font-weight: bold;
        }
    }
    > .result-data{
        flex: 1;
        border: 0px solid white;
        padding: 4px;
        > .data-title{
            color: ${colors.white};
            font-size: 16px;
            line-height: 1.5em;
            height: 3em;
        }
        > .data-meta {
            color: #A6A6A6;
            font-size: 14px;
            > .music-note {
                width: 14px;
                padding-left: 2px;
            }
            > .meta-separator {
                display: inline-flex;
                width: 4px;
                height: 4px;
                background-color: #a6a6a6;
                border-radius: 50%;
                margin-left: 4px;
                margin-right: 4px;
                margin-bottom: 2px;
            }
        }
    }
   
  `;

function VideoResultItem(props: any) {
    const {data} = props;

    return <Container>
        <div className="result-thumbnail">
            <img className="img-thumbnail" src={data.thumbnail} alt={data.imgAlt}/>
            <div className="duration">
                {data.duration}
            </div>
        </div>
        <div className="result-data">
            <div className="data-title">{truncate(data.title, 45)}</div>
            <p className="data-meta">
                {data.channelName}
                <img className="music-note" src={MusicNote} alt="music note"/>
            </p>
            <p className="data-meta">
                {data.views} views
                <span className="meta-separator"></span>
                <Moment fromNow>{data.postDate}</Moment>
            </p>
        </div>
    </Container>
}

export default VideoResultItem;   