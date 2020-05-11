import React, { FC, useEffect, useState } from "react";
import GithubRepo from "../GithubRepo";
import axios from "axios";
import Spinner from "../Spinner";

const GithubRepos: FC = () => {
  const [repos, setRepos] = useState([
    {
      description: "",
      name: "",
      url: "",
      primaryLanguage: {
        name: "JavaScript",
      },
    },
  ]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
/*           "http://localhost:2233/github/listRepos"
 */          "https://api.blassantome.com/github/listRepos"
        );

        setLoading(false);
        setRepos(response.data.viewer.repositories.nodes);
      } catch (error) {
        setLoading(false);
        setError(error.response);
      }
    })();
  }, []);
  console.log(repos)
  if (loading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <section>
      {repos.map(({ name, description, url, primaryLanguage }) => (
        <GithubRepo
          key={url}
          description={description}
          name={name}
          url={url}
          primaryLanguage={
            primaryLanguage.name === "JavaScript" ||
            primaryLanguage.name === "TypeScript"
              ? primaryLanguage.name
              : "JavaScript"
          }
        />
      ))}
      <a style={{textDecoration: 'none', color: '#1890ff'}} href="https://github.com/pexugadepollo?tab=repositories">
        Puedes ver más de mis proyectos en GitHub
      </a>
    </section>
  );
};

export default GithubRepos;
