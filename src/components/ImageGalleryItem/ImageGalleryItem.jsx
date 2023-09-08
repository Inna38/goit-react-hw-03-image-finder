import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt={tags} className={css.image} />
    </li>
  );
};
