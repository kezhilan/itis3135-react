import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import App from "./App";
import Introduction from "./Introduction";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="introduction" element={<Introduction />} />
                </Route>
            </Routes>
        </HashRouter>
    </StrictMode>
);