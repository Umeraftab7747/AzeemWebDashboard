import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

function App() {
  const [Product, SetProduct] = React.useState();
  const [Image, SetImage] = React.useState();
  const [Price, SetPrice] = React.useState();
  const [Description, SetDescription] = React.useState();

  return (
    <div className="w-full h-[600px]   justify-center items-center p-20">
      <div className=" w-[520px] h-[500px] self-center ">
        <input
          onChange={(event) => {
            SetProduct(event.target.value);
          }}
          className="w-[70%] h-[10%] rounded-md pl-3 bg-slate-500 text-white mt-2"
          placeholder="NAME OF PRODUCT"
        />
        <input
          onChange={(event) => {
            SetImage(event.target.value);
          }}
          className="w-[70%] h-[10%] rounded-md pl-3 bg-slate-500 text-white mt-2"
          placeholder="Image of Produdct"
        />
        <input
          onChange={(event) => {
            SetPrice(event.target.value);
          }}
          className="w-[70%] h-[10%] rounded-md pl-3 bg-slate-500 text-white mt-2"
          placeholder="Price of Product"
        />
        <input
          onChange={(event) => {
            SetDescription(event.target.value);
          }}
          className="w-[70%] h-[30%] rounded-md pl-3 bg-slate-500 text-white mt-2"
          placeholder="Descrption"
        />

        <button
          onClick={async (e) => {
            e.preventDefault();
            try {
              await addDoc(collection(db, "Products"), {
                ProductName: Product,
                Image: Image,
                Price: Price,
                Description: Description,
              });
              alert("DONE");
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }}
          className="w-[300px] h-[70px] bg-slate-700  mt-5 p-5 rounded-lg text-white"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
