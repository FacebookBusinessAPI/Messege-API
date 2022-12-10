import "./App.css";
// import MediaMessages from "./Component/MediaMessages";
import axios from "axios";
import CustomMessage from "./Component/CustomMessage";
// import LocationMessages from "./Component/LocationMessages";

function App() {

  const SendData = (ConfigData)=>{
    var data = JSON.stringify(ConfigData);

    var config = {
      method: "post",
      url: "https://graph.facebook.com/v15.0/111412271813097/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer EAAGp6OmGBZCUBAHM753FEmZCZAE4AZBfZBxq587eUZAOuUudVh2vZCSsGXenQUMo4U8PtKZAr4Vd4cvCPJRjMFXf2efZBMYAlIICBWC4dA4xHDI6I19ydXlcdXIHi6B9izoZCKTpqO9TX5s8R6frZA37KvRGkePrmHRdmh1PIYrPCPVy4IVs2NYGMfreriYSNecM6DlHRB6HuUvswZDZD",
          
      },

      data: data,
    };

     axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
      <CustomMessage SendFunction = {SendData}/>
      {/* <MediaMessages SendFunction = {SendData}/> */}
      {/* <LocationMessages/> */}
    </>
  );
}

export default App;
