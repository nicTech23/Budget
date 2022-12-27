import {Box, } from '@mui/material'
import { Stack } from '@mui/system';
import { BudjectProvider } from './components/Context';
import Down from './components/Down'
import Top from './components/Top'


function App() {
  return (
    <Box>
      <Stack direction="column" spacing={0}>
      <BudjectProvider>
        <Top/>
        <Down/>
      </BudjectProvider>
      </Stack>
    </Box>
  );
}

export default App;
