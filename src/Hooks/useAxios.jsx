import React from "react";
import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:4000'
})

export default function useAxios() {
  return instance
}
