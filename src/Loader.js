import styled from "styled-components";

const Loader = () => {
  return (
    <Load >
        <div class="container">
        <div class="blue"></div>
        </div>
    </Load>
  );
};

const Load = styled.div`
 div > div{
  animation: bounce .5s .5s linear infinite;
  border-radius: 100%;
  margin: 2vw;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue{
  background-color: blue;
  /* animation-delay: 1.4s; */
  width: 2vw;
  height: 2vw;
}

@keyframes bounce {
	0% {
		transform: scale(1);
		filter: blur(0px);
	}

    25% {
		transform: scale(0.6);
		filter: blur(3px);
	}

    50% {
		transform: scale(1);
		filter: blur(0px);
	}

    75% {
		filter: blur(5px);
		transform: scale(2);
	}

    100% {
		transform: scale(1);
		filter: blur(0px);
	}

}

`

export default Loader;
