import React from 'react';
import Pagination from './Pagination';

class App extends React.Component {
  constructor() {
    super();

    var sampleItems = _.range(1, 123).map(i => { return { id: i, name: 'Andre Joseph ' + i }; });

    this.state = {
      sampleItems: sampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
 		this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Pagination Sample</h1>
            {this.state.pageOfItems.map(item =>
                <div key={item.id}>{item.name}</div>
            )}
            <Pagination items={this.state.sampleItems} onChangePage={this.onChangePage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
