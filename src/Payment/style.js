import styled from "styled-components";

const Pay = styled.div`
  max-width: 100%;
  width: 40%;
  background: #f2f2f2;
  margin: 70px auto;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Work Sans";
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  font-size: 14px;
  color: #56799d;
  overflow: hidden;

  @media screen and (max-width: 480px){
    flex-direction: column;
    width: 80%;
    margin: 45px auto;
    align-items: stretch;
    font-size: 16px;
    overflow: hidden;
  }

  @media screen and (min-width: 481px) and (max-width: 600px){
    width: 80%;
    margin: 100px auto;
    font-size: 16px;
    overflow: hidden;
  }

  .side {
    .header {
      line-height: 0.5;
      img {
        max-width: 100%;
        width: 90px;
      }

      @media screen and (max-width: 480px){
        img{
          margin: 0 auto;
          display: block
        }

      }
    }

    .link{
      ul {
      padding-left: 0;

      li {
        list-style: none;
        align-items: center;

        li:hover {
          color: white;
        }

        .links {
          text-decoration: none;
          display: flex;
          align-items: center;
          font-weight: 500px;
          padding: 8px 5px;
          color: #56799d;

          &:hover {
            color: white;
            background: #2335ed;
            border-radius: 10px;
          }

          span {
            margin-left: 5px;
          }
        }
      }
    }

    @media screen and (max-width: 480px){
      h5{
        text-align: center;
      }
      ul{
        display: flex;
        margin-left: 10px;
        align-items: center;
        flex-wrap: wrap;
      }
    }
    }

    .sidebars {
      background-color: white;
      text-align: center;
      padding: 1px 0;
      font-size: 12px;
      border-radius: 10px;
    }
  }

  .main {
    background-color: white;
    border-radius: 20px;
    width: 30%;
    min-height: 100%;
    flex: 1.5;
    margin-left: 18px;

    @media screen and (max-width: 480px){
      margin: 30px auto auto auto;
      width: 100%;

    }
  }
`;
export default Pay;
