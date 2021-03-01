import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store';
import Welcome from './Welcome';
import Hello from './Hello';
import Counter from './Counter';
import Sqrter from './Sqrter';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Welcome name={'react'} />
      </div>
      <div>
        <Hello name={'react'} />
      </div>
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
