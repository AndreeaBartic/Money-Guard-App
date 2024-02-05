import { DesignContainer } from './DesignContainer/DesignContainer';
import Home from './pages/Home';

export const App = () => {
  return (
    <div>
      <DesignContainer />
      <Home />
    </div>
    // <Routes>
    //   <Route element={<DesignContainer />}>
    //     <Route path="/home" element={<Home />} />
    //   </Route>
    // </Routes>
  );
};
