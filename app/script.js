import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    status: 'work',
    time: 1200,
    timer: null
  }


  formatTime = (time) => {

    function pad(str, max) {
      str = str.toString();
      return str.length < max ? pad('0' + str, max) : str;
    }

    if (typeof (time) != 'number' || time <= 0) {
      return null;
    } else {
      let output = pad(time % 60, 2);

      if (time > 60) {
        output = pad(Math.floor(time / 60) % 60, 2) + ':' + output;
      } else {
        output = '00:00:' + output;
      }
      if (time > 3600) {
        output = pad(Math.floor(time / 3600), 2) + ':' + output;
      } else {
        output = '00:' + output;
      }
      return output;
    }
  }

  startTimer = () => {

  }

  render() {
    const { status, time } = this.state;
    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') &&
          <div>
            <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
            <p>This app will help you track your time and inform you when it's time to rest.</p>
          </div>
        }
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">{this.formatTime(time)}</div>}
        {(status === 'off') && <button className="btn" onClick={this.startTimer}>Start</button>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  };
}

render(<App />, document.querySelector('#app'));
