import React from 'react';

import PrivateHeader from './privateHeader';
import NoteList from './noteList';
import Editor from './editor';
import FindFunSidebar from './findFunSidebar'

export default () => {
  return (
    <div>
      <PrivateHeader title="CucaFun" />
      <div className="page-content">
        <div className="page-content__sidebar">
          <NoteList />
        </div>
        <div className="page-content__main">
          <Editor/>
        </div>
      </div>
    </div>
  );
}