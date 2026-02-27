import { useState } from "react";

import Feedback from "components/Feedback/Feedback";

import "./styles.css";

function Homewwork_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        onDislike={onDislike}
        onLike={onLike}
        like={like}
        dislike={dislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homewwork_07;
