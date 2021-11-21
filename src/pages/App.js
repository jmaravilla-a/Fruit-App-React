import React, { useEffect, useState } from "react";
import "../styles/app.scss";
import pictureData from "../Utilities/pictureData";
import Title from "../components/Title";
import Media from "../components/Media";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0})

  useEffect(() => {
    const updateMousePosition = event => {
      setMousePosition({x: event.clientX, y: event.clientY})
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [])

  return mousePosition
};

function App() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const {x, y} = useMousePosition();
  
  return (
    <div className="page-wrapper">
      <div className="project-list">
        
        {pictureData.map(({ title }, index) => (
          <Title title={title} setActiveIndex={setActiveIndex} index={index}/>
        ))}        
      </div>
      <div className="project-media">
          {pictureData.map(({mediaUrl}, index) => {
            const isActive = index === activeIndex;
            const xPos = isActive ? x : 0;
            const yPos = isActive ? y : 0;
            return <Media url={mediaUrl} active={isActive} x={xPos} y={yPos}/>
          })}
      </div>
    </div>
  );
}

export default App;
