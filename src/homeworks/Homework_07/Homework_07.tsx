import { useState } from "react";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
const [like, setLike] = useState(0);  
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
  setLike(prev => prev + 1);
};

   const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };
 return (
    <Feedback
      like={like}
      dislike={dislike}
      onLike={onLike}
      onDislike={onDislike}
      resetResults={resetResults}
    />
  );}
export default Homework_07;

