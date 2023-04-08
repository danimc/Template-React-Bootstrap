import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "../login"
import HomePage from "../home"

export default function ContainerPage() {
  return (
    <Routes>
      <Route index path="/" element={<LoginPage />} />
      <Route index path="/login" element={<LoginPage />} />
      <Route exact path="/home" element={<HomePage />} />
    </Routes>
  )
}
