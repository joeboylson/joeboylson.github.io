import React from 'react';
import { AppContext, galleryImageProps } from '../Context/AppContext';
import styled from 'styled-components';
import { Icon } from 'antd';

const Gallery: React.FC = () => {

  const [intersectors, setIntersectors] = React.useState('')

  const context: any = React.useContext(AppContext)

  const filterComments = (comment: string) => {
    let removeHashTags = comment.replace(/(#\S+)/gi, '')
    let removeAccountTags = removeHashTags.replace(/(@\S+)/gi, '')
    let removeThreeDots = removeAccountTags.replace(/•/g, '')
    return removeThreeDots
  }

  const doScroll = (id: string) => {
    let elem: HTMLElement | null = document.getElementById(id)

    if (elem) {
      window.scrollTo(0, (elem.offsetTop - 72))
      setIntersectors(id)
    }
  }

  const callback = (entries: any) => {
    setIntersectors(entries[0].target.id)
  };

  const ImageIndex: any = styled.div`{
    top: calc(${(props: any) => (21 * props.index)}px + 6% - 5px);
  }`;

  const galleryRef: any = React.createRef();

  const observer = new IntersectionObserver(callback, {
    root: galleryRef.current,
    threshold: 1.0
  });

  return (

    <div id={'gallery'}>

      {context.galleryImages &&

        context.galleryImages.map((image: galleryImageProps, index: number) => {

          let id = `gallery-${index}`

          return (

            <div className={'row'} key={index}>

              <div className={'image-wrapper'}>
                <img id={id}
                  src={image.image}
                  alt=""
                  onLoad={(e: any) => { observer.observe(e.target) }}
                />
              </div>
              <p className={'small-text'}>{filterComments(image.comment)}</p>

              <ImageIndex
                className={'image-index'}
                index={index}
                style={{ color: intersectors === id ? 'red' : 'ghostwhite' }}
              >
                <Icon
                  type={'border'}
                  onClick={() => doScroll(id)}
                />
              </ImageIndex>

              {index === (context.galleryImages.length - 1) && 
                < ImageIndex 
                  className={'image-index'}
                  index={index + 1}
                >
                  <Icon
                    type={'arrow-up'}
                    onClick={() => doScroll('gallery')}
                  />
                </ImageIndex>
              }

    </div>
  )
})

      }


    </div >
  );
}

export default Gallery;
