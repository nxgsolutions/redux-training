import React, { useState } from "react";


function  WebsocketDemo() {
  //give an initial state so that the data won't be undefined at start
  const [bids, setBids] = useState([0]);

  const ws = new WebSocket("wss://test-api.nxgecom.in/pages/get_pages/1");

  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    console.log("json",json)
    try {
      if ((json.event = "data")) {
        setBids(json.data.bids.slice(0, 5));
      }
    } catch (err) {
      console.log(err,"error");
    }
  };
  //map the first 5 bids
  const firstBids = bids.map((item) => {
    return (
      <div>
        <p> {item}</p>
      </div>
    );
  });

  return <div>{firstBids}</div>;
}

export default  WebsocketDemo;