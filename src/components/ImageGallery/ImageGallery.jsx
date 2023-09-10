import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ data, onClickImg }) => {
  return (
    <ul className={css.ImageGallery}>
      {data &&
        data.hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClickImg={onClickImg}
          />
        ))}
    </ul>
  );
};
