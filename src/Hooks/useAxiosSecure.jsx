import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

import React, { useEffect } from "react";
import useAuth from "./useAuth";

export default function useAxiosSecure() {
    const { user } = useAuth()

    useEffect(() => {

    }, [user])

    return instance
}
