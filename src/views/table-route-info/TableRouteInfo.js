// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Rating from '@mui/material/Rating'

const rows = [
  {
    nome: 'Igustavo',
    frota: 'Nordeste',
    placa: 'ID01001',
    origem: 'Bahia',
    destino: 'São Paulo',
    qualidade: '',
    stars: '4.5',
    status: 'professional',
    statusLegend: 'Muito Bom'
  },
  {
    nome: 'Rmachado',
    frota: 'Nordeste',
    placa: 'ID01003',
    origem: 'São Paulo',
    destino: 'São Paulo',
    qualidade: '',
    stars: '5',
    status: 'professional',
    statusLegend: 'Excelente'
  },
  {
    nome: 'Emartins',
    frota: 'Nordeste',
    placa: 'ID01004',
    origem: 'São Paulo',
    destino: 'São Paulo',
    qualidade: '',
    stars: '5',
    status: 'professional',
    statusLegend: 'Excelente'
  },
  {
    nome: 'Alopes',
    frota: 'Nordeste',
    placa: 'ID01005',
    origem: 'São Paulo',
    destino: 'Rio de Janeiro',
    qualidade: '',
    stars: '4.5',
    status: 'professional',
    statusLegend: 'Muito Bom'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const TableRouteInfo = () => {
  // const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Frota</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell>Origem</TableCell>
              <TableCell>Destino</TableCell>
              <TableCell>Qualidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.nome}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.frota}</TableCell>
                <TableCell>{row.placa}</TableCell>
                <TableCell>{row.origem}</TableCell>
                <TableCell>{row.destino}</TableCell>
                <TableCell>
                  <Chip
                    label={row.statusLegend}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Rating name='read-only' value={`${row.stars}`} precision={0.5} readOnly />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default TableRouteInfo
