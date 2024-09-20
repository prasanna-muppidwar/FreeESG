"use client";
import { styled, Container, Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/Dashboard/layout/header/Header";
import Sidebar from "@/app/Dashboard/layout/sidebar/Sidebar";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "75vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MainWrapper className="mainwrapper">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* Main Wrapper */}
        <PageWrapper className="page-wrapper">
          {/* Header */}
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
          {/* Page Content */}
          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
            }}
          >
            {/* Page Route */}
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}
