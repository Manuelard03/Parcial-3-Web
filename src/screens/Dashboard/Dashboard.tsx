import { useNavigate } from 'react-router-dom';
import "./dashboard.css";

interface Poem {
  id: string;
  title: string;
  excerpt: string;
}

interface DashboardProps {
  poems: Poem[];
}

const Dashboard: React.FC<DashboardProps> = ({ poems }) => {
  const navigate = useNavigate();

  const onReadMore = (id: string) => {
    navigate(`/poem/${id}`);
  };

  const onCreatePoem = () => {
    navigate('/create-poem');
  }; 

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => onReadMore(poem.id)}>Read More</button>
          </div>
        ))}
      </div>
      <button className="create-poem-button" onClick={onCreatePoem}>Create Poem</button>
    </div>
  );
};

export default Dashboard;
