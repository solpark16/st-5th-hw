import React, { useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { setTexts } from "./redux/slices/textsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { texts } = useSelector((state) => state.texts);

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    dispatch(setTexts([...texts, text]));
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList />
    </div>
  );
}

export default App;
