import { useNavigate, useParams } from 'react-router-dom';
import "./detail.css";

const poems = [
  { id: "1", title: "The Road Not Taken", author: "Robert Frost", lines: ["Two roads diverged in a yellow wood"], linecount: 7 },
  { id: "2", title: "Ozymandias", author: "Percy Bysshe Shelley", lines: ["I met a traveler from an antique land"], linecount: 6 },
  { id: "3", title: "Daffodils", author: "William Wordsworth", lines: ["I wandered lonely as a cloud"], linecount: 6 },
];

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const poem = poems.find(p => p.id === id);
  if (!poem) {
    return <div>Poem not found:/</div>;
  }

  const { author, linecount, lines, title } = poem;

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="detail">
      <button className="back-button" onClick={handleBack}>&larr; Back</button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <div className="content">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <p className="linecount">Line Count: {linecount}</p>
    </div>
  );
};

export default Detail;
