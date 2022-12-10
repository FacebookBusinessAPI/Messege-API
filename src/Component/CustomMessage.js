import React from "react";
import { useState } from "react";

const CustomMessage = (props) => {
  const [Number, setNumber] = useState("");
  const [Message, setMessage] = useState("");

  const Submit = () => {
    console.log(Number);
    console.log(Message);

    if (Number && Message && Number.length === 12) {
        
      var data = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: Number,
        type: "text",
        text: {
          preview_url: false,
          body: Message,
        },
      };
      props.SendFunction(data);
    } else {
      alert("Please Enter Velid Data");
    }
  };

  return (
    <div className="App">
      <div className="form_box">
        <p>Form</p>
        <div className="form">
          <div className="input_box">
            <label>Mobile Number</label>
            <input
              type="number"
              placeholder="enter your mobile number with contry code"
              name="Number"
              className="input"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Message</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="enter your Message"
              name="Message"
              className="input"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="button_box">
          <button onClick={Submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CustomMessage;
