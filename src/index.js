const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*"
  })
);

const vans = [
  {
    id: "1342342",
    title: "Cargo van used Iveco Diesel",
    price: 19000,
    firstRegistry: new Date(2020, 7, 23),
    type: "Diesel",
    cv: 126,
    km: 200300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos: [
      "https://i.imgur.com/xJh1VEb.jpg",
      "https://i.imgur.com/NfpG1hQ.jpg",
      "https://i.imgur.com/D2Gzy2V.jpg",
      "https://i.imgur.com/qpmMd2m.jpg",
      "https://i.imgur.com/mggd2LN.jpg"
    ]
  },
  {
    id: "1349942",
    title: "Mercedes-Benz ev6 AMG-edition",
    price: 14500,
    firstRegistry: new Date(2022, 7, 25),
    type: "Gasoline",
    cv: 170,
    km: 12000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos: [
      "https://i.imgur.com/mggd2LN.jpg",
      "https://i.imgur.com/D2Gzy2V.jpg",
      "https://i.imgur.com/xJh1VEb.jpg",
      "https://i.imgur.com/NfpG1hQ.jpg",
      "https://i.imgur.com/qpmMd2m.jpg"
    ]
  },
  {
    id: "6542342",
    title: "Volkswagen Caddy Cargo good condition",
    price: 7000,
    firstRegistry: new Date(2018, 2, 13),
    type: "Diesel",
    cv: 159,
    km: 320300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos: [
      "https://i.imgur.com/xJh1VEb.jpg",
      "https://i.imgur.com/NfpG1hQ.jpg",
      "https://i.imgur.com/D2Gzy2V.jpg",
      "https://i.imgur.com/qpmMd2m.jpg",
      "https://i.imgur.com/mggd2LN.jpg"
    ]
  }
];

//create a server object:
app.get("/", function (req, res) {
  res.write("Hello World!..."); //write a response to the client
  res.end(); //end the response
});

app.get("/vans", function (req, res) {
  res.send(vans);
});

app.get("/vans/:id", function (req, res) {
  const id = req.params.id;
  const van = vans.find((van) => van.id === id);

  if (!van) {
    res.status(204);
  }
  res.send(van);
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080
