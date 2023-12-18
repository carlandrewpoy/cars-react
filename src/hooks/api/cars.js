import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "50a949e2f9msh9269d1c95f31a84p1148e0jsnad3e64e142b5",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

async function GetCars(params) {
  return await axios
    .get("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
      params: params,
      headers,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

const generateCarImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  console.log("Image", car);

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export { GetCars, generateCarImageUrl };
