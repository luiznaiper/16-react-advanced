import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../containers/ToggleLikeMutation";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const default_img =
    "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, liked, likes = 0, src = default_img }) => {
    const [show, ref] = useNearScreen();

    return (
        <Article ref={ref}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {(toggleLike) => {
                            const handleFavClick = () => {
                                toggleLike({
                                    variables: {
                                        input: { id },
                                    },
                                });
                            };
                            return (
                                <FavButton
                                    liked={liked}
                                    likes={likes}
                                    onClick={handleFavClick}
                                />
                            );
                        }}
                    </ToggleLikeMutation>
                </>
            )}
        </Article>
    );
};

PhotoCard.propTypes = {
    id: propTypes.string.isRequired,
    liked: propTypes.bool.isRequired,
    src: propTypes.string.isRequired,
    likes: function (props, propName, compomentName) {
        const propValue = props[propName];
        if (propValue === undefined) {
            return new Error(`${propName} mus be defined`);
        }
        if (propValue < 0) {
            return new Error(`${propName} mus be bigger than 0`);
        }
    },
};

export { PhotoCard };
