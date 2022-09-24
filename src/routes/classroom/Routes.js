import React from "react";
import { Redirect, Route } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  console.log(`User`,user,`children`,children)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          console.log('ProtectedRouteHere')
          console.log(location);
          return (
            
            <Redirect
              to={{
                pathname: "classroom/signin",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
