import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Characters from "../Characters/Characters";
import Houses from "../Houses/Houses";
import Spells from "../Spells/Spells";
import Home from "../Home/Home";

function Main() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/houses">Houses</Link>
        <Link to="/spells">Spells</Link>
      </nav>
      <section>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/houses" component={Houses} />
          <Route path="/spells" component={Spells} />
        </Switch>
      </section>
    </div>
  );
}

export default Main;
