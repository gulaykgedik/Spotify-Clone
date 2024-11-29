// Api Url
const url = "https://shazam.p.rapidapi.com/search?term=adele&locale=en-US";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "32b696e1f5mshb0d41586fa577adp12e531jsn9effa32a4972",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// Api clası
export class API {
  async getPopular() {
    // const res = await fetch(url, options);
    // const data = await res.json();

    // const formatted = data.tracks.hits.map((item) => item.track);
    // console.log(formatted);
    // return formatted;
    const data = await this.searchMusics("adele");
    const data1 = await this.searchMusics("sezen aksu");

    return [...data, ...data1];
  }

  async searchMusics(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;

    const res = await fetch(url, options);

    const data = await res.json();

    const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
  }
}
