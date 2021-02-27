const initialModel = {
  n: 0,
  sqrtValue: 0
}

function Increment() {
  return {
    type: Increment.name
  };
}

function Decrement() {
  return {
    type: Decrement.name
  };
}

function CalculateSqrt() {
  return {
    type: CalculateSqrt.name
  };
}

function reducer(model = initialModel, action) {
  switch(action.type) {
    case Increment.name:
      return { ...model, n: model.n + 1 }

    case Decrement.name:
      return { ...model, n: model.n - 1 }

    case CalculateSqrt.name:
      return { ...model, sqrtValue: Math.sqrt(model.n) }

    default:
      return model;
  }  
}

export {
  Increment,
  Decrement,
  CalculateSqrt,
  reducer 
};
