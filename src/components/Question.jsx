import { useForum } from "../context/ForumContext";

export const Question = () => {
  const { forumData, handleUpvote, handleDownvote, handleAnswer } = useForum();

  return (
    <div>
      <h1>Question</h1>
      {forumData.map((forum) => (
        <li
          key={forum.id}
          style={{
            listStyle: "none",
            border: "1px solid black",
            margin: "0.5rem auto",
            padding: "0.5rem 0.5rem",
            borderRadius: "5px",
          }}
        >
          <h4>{forum.question}</h4>
          <section
            style={{
              margin: "0.5rem auto",
              padding: "0.5rem",
            }}
          >
            <button onClick={() => handleUpvote(forum)}>Upvote</button>{" "}
            <span style={{ padding: "0.5rem" }}>
              {forum.upvote > 0 ? forum.upvote : null}
            </span>
          </section>
          <section
            style={{
              margin: "0.5rem auto",
              padding: "0.5rem",
            }}
          >
            <button onClick={() => handleDownvote(forum)}>DownVote</button>
            <span style={{ padding: "0.5rem" }}>
              {forum.downvote > 0 ? forum.downvote : null}
            </span>
          </section>
          <button onClick={() => handleAnswer(forum)}>Answer</button>
        </li>
      ))}
    </div>
  );
};
