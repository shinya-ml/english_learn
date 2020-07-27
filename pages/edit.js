import React, { Component } from 'react';
import Link from 'next/link';
import OldWordInfo from '../components/OldWordInfo';
import NewWordInfoForm from '../components/NewWordInfoForm';

class EditPage extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    const editIndex = this.props.query.index;
    return (
      <div>
        <OldWordInfo index={editIndex} />
        <NewWordInfoForm index={editIndex} />
        <Link href="/">
          <button>back to toppage</button>
        </Link>
      </div>
    );
  }
}
export default EditPage;
