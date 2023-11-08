//path src\common\components\table\GenericTable.tsx

import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { TableProps, TableDataItem } from './tableData'
import TablePagination from '@mui/material/TablePagination'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@mui/material/styles'

const TableToolbar: React.FC<{ onCreateClick: () => void }> = ({
  onCreateClick,
}) => (
  <div
    style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}
  >
    <IconButton onClick={onCreateClick} color="primary">
      <AddIcon />
    </IconButton>
  </div>
)

function GenericTable<T extends TableDataItem>({
  data,
  headers,
  handleEditClick,
  handleDeleteClick,
  handleCreateClick,
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const theme = useTheme()

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIds = data.map((row) => row.id)
      setSelectedRows(allIds)
    } else {
      setSelectedRows([])
    }
  }

  const handleRowClick = (item: T) => {
    if (selectedRows.includes(item.id)) {
      const selected = selectedRows.filter((id) => id !== item.id)
      setSelectedRows(selected)
    } else {
      const selected = selectedRows.concat(item.id)
      setSelectedRows(selected)
    }
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    if (event != null && event.type === 'click') {
      event.preventDefault()
      setPage(newPage)
    }
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <TableToolbar onCreateClick={handleCreateClick} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Organization table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all' }}
                />
              </TableCell>
              {headers.map((header) => (
                <TableCell
                  key={header.key}
                  align="left"
                  sx={{ display: header.isHidden ? 'none' : 'table-cell' }}
                >
                  {header.label}
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                  backgroundColor: selectedRows.includes(item.id)
                    ? theme.palette.primary.main
                    : 'inherit',
                }}
                onClick={() => handleRowClick(item)}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(item.id)}
                    onChange={() => {}}
                  />
                </TableCell>
                {headers.map((header) => (
                  <TableCell key={header.key} align="left">
                    {String(item[header.key as keyof T])}
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton
                    onClick={() => handleEditClick(item)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteClick(item)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default GenericTable
