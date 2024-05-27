import { useContext } from "react";
import { TextContext } from "../context/TextContext";

export default function TextList() {
  const { texts } = useContext(TextContext);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
