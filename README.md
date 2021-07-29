# YourEScooter

https://escooter-react-tailwind.web.app/

Open terminal for "nestjs-react-redux-tailwind-docker", 
npm start

Open terminal for "front-react_tailwind_redux_docker", 
npm install, 
npm start


http://localhost:9000/graphql

mutation {
  addNewCar(newCarData: {
    name: "",
    mileage: "k",
    thumbnailUrl: ".jpg",
    dailyPrice: ,
    monthlyPrice: ,
    gearType: "Auto",
    gas: "Petrol"
  }) {
    id
    name
    thumbnailUrl
    mileage
  }
}

docker compose build && docker compose up
