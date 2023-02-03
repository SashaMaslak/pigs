import { GlobalStyle } from './GlobalStyle';
import { StickerList } from './StickerList';
import stickers from '../stickers.json';
import { Component } from 'react';

export class App extends Component {
  state = {
    selectedStickerLabel: null,
  };

  selectStickerLabel = label => {
    this.setState({ selectedStickerLabel: label });
  };

  render() {
    return (
      <>
        <StickerList stickers={stickers} onSelect={this.selectStickerLabel} />
        <GlobalStyle />
      </>
    );
  }
}
