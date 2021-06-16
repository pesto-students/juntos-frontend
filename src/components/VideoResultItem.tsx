import styled from "styled-components";
import Moment from 'react-moment';

import { dropShadow } from "src/common/constants/dropShadow";
import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";

import MusicNote from 'src/assets/serviceProviderLogos/youtube-music-note.svg';

interface IVideoResultItemData {
    thumbnail: string,
    title: string,
    duration: string,
    channelName: string,
    views: string,
    postDate: string,
    imgAlt: string,
    videoId: string
}

interface IVideoResultItem {
    data: IVideoResultItemData;
}

interface IContainer{
    width?: string,
    height?: string
}

function truncate(str: string, n: number) {
    if (str.length > n) {
        return str.substr(0, n-1) + '...';
    } else {    
        return str;
    }
};

const Container = styled.div<IContainer>`
    display: flex;
    flex-direction: row;
    background-color: ${colors.codGrey};
    width: ${props => (props.width || 379) + `px`};
    height: ${props => (props.height || 103) + `px`};
    margin: ${cssScale.c2};
    box-shadow: ${dropShadow.primary};
    > .result-thumbnail{
        position: relative;
        > .img-thumbnail{
            max-width: 100%;
            max-height: 100%;
            padding: ${cssScale.c1};
        }
        > .duration{
            height: ${cssScale.c5};
            background-color: ${colors.black50};
            border-radius: ${cssScale.c1};
            color: ${colors.white};
            position: absolute;
            padding: ${cssScale.c1};
            bottom: ${cssScale.c1};
            right: ${cssScale.c1};
            justify-content: center;
            align-items: center;
            display: flex;
            font-size: ${cssScale.c3};
            font-weight: bold;
        }
    }
    > .result-data{
        flex: 1;
        padding: ${cssScale.c1};
        > .data-title{
            color: ${colors.white};
            font-size: ${cssScale.c4};
            line-height: ${cssScale.c4};
            height: ${cssScale.c12};
        }
        > .data-meta {
            color: ${colors.silverChalice};
            font-size: ${cssScale.c3};
            > .music-note {
                width: ${cssScale.c3};
            }
            > .meta-separator {
                display: inline-flex;
                width: ${cssScale.c1};
                height: ${cssScale.c1};
                background-color: ${colors.silverChalice};
                border-radius: 50%;
                margin-left: ${cssScale.c1};
                margin-right: ${cssScale.c1};
            }
        }
    }
  `;

function VideoResultItem(props: IVideoResultItem) {
    const {data} = props;

    return <Container>
        <div className="result-thumbnail">
            <img className="img-thumbnail" src={data.thumbnail} alt={data.imgAlt}/>
            <div className="duration">
                {data.duration}
            </div>
        </div>
        <div className="result-data">
            <div className="data-title">{truncate(data.title, 44)}</div>
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