import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import LoomOembed from './views/loomOembed';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QueryParams() {
  const query = useQuery();
  const shareCode = query.get("shareCode");

  if (!shareCode) {
    return (
      <p>ERROR: Not set query param "shareCode"</p>
    )
  }

  return (
    <LoomOembed 
      shareCode={shareCode}
    />
  );
}

export default function App() {
  return (
    <Router>
      <QueryParams />
    </Router>
  );
};
