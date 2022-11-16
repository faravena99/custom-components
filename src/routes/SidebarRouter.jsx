import { Route, Routes } from "react-router-dom";
import { GascoButtons, GascoInputs, Home, GascoModal, GascoList, GascoAutoComplete, GascoCard} from "../components";
import { Sidebar } from "../custom/Sidebar";

export const SidebarRouter = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="button" element={<GascoButtons />} />
        <Route path="input" element={<GascoInputs />} />
        <Route path="modal" element={<GascoModal/>}/>
        <Route path="list" element={<GascoList/>}/>
        <Route path="autocomplete" element={<GascoAutoComplete/>}/>
        <Route path="card" element={<GascoCard/>}/>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
