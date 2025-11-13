import React from "react";
import axios from "axios";

const instance=axios.create({
    baseURL:'https://car-rental-server-six-xi.vercel.app'
})

export default function useAxios() {
  return instance
}
