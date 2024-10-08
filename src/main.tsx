import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { store } from "./store/index.ts";
import Note from "./pages/Note/Note.tsx";
import NoteCreate from "./pages/NoteCreate/NoteCreate.tsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.tsx";
import NoteBrowse from "./pages/NoteBrowse/NoteBrowse.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
