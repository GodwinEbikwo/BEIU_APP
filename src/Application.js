import React from "react";
import { AuthProvider } from "./navigator/AuthProvider";
import Routes from "./navigator/Routes";

export default function Application() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
