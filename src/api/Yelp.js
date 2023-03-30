import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization:
      "Bearer 2F_-Qt8ZOQ14aBlANEch6lQc7hHb8yLpOeRzS0UCb8oVIT1d3IfGDxfdSlfNGVdtkzHHDzqFN3I2ZyLTogFAReeF1TzAUDBjlnBWo0Pee86qH1p7gqfrRT_LP3UgZHYx",
  },
});
