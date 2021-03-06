import "./App.css";

import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import MainPage from "./component/main/MainPage";
import Emoji from "./component/main/Emoji";
import LikeFolder from "./component/main/LikeFolder";
import Header from "./component/main/Header";
import OneToFifty from "./component/game/OneToFifty";
import { useUserState } from "./component/member/UserContext";
import MyPage from "./component/member/MyPage";
import SignUpPage from "./component/member/SignUpPage";
import LoginPage from "./component/member/LoginPage";

function App1() {
  const { user } = useUserState();

  React.useEffect(()=>{
    console.log('App----------', user);
  },[user])

  return (
    <div className="container">
      <Header />
      <Routes>

        { user && 
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/feed/hashtag/:keyword" element={<MainPage />} />
            <Route path="/emoji" element={<Emoji/>}/>
            <Route path="/likefolder" element={<LikeFolder/>}/>
            <Route path="/OneToFifty" element={<OneToFifty/>}/>
            <Route path="mypage/:user_id" element={<MyPage />} />
          </>
        }
        { !user && 
          <>            
            <Route path="/" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} /> 
          </>
        }

        {/* <Route index element={<Main />} />
          <Route path="feed" element={<Feed />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="storyreal" element={<StoryReal />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="main" element={<Main />} />
          <Route path="*" element={<NoMatch />} /> */}
      </Routes>
       
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App1;
