import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Box
      backgroundImage='url("https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80")'
      minHeight="100vh"
    >
      <Navigation />
      <Outlet />
    </Box>
  );
};
