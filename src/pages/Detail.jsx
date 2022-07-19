import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

const Detail = () => {
    const params = useParams();
    const detailTitle = parseInt(params.detailId);
    console.log(typeof detailTitle);
    return (
        <Layout title={`Picture ${detailTitle + 1}`}>
            <PhotoCardWithQuery id={params.detailId} />
        </Layout>
    );
};

export { Detail };
