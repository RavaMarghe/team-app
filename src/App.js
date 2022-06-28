import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Component } from "./Component";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  console.log(t("title3"));

  const toFetch = () => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((ref) => console.log(ref));
  };

  const toFetchPost = () => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        id: 6,
        title: "Title-6",
        author: "Marco",
      }),
    }).then(response => console.log(response.json))
  };

  const putFetch = () => {
    fetch("http://localhost:3000/posts/" + 6, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 6,
        title: "Title x",
        author: "Leopoldo",
      })
    }
    ).then(response => response.json())
  }

  const toDelete = () => {
    fetch("http://localhost:3000/posts/" + 6, {
      method: "DELETE",
    }).then(response => response.json())
  }

  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <p>{t("title2")}</p>
      {t("title3", { returnObjects: true }).map((i) => (
        <p key={i.id}>{i.name}</p>
      ))}
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("it")}>IT</button>
      <Component />
      <button onClick={() => toFetch()}>fetch</button>
      <button onClick={() => toFetchPost()}>fetch post</button>
      <button onClick={() => toDelete()}>delete</button>
      <button onClick={() => putFetch()}>update</button>      
    </div>
  );
}

export default App;
