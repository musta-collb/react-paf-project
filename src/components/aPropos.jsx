import React, { PureComponent } from "react";
import { DefaultContext } from "react-icons";

const Presentation = () => {
  return (
    <div className="w-fill my-3 flex flex-wrap">
      <div className="tablet:w-2/4 sm:w-full  text-xl sm:w-full p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          scelerisque turpis ac orci lobortis tincidunt. Integer ornare tortor
          gravida commodo posuere. Nam vel libero augue. Aenean rutrum vulputate
          sem vitae dictum. Maecenas pulvinar aliquet leo non lobortis. Sed non
          mi fermentum, elementum orci quis, dictum mauris. Quisque ut sodales
          lectus, ut porta lacus. Phasellus quis imperdiet mi, id pellentesque
          justo. Sed at enim pretium, euismod libero vitae, posuere ligula.
          Mauris id facilisis nisi, eget suscipit magna. Ut id ligula elit. Sed
          sollicitudin tincidunt dapibus. Curabitur pharetra nibh tortor, sed
          rutrum justo aliquam vitae. Aliquam massa massa, porttitor vel aliquet
          ac, bibendum vitae felis.
        </p>
      </div>

      <div className="tablet:w-1/2 sm:w-full p-4 text-xl float-left">
        <img src={require("../images/imgMain.jpg")} className="w-full" />
      </div>
    </div>
  );
};

export default Presentation;
