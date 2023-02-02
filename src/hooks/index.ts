import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation();

  console.log(search, new URLSearchParams(search), 'search')

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
