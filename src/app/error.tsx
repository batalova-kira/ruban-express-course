'use client';

import { ERRORS } from "./errors";

export default function HomePageError({error}:{error: Error}) {
    if (error.message = ERRORS.NOT_FOUND){
        return <p>Articles not found</p>
    }
    return <>Something went wrong</>
}