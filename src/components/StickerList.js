import { Box } from './Box';
import { Sticker } from './Sticker';

export const StickerList = ({ stickers, onSelect }) => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker sticker={sticker} onSelect={onSelect} />
        </li>
      ))}
    </Box>
  );
};
