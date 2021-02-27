import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store';
import Counter from './Counter';
import Sqrter from './Sqrter';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
      <div>
        <Sqrter />
      </div>
    </Provider>
  );
}

export default App;
