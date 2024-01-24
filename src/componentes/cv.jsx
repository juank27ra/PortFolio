import React from "react";

export default function cv() {
  return (
    <div>
      <object
        id="resourceobject"
        data="https://aulaonline.com.ar/aula/pluginfile.php/248/mod_resource/content/1/pruebas%20exploratorias.pdf"
        type="application/pdf"
        width="800"
        height="600"
        style="width: 804px; height: 695px;"
      >
        {" "}
        Haga clic en{" "}
        <a href="https://aulaonline.com.ar/aula/pluginfile.php/248/mod_resource/content/1/pruebas%20exploratorias.pdf">
          pruebas exploratorias.pdf
        </a>{" "}
        para ver el archivo.
      </object>
    </div>
  );
}
