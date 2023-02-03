import { Component } from 'react';

// export class Sticker extends Component = ({ sticker: { img, label }, onSelect }) => {

export class Sticker extends Component {
  render() {
    const {
      onSelect,
      sticker: { img, label },
    } = this.props;
    return (
      <div
        onClick={() => onSelect(label)}
        style={{ border: '1px solid black', padding: 12, borderRadius: 8 }}
      >
        <img src={img} alt={label} width={160} />
        <p>{label}</p>
      </div>
    );
  }
}
