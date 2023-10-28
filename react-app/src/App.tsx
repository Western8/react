import './App.css';
import Wrapper from './Wrapper';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Wrapper />
      </ErrorBoundary>
    </>
  );
}

export default App;
