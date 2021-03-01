import './Welcome.css';

export default function Welcome(props) {
  return <h1 className="welcome-text">Welcome, {props.name}</h1>;
}