import React from 'react';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import SidebarItems from './SidebarItems';

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const sidebarWidth = '270px';

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: sidebarWidth },
        flexShrink: { lg: 0 },
      }}
    >
      <Drawer
        anchor="left"
        open={isMobileSidebarOpen || lgUp}
        onClose={onSidebarClose}
        variant={lgUp ? 'permanent' : 'temporary'}
        PaperProps={{
          sx: {
            width: sidebarWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            ...(lgUp && {
              position: 'static',
              height: '100%',
            }),
          },
        }}
      >
        <Box sx={{ height: '100%' }}>
          <Box>{/* Logo can be added here */}</Box>
          <Box>
            <SidebarItems />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
