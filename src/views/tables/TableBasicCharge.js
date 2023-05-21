// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (idEquip, placa) => {
  return { placa, idEquip}
}

const rows = [
  createData('i20052023', 'AVI-15860'),
  createData('i20052024', 'ABC-1230'),
  createData('-', 'BBB-4040'),
  createData('i20052026', 'ABB-6580'),
  createData('-','XXX-4560')
]

const TableBasicCharge = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='Rotas - Veículos & Equipamentos'>
        <TableHead>
          <TableRow>
            <TableCell>ID (Equipamento)</TableCell>
            <TableCell align='right'>Placa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.placa}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.idEquip}
              </TableCell>
              <TableCell align='right'>{row.placa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasicCharge
