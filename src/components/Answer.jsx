import { useForum } from "../context/ForumContext";

export const Answer = () => {
  const { answers } = useForum();
  return (
    <div>
      <h1>Answer</h1>
      <p>{answers}</p>
    </div>
  );
};
