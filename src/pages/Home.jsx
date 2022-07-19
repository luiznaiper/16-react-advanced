import React from "react";
import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCardsContainer } from "../containers/ListOfPhotoCardsContainer";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    let params = useParams();
    return (
        <>
            <Helmet>
                <title>Pegram - Pet App</title>
                <meta
                    name="description"
                    content="You can find beautiful pet images"
                />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCardsContainer categoryId={params.id} />
        </>
    );
};

export { Home };
