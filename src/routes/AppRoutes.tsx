import { Route, Routes } from "react-router-dom";

import { Index } from "../pages/index";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Index/>}/>
        </Routes>
    )
}