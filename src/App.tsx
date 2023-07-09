import React, { useState } from "react";
import "./App.scss";
import Container from './ components/Container';
import { BoxGrid as DesktopBoxGrid } from './ components/desktop/BoxGrid';
import { BoxGrid as MobileBoxGrid } from './ components/mobile/BoxGrid';

type Box = {
  id: string;
  className: string;
  color: string;
};

const boxData: Box[] = [
  { id: "box1", className: "box1", color: "#0089E0" },
  { id: "box2", className: "box2", color: "#E53458" },
  { id: "box3", className: "box3", color: "#8C7A5B" },
  { id: "box4", className: "box4", color: "#B85E61" },
  { id: "box5", className: "box5", color: "#7F00CB" },
  { id: "box6", className: "box6", color: "#00B19F" },
  { id: "box7", className: "box7", color: "#007A67" },
  { id: "box8", className: "box8", color: "#6953FE" },
  { id: "box9", className: "box9", color: "#475C6D" },
];

const App: React.FC = () => {
  const [boxColors, setBoxColors] = useState<Box[]>(boxData);

  const shuffleColors = () => {
    const shuffledColors = boxColors.map((box) => ({...box, color: getRandomColor()}));
    setBoxColors(shuffledColors);
  };

  const getRandomColor = () => {
    const colors = [
      "#0089E0",
      "#E53458",
      "#8C7A5B",
      "#B85E61",
      "#7F00CB",
      "#00B19F",
      "#007A67",
      "#6953FE",
      "#475C6D",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <Container>
      <DesktopBoxGrid boxData={boxColors} shuffleColors={shuffleColors}/>
      <MobileBoxGrid boxData={boxColors} shuffleColors={shuffleColors}/>
    </Container>
  );
};

export default App;
