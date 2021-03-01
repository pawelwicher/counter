import './Hello.css';

export default function Hello(props) {
  return <h1 className="hello-text">Hello, {props.name}</h1>;
}