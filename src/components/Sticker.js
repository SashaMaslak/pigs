import { Component } from 'react';

// export class Sticker extends Component = ({ sticker: { img, label }, onSelect }) => {

export class Sticker extends Component {
  state = { isOpen: false };

  toggleLabel = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      onSelect,
      sticker: { img, label },
    } = this.props;
    return (
      <div
        onClick={() => {
          onSelect(label);
          this.toggleLabel();
        }}
        style={{ border: '1px solid black', padding: 12, borderRadius: 8 }}
      >
        <img src={img} alt={label} width={160} />
        {this.state.isOpen && <p>{label}</p>}
      </div>
    );
  }
}
