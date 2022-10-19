import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
