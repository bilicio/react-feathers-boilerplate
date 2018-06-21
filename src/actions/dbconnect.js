import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json"
  }
})

export const insta = axios.create({
    baseURL: "https://www.instagram.com/explore/tags/snow/?__a=1",
    headers: {
      "Content-Type": "application/json"
    }
  })