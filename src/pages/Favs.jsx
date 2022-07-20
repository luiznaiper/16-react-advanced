import React from "react";
import { useGetFavorite } from "../hooks/useGetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export default () => {
    const { data, loading, error } = useGetFavorite();

    if (loading) return "loading...";
    if (error) return "error";

    return (
        <>
            <Layout
                title="Your Favorites"
                subtitle="You can find all your  pets here"
            >
                <ListOfFavs favs={data.favs} />
            </Layout>
        </>
    );
};
