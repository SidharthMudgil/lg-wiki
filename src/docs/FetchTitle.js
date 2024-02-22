import React, { useRef, useEffect, useState } from "react";
import { Query } from "appwrite";
import uploadService from "../appWrite/services/uplaod";

import DynamicTitle from './DynamicTitle';

export default function FetchTitle() {
    const [fetchTitle, setfetchTitle] = useState([]);
    
    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const queries = [Query.equal("status", "active")];
            setfetchTitle([]);
            const response = await uploadService.getPosts(queries);
            const document = response.documents;
            setfetchTitle(document);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            {fetchTitle.map((item) => (
                <DynamicTitle conTitle={item.title} data={item.markdown} />
            ))}
        </>
    );
}
