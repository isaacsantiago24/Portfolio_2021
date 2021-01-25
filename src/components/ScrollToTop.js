import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

//   return null;
// }

// import React, { useLayoutEffect } from "react";
// import { Switch, Route, useLocation } from "react-router-dom";

// export default function Routes() {
//   const location = useLocation();
//   // Scroll to top if path changes
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <Switch>
//       <Route exact path="/"></Route>
//     </Switch>
//   );
// }
