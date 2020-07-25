import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    Aasiya: "Aasiya Jayavant",
    Luvleen: "Luvleen Lawrence",
    Rey: "Rey Mibourne",
    Cayla: "Cayla Brister",
    Deveedaas: "Deveedaas Nandi",
    Obasey: "Obasey Chidy",
    Xenie: "Xenie Dolezelova",
    Ezequiel: "Ezequiel Dengra",
    Aaron: "Aaron Almaraz",
    Jelena: "Jelena Denisova",
    portugalData: [],
    nicaraguaData: [],
    marshallData: [],
  };

  handleChange = (e) => {
    let dataList = this.state.portugalData;
    let check = e.target.checked;
    if (check) {
      this.setState({
        portugalData: [...this.state.portugalData, this.state[e.target.name]],
      });
    } 
    else {
      let index = dataList.indexOf(this.state[e.target.name]);
      console.log(index)
      if(index > -1) {
        dataList.splice(index, 1);
        this.setState({
          portugalData : dataList
        })
      }
    }
  };

  removePor = (i) => {
    const portugalData = [...this.state.portugalData];
    portugalData.splice(i,1);
    this.setState({
      portugalData
    })
  }


  handleChangeNic = (e) => {
    let dataList = this.state.nicaraguaData;
    let check = e.target.checked;
    if (check) {
      this.setState({
        nicaraguaData: [...this.state.nicaraguaData, this.state[e.target.name]],
      });
    }
    else {
      let index = dataList.indexOf(this.state[e.target.name]);
      console.log(index)
      if(index > -1) {
        dataList.splice(index, 1);
        this.setState({
          nicaraguaData : dataList
        })
      }
    }
  };

   removeNic = (i) => {
     const nicaraguaData  = [...this.state.nicaraguaData];
     nicaraguaData.splice(i,1);
     this.setState({
       nicaraguaData
     })
   }


  handleChangeMars = (e) => {
    let dataList = this.state.marshallData;
    let check = e.target.checked;
    if (check) {
      this.setState({
        marshallData: [...this.state.marshallData, this.state[e.target.name]],
      });
    }
    else {
      let index = dataList.indexOf(this.state[e.target.name]);
      console.log(index)
      if(index > -1) {
        dataList.splice(index, 1);
        this.setState({
          marshallData : dataList
        })
      }
    }
  };

  removeMars = (i) => {
    const marshallData  = [...this.state.marshallData];
    marshallData.splice(i,1);
    this.setState({
      marshallData
    })
  }

  render() {
      const {portugalData,nicaraguaData,marshallData, checked} = this.state;
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img className="logo" src="" />
              Logo
            </a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#portfolio"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#about"
                  >
                    My Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#contact"
                  >
                    Clients
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#contact"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="card">
          <div className="container">
            <h3>
              <b>Portugal</b>
            </h3>
            <br />
            <label>
              <input
                name="Aasiya"
                type="checkbox"
                onChange={this.handleChange}
              />{" "}
              Aasiya Jayavant
            </label>
            <br />
            <br />
            <label>
              <input
                name="Luvleen"
                type="checkbox"
                onChange={this.handleChange}
              />{" "}
              Luvleen Lawrence
            </label>
            <br />
            <br />
            <label>
              <input 
                  name="Rey" 
                  type="checkbox" 
                  onChange={this.handleChange}
                   />{" "}
              Rey Mibourne
            </label>
            <br />
            <br />
            <label>
              <input
                name="Cayla"
                type="checkbox"
                onChange={this.handleChange}
              />{" "}
              Cayla Brister
            </label>
            <br />
            <br />
            <h3>
              <b>Nicaragua</b>
            </h3>
            <br />
            <label>
              <input
                name="Deveedaas"
                type="checkbox"
                onChange={this.handleChangeNic}
              />{" "}
              Deveedaas Nandi
            </label>
            <br />
            <br />
            <label>
              <input
                name="Obasey"
                type="checkbox"
                onChange={this.handleChangeNic}
              />{" "}
              Obasey Chidy
            </label>
            <br />
            <br />
            <label>
              <input
                name="Xenie"
                type="checkbox"
                onChange={this.handleChangeNic}
              />{" "}
              Xenie Dolezelova
            </label>
            <br />
            <br />
            <label>
              <input
                name="Ezequiel"
                type="checkbox"
                onChange={this.handleChangeNic}
              />{" "}
              Ezequiel Dengra
            </label>
            <br />
            <br />
            <h3>
              <b>Marshall Islands</b>
            </h3>
            <br />
            <label>
              <input
                name="Aaron"
                type="checkbox"
                onChange={this.handleChangeMars}
              />{" "}
              Aaron Almaraz
            </label>
            <br />
            <br />
            <label>
              <input
                name="Jelena"
                type="checkbox"
                onChange={this.handleChangeMars}
              />{" "}
              Jelena Denisova
            </label>
            <br />
          </div>
        </div>
        <div className="card2">
          <div className="container1">
           <div>
              <h3>Portugal</h3>
               <ul>
                  {portugalData.map((por) => {
                      return(
                          <li className = "list">
                              {por}
                              <button onClick = {this.removePor} >Remove</button>
                          </li>
                      )
                  })}
               </ul> 
           </div>
           <div>
              <h3>Nicaragua</h3>
              <ul>
                  {nicaraguaData.map((nic) => {
                      return(
                          <li className = "list">
                              {nic}
                              <button onClick = {this.removeNic}>RemoveNic</button>
                          </li>
                      )
                  })}
               </ul> 
           </div>
           <div>
              <h3>Marshall Islands</h3>
              <ul>
              {marshallData.map((mars) => {
                 return (
                     <li className = "list">
                         {mars}
                         <button onClick = {this.removeMars}>RemoveMars</button>
                     </li>
                 )
                })}   
              </ul>     
           </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
