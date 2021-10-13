import { Avatar, Button } from "@mui/material";
import "./App.css";
import { useState, useEffect } from "react";
import categories from "./category";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles/index.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [state, setState] = useState(false);
  const [language, setLanguage] = useState({
    english: "From English",
    englishTo: "To English",
    german: "From German",
    germanTo: "To German",
  });
  const [src, setSrc] = useState({
    engSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vGZwGzOr8hTLt-fd8dnzoAHaDt%26pid%3DApi&f=1",
    gerSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.89Z52La84b0TZwf1ARS_vgHaEc%26pid%3DApi&f=1",
  });

  const handleChange = () => {
    setState(!state);
    setInput1("");
    setInput2("");
  };

  useEffect(() => {
    filterItem();
  }, [input1]);

  const filterItem = () => {
    !state
      ? categories.find(
          (item) => item.value === input1 && setInput2(item.newValue)
        )
      : categories.find(
          (item) => item.newValue === input1 && setInput2(item.value)
        );
  };

  return (
    <div className="App">
      <div className="container">
        <form className="form">
          <div className="flag">
            <div className="icons">
              <Avatar
                style={{
                  objectFit: "cover",
                  height: 24,
                  width: 24,
                  border: "1px solid #59B3FF",
                  marginLeft: 10,
                  marginTop: 18,
                  marginRight: 8,
                }}
                alt="UK flag"
                src={!state ? src.engSrc : src.gerSrc}
              />
              <KeyboardArrowDownIcon
                style={{ height: 18, width: 18, color: "#59B3FF" }}
              />
            </div>
            <h2>{!state ? language.english : language.german}</h2>
          </div>
          <input
            className="inputs"
            type="text"
            // placeholder={!state ? language.english : language.german}
            value={input1}
            onClick={() => setInput1("")}
            onChange={(e) =>
              setInput1(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.substring(1)
              )
            }
          />
          <Button onClick={() => handleChange()}>
            <SwitchRightIcon />
          </Button>

          <input
            className="inputs"
            type="text"
            // placeholder={!state ? language.germanTo : language.englishTo}
            value={input2}
            onClick={() => setInput2("")}
            onChange={(e) =>
              setInput2(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.substring(1)
              )
            }
          />
          <div className="flag">
            <div className="icons">
              <Avatar
                style={{
                  objectFit: "cover",
                  height: 24,
                  width: 24,
                  border: "1px solid #59B3FF",
                  marginLeft: 10,
                  marginTop: 14,
                  marginRight: 8,
                }}
                alt="German Flag"
                src={!state ? src.gerSrc : src.engSrc}
              />
              <KeyboardArrowDownIcon
                style={{ height: 18, width: 18, color: "#59B3FF" }}
              />
            </div>

            <h2>{!state ? language.germanTo : language.englishTo}</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
