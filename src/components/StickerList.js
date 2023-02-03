import { Component } from 'react';
import { Box } from './Box';
import { Sticker } from './Sticker';

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  selectSticker = img => {
    this.setState({ selectedSticker: img });
  };

  render() {
    const { stickers, onSelect } = this.props;
    return (
      <Box as="ul" display="flex" gridGap={4}>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              onSelect={onSelect}
              onToggle={this.selectSticker}
            />
          </li>
        ))}
      </Box>
    );
  }
}
