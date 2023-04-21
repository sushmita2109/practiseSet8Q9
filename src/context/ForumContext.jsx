import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeFetch } from "../data/fakeFetch";
import PropTypes from "prop-types";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forumData, setForumData] = useState([]);

  const [downvote, setDownvote] = useState(0);
  const [answers, setAnswers] = useState("");

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/questions");
      if (res.status === 200) {
        setForumData(res.data.questions);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpvote = ({ id }) => {
    // const isIndexPresent = forumData.findIndex((data) => data.id === id);

    let temp = forumData.map((data) =>
      data.id === id
        ? { ...data, upvote: data.upvote > 0 ? data.upvote + 1 : 1 }
        : { ...data, upvote: 0 }
    );

    setForumData(temp);
  };

  const handleDownvote = ({ id }) => {
    let temp = forumData.map((data) =>
      data.id === id
        ? { ...data, downvote: data.downvote > 0 ? data.downvote + 1 : 1 }
        : { ...data, downvote: 0 }
    );

    setForumData(temp);
  };

  const navigate = useNavigate();
  const handleAnswer = (item) => {
    const filtredAnswer = forumData
      .filter((data) => data.id === item.id)
      .map((ans) => ans.answer);
    setAnswers(filtredAnswer);
    navigate("/answer");
  };

  return (
    <ForumContext.Provider
      value={{
        forumData,
        handleUpvote,
        handleDownvote,
        handleAnswer,
        answers,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
ForumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useForum = () => useContext(ForumContext);
