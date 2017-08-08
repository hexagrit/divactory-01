import React from 'react';
import PropTypes from 'prop-types';
import Gist from './Gist';
import Tab from './Tab';

class Example extends React.Component {
  constructor(props, context){
    super(props, context);
  }


  render() {
    const title = this.props.title;
    const gistId = this.props.gist;
    return (
      <div>
        <Tab title={title}>
          <p>SQL Server ML Services enables you to train and test predictive models in the context of SQL Server. You author T-SQL programs that contain embedded Python scripts, and the SQL Server database engine takes care of the execution. Because it executes in SQL Server, your models can easily be trained against data stored in the database. To deploy, you store your model in the database and create a stored procedure that predicts using the model.</p>
          <Gist
            id={gistId}
            />
          SQL Server ML Services enables you to train and test predictive models in the context of SQL Server. You author T-SQL programs that contain embedded Python scripts, and the SQL Server database engine takes care of the execution. Because it executes in SQL Server, your models can easily be trained against data stored in the database. To deploy, you store your model in the database and create a stored procedure that predicts using the model.
        </Tab>
      </div>
    );
  }
}

export default Example;
