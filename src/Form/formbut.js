 import { useState } from "react";
// import Loader from "react-spinners/BarLoader";
import styled from "styled-components";

const Button = ({disabled, amount = 0}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
       e.preventDefault();
       setIsLoading(true)
     };

  const fetchData = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return ( 
    <Buttons onClick={fetchData} disabled={amount === 0 ? true : false} onSubmit={handleSubmit} >
      {!isLoading && <span> {`Pay NGN ${amount || 0}`}</span>}
      {isLoading &&  <span>Loading......</span>}
    </Buttons>
    
  );
};

const Buttons = styled.button`
  min-width: 100px;
  padding: 10px 15px;
  background: #3bb75e;
  border-radius: 20px;
  color: white;
  border: none;
  outline: none;

  .link{
    text-decoration: none;
    list-style: none;
  }
`;

export default Button;
