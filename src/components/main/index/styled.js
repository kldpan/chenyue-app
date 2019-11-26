import styled from 'styled-components';

function r(px){
  let baseSize=75/2;

  return (px/baseSize).toFixed(2) + "rem";
}
export  const TopBarSd = styled.div`
  height:${r(44)};
  border:1px solid red; 
` 

export const BannerList=styled.div`
  .swiper-container{
    .swiper-wrapper{
      .swiper-slide{
        img{
          height:${r(196)};
        }
      }
    }
  }
`