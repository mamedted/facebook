import { useState } from "react";
import SignupPage1 from "./pages/SignupPage1";
import SignupPage2 from "./pages/SignupPage2-name";
import SignupPage3 from "./pages/SignupPage3-birthdate";
import SignupPage4 from "./pages/SignupPage4-gender";
import SignupPage5 from "./pages/SignupPage5-number";
import SignupPage6 from "./pages/SignupPage6-email";
import SignupPage7 from "./pages/SignupPage7-password";
import SignupPage8 from "./pages/SignupPage8-agree";
import SignupPage9 from "./pages/SignupPage9-confirm";
import SignupPage10 from "./pages/SignupPage10-enter";
import LoginPage from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";
import { Route, Routes } from "react-router-dom";
import "./assets/sass.css";
import { SetDp } from "./pages/SetDp";
import { Homepage } from "./pages/Homepage";
import { CreatePost } from "./pages/CreatePostPage";
import { CreateStoryPage } from "./pages/CreateStoryPage";
import { SelectPage } from "./pages/SelectPage";
import { UserProfile } from "./pages/UserProfile";
import { Tester } from "./pages/tester";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/t" element={<Tester />}></Route>
        <Route path="/signup" element={<SignupPage1 />}></Route>
        <Route path="/signup2" element={<SignupPage2 />}></Route>
        <Route path="/signup3" element={<SignupPage3 />}></Route>
        <Route path="/signup4" element={<SignupPage4 />}></Route>
        <Route path="/signup5" element={<SignupPage5 />}></Route>
        <Route path="/signup6" element={<SignupPage6 />}></Route>
        <Route path="/signup7" element={<SignupPage7 />}></Route>
        <Route path="/signup8" element={<SignupPage8 />}></Route>
        <Route path="/signup9" element={<SignupPage9 />}></Route>
        <Route path="/signup10" element={<SignupPage10 />}></Route>
        <Route path="/setdp" element={<SetDp />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/createstory" element={<CreateStoryPage />}></Route>
        <Route path="/selectuser" element={<SelectPage />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
