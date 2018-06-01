import * as React from 'react';

interface Props {
  inputRef: (input: HTMLInputElement) => void;
  submit: () => void;
}

interface States {

}

export default class Input extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.props.inputRef} />
        <button onClick={this.props.submit}>提交</button>
      </div>
    );
  }
}
