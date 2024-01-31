import React from "react";
import cv from "../assets/CV Juan Ramirez24.pdf"

export default function cv() {
  return (
    <div>
      <object
        id="resourceobject"
        data=""
        type="application/pdf"
        width="800"
        height="600"
        style="width: 804px; height: 695px;"
      >
        {" "}
        Haga clic en{" "}
        <a href="">
          {cv}
        </a>{" "}
        para ver el archivo.
      </object>
    </div>
  );
}
