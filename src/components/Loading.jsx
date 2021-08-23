import React from "react";
import "./Loading.css";

const Loading = ({ list }) => {
  return (
    <div>
      <div>
        {list.length <= 0 && (
          <img
            className="loading"
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          ></img>
        )}
      </div>
    </div>
  );
};
export default Loading;
