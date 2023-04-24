"use client";
import { uuid } from "uuidv4";
import { useState } from "react";

export interface ClientFormType {
  clientName: string;
  cid?: any;
}

const ClientForm = () => {
  const [clientData, setClientData] = useState<ClientFormType>({
    clientName: "",
    cid: uuid(),
  });
  const handelClick = async () => {
    console.log("handelClick");
    console.log(clientData);
    const data = await fetch("/api/mysql/postClient", {
      method: "POST",
      body: JSON.stringify(clientData),
    });
    const res = await data.json();
    console.log(res);
    if (res.hasOwnProperty("error")) {
      alert("Error adding property");
      return;
    }
    alert("Client added successfully");
    setClientData({
      clientName: "",
      cid: uuid(),
    });
  };

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  return (
    <>
      <h1 className="text-2xl font-bold my-4">Client Registraion</h1>
      <input
        name="clientName"
        value={clientData.clientName}
        onChange={(e) => {
          handelChange(e);
        }}
        type="text"
        placeholder="Client Name"
        className="input w-full max-w-xs input-bordered "
      />
      <button
        onClick={handelClick}
        className="btn btn-primary w-[60%] text-lg my-5"
      >
        Register
      </button>
    </>
  );
};

export default ClientForm;
