import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWord } from '../ducks/slice';
import { NewWordInfoForm } from './NewWordInfoForm';
import MaterialTable from 'material-table';
import { addWord, editWord } from '../ducks/slice';
import { forwardRef } from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
export const WordList = () => {
  resetServerContext();
  const wordList = useSelector((state) => state.word.wordList);
  const dispatch = useDispatch();

  const columns = [
    { title: 'English Word', field: 'word' },
    { title: 'Japanese Word', field: 'ja' },
  ];
  return (
    <MaterialTable
      title="Word List"
      icons={tableIcons}
      columns={columns}
      data={JSON.parse(JSON.stringify(wordList))}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(addWord(newData));
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              console.log(oldData);
              console.log(newData);
            }),
              600;
          }),
      }}
    />
    /* <table>
        <thead>
          <tr>
            <th>English Word</th>
            <th>Japanese Word</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word, index) => (
            <tr key={index}>
              <td>{word.word}</td>
              <td>{word.ja}</td>
              <td>
                <button onClick={() => dispatch(deleteWord(index))}>
                  delete
                </button>
              </td>
              <td>
                <NewWordInfoForm oldWord={word} />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
  );
};
