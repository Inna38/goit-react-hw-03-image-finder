import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';
// import { Button } from 'components/Button/Button';

// const KEY_API = '38479410-4fdece6f7b350d5238491f06f';
// const BASE_URL = 'https://pixabay.com/api/';

// export class ImageGallery extends Component {
//   // state = {
//   //   data: null,
//   //   page: 1,
//   // };

//   // async componentDidUpdate(prevProps, prevState) {
//   //   if (
//   //     prevProps.searchElement !== this.props.searchElement ||
//   //     prevState.page !== this.state.page
//   //   ) {
//   //     try {
//   //       const { data } = await axios.get(
//   //         `${BASE_URL}?key=${KEY_API}&q=${this.props.searchElement}&image_type=photo&per_page=12&page=${this.state.page}`
//   //       );

//   //       this.setState({
//   //         data,
//   //       });
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   // }

//   // loadBtnClick = () => {
//   //   this.setState({
//   //     page: this.state.page + 1,
//   //   });
//   // };

//   render() {
//     // const { data } = this.state;
    
//     return (
//       <>
//         <ul className={css.ImageGallery}>
//           {/* {data &&
//             data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ( */}
//               <ImageGalleryItem
//                 key={id}
//                 webformatURL={webformatURL}
//                 largeImageURL={largeImageURL}
//                 tags={tags}
//               />
//             {/* ))} */}
//         </ul>

//         {/* {data && <Button loadBtnClick={this.loadBtnClick} />} */}
//       </>
//     );
//   }
// }

export const ImageGallery = ({ data }) => {
  
  return (
<ul className={css.ImageGallery}>
  {data &&
          data.hits.map(({ id, webformatURL, largeImageURL, tags }) => (
             <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              />
   ))} 
       </ul>
  )
}