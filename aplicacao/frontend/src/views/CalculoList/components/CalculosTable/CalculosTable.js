import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const CalculosTable = props => {
  const { className, calculos, ...rest } = props;

  const classes = useStyles();

  const [selectedCalculos, setSelectedCalculos] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { calculos } = props;

    let selectedCalculos;

    if (event.target.checked) {
      selectedCalculos = calculos.map(calculo => calculo.id);
    } else {
      selectedCalculos = [];
    }

    setSelectedCalculos(selectedCalculos);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCalculos.indexOf(id);
    let newSelectedCalculos = [];

    if (selectedIndex === -1) {
      newSelectedCalculos = newSelectedCalculos.concat(selectedCalculos, id);
    } else if (selectedIndex === 0) {
      newSelectedCalculos = newSelectedCalculos.concat(selectedCalculos.slice(1));
    } else if (selectedIndex === selectedCalculos.length - 1) {
      newSelectedCalculos = newSelectedCalculos.concat(selectedCalculos.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCalculos = newSelectedCalculos.concat(
        selectedCalculos.slice(0, selectedIndex),
        selectedCalculos.slice(selectedIndex + 1)
      );
    }

    setSelectedCalculos(newSelectedCalculos);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCalculos.length === calculos.length}
                      color="primary"
                      indeterminate={
                        selectedCalculos.length > 0 &&
                        selectedCalculos.length < calculos.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Propriedade</TableCell>
                  <TableCell>Município</TableCell>
                  <TableCell>Lote</TableCell>
                  <TableCell>Talhão</TableCell>
                  <TableCell>Data de criação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calculos.slice(0, rowsPerPage).map(calculo => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={calculo.id}
                    selected={selectedCalculos.indexOf(calculo.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCalculos.indexOf(calculo.id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, calculo.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{calculo.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      {calculo.address.city}, {calculo.address.state},{' '}
                      {calculo.address.country}
                    </TableCell>
                    <TableCell>{calculo.lote}</TableCell>
                    <TableCell>{calculo.phone}</TableCell>
                    <TableCell>
                      {moment(calculo.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={calculos.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

CalculosTable.propTypes = {
  className: PropTypes.string,
  calculos: PropTypes.array.isRequired
};

export default CalculosTable;
