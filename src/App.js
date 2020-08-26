import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://lh3.googleusercontent.com/proxy/x-MmLWwYXA4RRkkUuHg4XOp4foQPVxJZzv6n7NJzLy6FbPF7aBfRmlIUfgFG4WdNKojUFROmH6eC74_YT4nbjGIUCeJIzP8mfjRsDEQ3eUk7j_Zm_5l-LW74L_b1JbvCmgAYppeJYDPljA" alt="logo"/>
      </header>

      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>

      <div className="content">
        <div>
          <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="image"/>
        </div>
        <div>
          ava + disc
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
